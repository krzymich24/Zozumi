import { DataSource } from 'typeorm';
import { Gym } from './entities/gym.entity';
export declare const GYM_REPO = "GYM_REPOSITORY";
export declare const gymProvider: {
    provide: string;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<Gym>;
    inject: string[];
}[];
