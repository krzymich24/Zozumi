import { DataSource } from 'typeorm';
import { Person } from './person.entity';
export declare const PERSON_REPO = "PERSON_REPOSITORY";
export declare const personProvider: {
    provide: string;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<Person>;
    inject: string[];
}[];
