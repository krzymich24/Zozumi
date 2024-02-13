import axios from 'axios';

const ipAddress = '192.168.1.13';
console.log(ipAddress); // Log the IP address to console

// Now you can use the IP address in your axios configuration
export const API = axios.create({
  baseURL: `http://${ipAddress}:3000`,
});
