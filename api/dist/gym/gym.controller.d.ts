import { GymService } from './gym.service';
import { CreateGymDto } from './dto/create-gym.dto';
import { RouteSetterService } from '../route-setter/route-setter.service';
import { Person } from '../person/person.entity';
export declare class GymController {
    private readonly gymService;
    private readonly routeSetterService;
    constructor(gymService: GymService, routeSetterService: RouteSetterService);
    create(createGymDto: CreateGymDto): Promise<import("typeorm").InsertResult>;
    findAll(): Promise<import("./entities/gym.entity").Gym[]>;
    findOne(id: string): Promise<import("./entities/gym.entity").Gym>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
    assign(gymId: string, personId: string, credentials: Person): Promise<import("typeorm").InsertResult>;
    unAssign(gymId: string, personId: string, credentials: Person): Promise<import("typeorm").DeleteResult>;
    listRouteSetters(id: string, credentials: Person): Promise<import("../route-setter/route-setter.entity").RouteSetter[]>;
    isAllowed(id: string, credentials: Person): Promise<{
        isAllowed: boolean;
    }>;
}
