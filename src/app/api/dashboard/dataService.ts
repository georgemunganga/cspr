'use server'
import { GetServerSideProps } from 'next';

export interface FetchDataResult {
    data: unknown;
    error: string | null;
}

export async function fetchData(): Promise<any> {
    const myHeaders = new Headers();
    // Remove unnecessary Content-Type header for GET requests
    myHeaders.append('Content-Type', 'application/json',);

    try {
        const response = await fetch('https://eu.kobotoolbox.org/api/v2/assets/aBpZqAtYVbKfNQzNoLE7Wt/?format=json', {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow',
        });

        if (!response.ok) {
            throw new Error(`API request failed with status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data)
        return {
           // props: {
                data
         //   },
        };
    } catch (error) {
        console.error('Error fetching data:', error);
        throw new Error('Failed to fetch data'); // Or return a default value (e.g., null)
    }
}

