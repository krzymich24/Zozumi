import { DataSource } from 'typeorm';
import { RouteSetter } from './route-setter.entity';
export declare const ROUTE_SETTER_REPO = "ROUTE_SETTER_RELATIONSHIP";
export declare const routeSetterProvider: {
    provide: string;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<RouteSetter>;
    inject: string[];
}[];
