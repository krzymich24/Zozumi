import { DataSource } from 'typeorm';
import { DATA_SOURCE } from '../database.provider';
import { Route } from './entities/route.entity';

export const ROUTE_REPO = 'ROUTE_REPOSITORY';

export const routeProvider = [
  {
    provide: ROUTE_REPO,
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Route),
    inject: [DATA_SOURCE],
  },
];
