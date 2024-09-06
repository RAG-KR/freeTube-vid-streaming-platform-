import axios from "axios";

// Base URL for the YouTube API
const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

// API request options including the headers
const options = {
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY, // Use your API key here
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
};

// Function to fetch data from the API
export const fetchFromAPI = async (url, params = {}) => {
  try {
    // Make the API request with the passed URL and parameters
    const { data } = await axios.get(`${BASE_URL}/${url}`, {
      ...options, // Include the headers
      params: {
        maxResults: 50,  // Ensure we get 50 results
        ...params,  // Spread the additional query parameters
      },
    });

    return data;  // Return the data from the response
  } catch (error) {
    console.error('Error fetching data from API:', error);
    throw error;  // Optionally throw error for further handling
  }
};
