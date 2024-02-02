import { Inject, Injectable } from '@nestjs/common';
import { CreateRouteDto } from './dto/create-route.dto';
import { Repository } from 'typeorm';
import { Route } from './entities/route.entity';
import { ROUTE_REPO } from './route.provider';
import { RouteSetterService } from '../route-setter/route-setter.service';

@Injectable()
export class RouteService {
  constructor(
    @Inject(ROUTE_REPO)
    private repo: Repository<Route>,
    private readonly setters: RouteSetterService,
  ) {}

  async create({ name, grade, gym }: CreateRouteDto, person: string) {
    const author = await this.setters.find(gym, person);
    return this.repo.insert({
      name,
      grade,
      author,
    });
  }

  findAll() {
    return this.repo.find();
  }

  findAllForGym(gym: string) {
    return this.repo.findBy({ author: { gym: { id: gym } } });
  }

  findOne(id: number) {
    return `This action returns a #${id} route`;
  }

  remove(id: number) {
    return `This action removes a #${id} route`;
  }
}
