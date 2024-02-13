import axios from 'axios';
import { networkInterfaces } from 'os';

// Function to find the IP address associated with the specified network interface
function getIPAddress(interfaceName) {
  const interfaces = networkInterfaces();
  if (interfaces && interfaces[interfaceName]) {
    const iface = interfaces[interfaceName].find(iface => iface.family === 'IPv4');
    if (iface) {
      return iface.address;
    }
  }
  return 'localhost'; // Fallback to localhost if interface or IP address not found
}

// Use the function to get the IP address of the specified network interface
const ipAddress = getIPAddress('enp0s3');

// Create an instance of Axios with the obtained IP address as baseURL
export const API = axios.create({
  baseURL: `http://${ipAddress}:3000`,
});
