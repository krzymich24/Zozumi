import { RouteService } from './route.service';
import { CreateRouteDto } from './dto/create-route.dto';
import { Person } from '../person/person.entity';
export declare class RouteController {
    private readonly routeService;
    constructor(routeService: RouteService);
    create(createRouteDto: CreateRouteDto, cred: Person | undefined): Promise<import("typeorm").InsertResult>;
    findAll(): Promise<import("./entities/route.entity").Route[]>;
    findOne(id: string): string;
    findAllByGym(id: string): Promise<import("./entities/route.entity").Route[]>;
    remove(id: string): string;
}
