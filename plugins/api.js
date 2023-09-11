// plugin/api.js

export const BASE_URL = "https://api.ipc-africa.com/api/v1"; // Base API URL
export const DEV_URL = "http://localhost:8000/api/v1"; // Base API URL

export async function fetchData(endpoint, requestOptions) {
  try {
    const response = await fetch(`${DEV_URL}${endpoint}`, requestOptions);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}
