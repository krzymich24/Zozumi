import { DataSource } from 'typeorm';
import { DATA_SOURCE } from '../database.provider';
import { RouteSetter } from './route-setter.entity';

export const ROUTE_SETTER_REPO = 'ROUTE_SETTER_RELATIONSHIP';

export const routeSetterProvider = [
  {
    provide: ROUTE_SETTER_REPO,
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(RouteSetter),
    inject: [DATA_SOURCE],
  },
];
