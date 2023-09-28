// plugin/api.js

// export const BASE_URL = process.env.BASE_URL; // Base API URL
export const BASE_URL = "http://localhost:8000/api/v1" ; // Base API URL
// export const DEV_URL = "https://api.ipc-africa.com/api/v1"; // Base API URL
export const DEV_URL = "http://localhost:8000/api/v1"; // Base API URL
// export const DEV_URL = process.env.DEV_URL; // Base API URL

export async function fetchData(endpoint, requestOptions) {
  try {
    const response = await fetch(`${DEV_URL}${endpoint}`, requestOptions);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}

// require("dotenv").config(); // Load environment variables from .env file

// export const BASE_URL = process.env.BASE_URL; // Define a constant for your base API URL
// export const DEV_URL = process.env.BASE_URL; // Define a constant for your development API URL

// export async function fetchData(endpoint, requestOptions) {
//   try {
//     const response = await fetch(`${DEV_URL}${endpoint}`, requestOptions); // Use DEV_URL to build the full API endpoint
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     throw new Error(error.message);
//   }
// }

// plugin/api.js

// export const BASE_URL = process.env.API_URL; // Base API URL
// export const DEV_URL = process.env.API_URL; // Base API URL

// export async function fetchData(endpoint, requestOptions) {
//   try {
//     const response = await fetch(`${DEV_URL}${endpoint}`, requestOptions);
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     throw new Error(error.message);
//   }
// }
