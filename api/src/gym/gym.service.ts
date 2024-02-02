import { Inject, Injectable } from '@nestjs/common';
import { CreateGymDto } from './dto/create-gym.dto';
import { Repository } from 'typeorm';
import { Gym } from './entities/gym.entity';
import { GYM_REPO } from './gym.provider';

@Injectable()
export class GymService {
  constructor(
    @Inject(GYM_REPO)
    private gymRepository: Repository<Gym>,
  ) {}

  create(createGymDto: CreateGymDto) {
    return this.gymRepository.insert(createGymDto);
  }

  findAll() {
    return this.gymRepository.find();
  }

  findOne(id: string) {
    return this.gymRepository.findOneBy({ id });
  }

  remove(id: number | string) {
    return this.gymRepository.delete(id);
  }
}
