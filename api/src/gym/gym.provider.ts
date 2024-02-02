import { DataSource } from 'typeorm';
import { DATA_SOURCE } from '../database.provider';
import { Gym } from './entities/gym.entity';

export const GYM_REPO = 'GYM_REPOSITORY';

export const gymProvider = [
  {
    provide: GYM_REPO,
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Gym),
    inject: [DATA_SOURCE],
  },
];
