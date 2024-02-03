import { DataSource } from 'typeorm';
export declare const DATA_SOURCE = "DATA_SOURCE";
export declare const databaseProvider: {
    provide: string;
    useFactory: () => Promise<DataSource>;
}[];
