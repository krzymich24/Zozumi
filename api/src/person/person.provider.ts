import { DataSource } from 'typeorm';
import { Person } from './person.entity';
import { DATA_SOURCE } from '../database.provider';

export const PERSON_REPO = 'PERSON_REPOSITORY';

export const personProvider = [
  {
    provide: PERSON_REPO,
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Person),
    inject: [DATA_SOURCE],
  },
];
