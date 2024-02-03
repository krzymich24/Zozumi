import { CreateRouteDto } from './dto/create-route.dto';
import { Repository } from 'typeorm';
import { Route } from './entities/route.entity';
import { RouteSetterService } from '../route-setter/route-setter.service';
export declare class RouteService {
    private repo;
    private readonly setters;
    constructor(repo: Repository<Route>, setters: RouteSetterService);
    create({ name, grade, gym }: CreateRouteDto, person: string): Promise<import("typeorm").InsertResult>;
    findAll(): Promise<Route[]>;
    findAllForGym(gym: string): Promise<Route[]>;
    findOne(id: number): string;
    remove(id: number): string;
}
