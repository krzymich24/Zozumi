import { DataSource } from 'typeorm';
import { Route } from './entities/route.entity';
export declare const ROUTE_REPO = "ROUTE_REPOSITORY";
export declare const routeProvider: {
    provide: string;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<Route>;
    inject: string[];
}[];
