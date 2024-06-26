import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { fetchData } from '@/app/api/dashboard/dataService';

// Define the data structure based on API response
type Data = {
    // Replace with actual data structure
    id: string;
    name: string;
    value: number;
};

type DataContextType = {
    data: Data | null;
    isLoading: boolean;
    setData: (data: Data | null) => void;
    error: string | null;
};

const DataContext = createContext<DataContextType>({
    data: null,
    isLoading: false,
    setData: () => {}, // Provide a default empty function
    error: null,
});

export const useDataContext = () => useContext(DataContext);

export const DataProvider: React.FC<{children: ReactNode}> = ({ children }) => {
    const [data, setData] = useState<Data | null>(null);
    const [isLoading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchDataAndSetState = async () => {
            try {
                const result = await fetchData();
                setData(result);
            } catch (error: any) {
                console.error('Error fetching data:', error);
                setError('Failed to fetch data');
            } finally {
                setLoading(false);
            }
        };

        fetchDataAndSetState();
    }, []);

    return (
        <DataContext.Provider value={{ data, isLoading, setData, error }}>
            {children}
        </DataContext.Provider>
    );
};

export default DataContext;
