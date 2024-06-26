// fetchData.test.ts

import { fetchData } from '../dashboard/dataService'; // Replace with the actual path to your fetchData function

describe('fetchData', () => {
  // Mock the fetch function (using a mock implementation)
  const mockFetch = jest.fn();
  global.fetch = mockFetch as any; // Cast to any for testing purposes

  it('fetches data successfully and returns it', async () => {
    const mockData = { someData: 'This is mock data' }; // Replace with expected data structure

    mockFetch.mockResolvedValueOnce(
      new Response(JSON.stringify(mockData), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      })
    );

    const data = await fetchData();

    expect(data).toEqual(mockData);
    expect(mockFetch).toHaveBeenCalledTimes(1); // Assert that fetch was called once
    expect(mockFetch).toHaveBeenCalledWith('https://eu.kobotoolbox.org/api/v2/assets/aBpZqAtYVbKfNQzNoLE7Wt/?format=json', {
      method: 'GET',
      headers: new Headers(), // No Content-Type header as expected
      redirect: 'follow',
    });
  });

  it('handles errors during fetching', async () => {
    mockFetch.mockRejectedValueOnce(new Error('API request failed'));

    try {
      await fetchData();
      fail('Expected an error to be thrown');
    } catch (error) {
      expect(error.message).toBe('Failed to fetch data'); // Or match your specific error message
    }

    expect(mockFetch).toHaveBeenCalledTimes(1); // Assert that fetch was called once
    expect(mockFetch).toHaveBeenCalledWith('https://eu.kobotoolbox.org/api/v2/assets/aBpZqAtYVbKfNQzNoLE7Wt/?format=json', {
      method: 'GET',
      headers: new Headers(), // No Content-Type header as expected
      redirect: 'follow',
    });
  });
});
