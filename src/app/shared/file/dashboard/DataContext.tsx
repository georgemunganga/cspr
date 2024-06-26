// context/DataContext.tsx

import React, { createContext, useContext, useEffect, useState } from 'react';
import { fetchData } from '@/app/api/dashboard/dataService';

type Data = Record<string, unknown>; // Define your data structure here based on API response

type DataContextType = {
    data: Data | null;
    isLoading: boolean;
    setData: (data: Data | null) => void;
    error: string | null;
};

const DataContext = createContext<DataContextType>({
    data: null,
    isLoading: false,
    error: null,
});

export const useDataContext = () => useContext(DataContext);

export const DataProvider: React.FC = ({ children }) => {
    const [data, setData] = useState<Data | null>(null);
    const [isLoading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchDataAndSetState = async () => {
            try {
                const result = await fetchData();
                setData(result);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setError('Failed to fetch data');
                setLoading(false);
            }
        };

        fetchDataAndSetState();
    }, []);

    return (
        <DataContext.Provider value={{ data, isLoading, error }}>
            {children}
        </DataContext.Provider>
    );
};

export default DataContext;
