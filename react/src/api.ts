import axios from 'axios';
import os from 'os';

// Get the local IP address dynamically for the 'enp0s3' interface
const networkInterfaces = os.networkInterfaces();
const interfaceInfo = networkInterfaces['enp0s3'];
let localIpAddress;

if (interfaceInfo && interfaceInfo.length > 0) {
  localIpAddress = interfaceInfo[0].address;
} else {
  console.error("Unable to find IP address for interface enp0s3");
  process.exit(1); // Exit the process if IP address is not found
}

console.log(localIpAddress); // Log the IP address to console

// Now you can use the IP address in your axios configuration
export const API = axios.create({
  baseURL: `http://${localIpAddress}:3000`,
});
