import { join } from 'path';
import { DataSource } from 'typeorm';

export const DATA_SOURCE = 'DATA_SOURCE';
export const databaseProvider = [
  {
    provide: DATA_SOURCE,
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: 'localhost',
        port: 5432, // fixme: var
        username: 'root',
        password: 'root',
        database: 'vehicle_db',
        entities: [
          join(__dirname, '**', '*.entity.{ts,js}'),
        ],
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];
