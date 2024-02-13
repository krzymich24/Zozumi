import axios from 'axios';

const os = require('os');

// Function to find IPv4 address from network interfaces
function getLocalIpAddress() {
  const interfaces = os.networkInterfaces();
  for (const interfaceName in interfaces) {
    const iface = interfaces[interfaceName];
    for (let i = 0; i < iface.length; i++) {
      const alias = iface[i];
      if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
        return alias.address;
      }
    }
  }
  return 'localhost'; // Default to localhost if no network interface is found
}

const ipAddress = getLocalIpAddress();
console.log(ipAddress); // Log the IP address to console

// Now you can use the IP address in your axios configuration
export const API = axios.create({
  baseURL: `http://${ipAddress}:3000`,
});
