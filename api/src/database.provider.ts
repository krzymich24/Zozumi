import { join } from 'path';
import { DataSource } from 'typeorm';
import { networkInterfaces } from 'os';

export const DATA_SOURCE = 'DATA_SOURCE';
export const databaseProvider = [
  {
    provide: DATA_SOURCE,
    useFactory: async () => {
      // Determine the IP address of the chosen network interface
      const chosenInterface = 'enp0s3'; // Change this to your desired network interface name
      const interfaces = networkInterfaces();
      const chosenNetwork = interfaces[chosenInterface].find(
        (iface) => !iface.internal && iface.family === 'IPv4'
      );
      const ipAddress = chosenNetwork ? chosenNetwork.address : 'localhost'; // Fallback to localhost if chosen interface not found

      const dataSource = new DataSource({
        type: 'postgres',
        host: ipAddress,
        port: 5432, // fixme: var
        username: 'root',
        password: 'root',
        database: 'webapp_db',
        entities: [
          join(__dirname, '**', '*.entity.{ts,js}'),
        ],
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];
