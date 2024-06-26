'use client'
// Import necessary modules and components
import React, { useEffect, useState } from 'react';
import FileStats from '@/app/shared/file/dashboard/file-stats';
import StorageReport from '@/app/shared/file/dashboard/storage-report';
//import StorageSummary from '@/app/shared/file/dashboard/storage-summary';
import RecentFiles from '@/app/shared/file/dashboard/recent-files';
import QuickAccess from '@/app/shared/file/dashboard/quick-access';
import ActivityReport from '@/app/shared/file/dashboard/activity-report';
import Members from '@/app/shared/file/dashboard/members';
import FileListTable from '@/app/shared/file/dashboard/file-list/table';
import UpgradeStorage from '@/app/shared/file/dashboard/upgrade-storage';
import RecentActivities from '@/app/shared/file/dashboard/recent-activities';
import Provinces from '@/app/shared/file/provinces';
import { fetchData } from '@/app/api/dashboard/dataService';
import type { DataItem } from '@/app/types'; // Adjust DataItem type based on your actual data structure
import type { GetServerSideProps } from 'next';

// Define the DashboardProps interface
interface DashboardProps {
  data: unknown; // Define the correct type for your data if possible
  errors: string | null;  
}

// Define the FileDashboard component
const FileDashboard: React.FC<DashboardProps> = ({ data, errors }) => {
  const [fileData, setFileData] = useState<DataItem[]>([]); // Initialize fileData state
  const [isLoading, setLoading] = useState<boolean>(false); // Initialize isLoading state
  const [error, setError] = useState<string | null>(null); // Initialize error state


  // Function to fetch data from API
  const fetchDataFromApi = async () => {
    setLoading(true); // Set loading state to true
    try {
      const result = await fetchData(); // Assuming fetchData fetches data from your API
      setFileData(result); // Set fetched data to fileData state
     
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('Failed to fetch data'); // Set error state if fetch fails
    } finally {
      setLoading(false); // Set loading state to false after fetch attempt
    }
  };

  useEffect(() => {
    fetchDataFromApi(); // Fetch data on component mount
    
  }, []);

  // Conditional rendering based on loading and error states
  if (isLoading) {
    
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return <div> <p>Error: {error}! check your internet connection or data server!</p>
      <button onClick={fetchDataFromApi}>Retry</button>  </div>;
  }

  if (fileData.length === 0) {
    return <p>No data available.</p>;
  }

  // Render the dashboard if data is available
  return (
    <div className="container">
      <FileStats className="mb-5 2xl:mb-8" />
      <div className="mb-6 grid grid-cols-1 gap-6 4xl:grid-cols-12 2xl:mb-8 2xl:gap-8">
        <StorageReport className="container 4xl:col-span-8 96.937rem:col-span-9" />
      
      </div>
      <div className="grid grid-cols-1 gap-6 container lg:grid-cols-12 2xl:gap-8">
        <div className="col-span-full flex flex-col gap-6 5xl:col-span-12 2xl:gap-8 3xl:col-span-12">
          <Provinces data={fileData} />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6 container lg:grid-cols-12 2xl:gap-8">
        <div className="col-span-full flex flex-col gap-6 5xl:col-span-8 2xl:gap-8 3xl:col-span-9">
          <Provinces data={JSON.stringify(fileData)} />
          <QuickAccess />
          <RecentFiles />
          <ActivityReport />
          <FileListTable />
        </div>
        <div className="col-span-full flex flex-col gap-6 5xl:col-span-4 2xl:gap-8 3xl:col-span-3">
          <RecentActivities />
          <Members />
          <UpgradeStorage />
        </div>
      </div>
    </div>
  );
};

export default FileDashboard;
