import { Repository } from 'typeorm';
import { RouteSetter } from './route-setter.entity';
import { ResultAsync } from 'typescript-functional-extensions';
export declare class RouteSetterService {
    private gymRepository;
    constructor(gymRepository: Repository<RouteSetter>);
    create(gymId: string, userId: string): Promise<import("typeorm").InsertResult>;
    verify(gym: string, person: string): ResultAsync<number, string>;
    listAllByGym(gymId: string): Promise<RouteSetter[]>;
    remove(gymId: string, userId: string): Promise<import("typeorm").DeleteResult>;
    find(gym: string, person: string): Promise<RouteSetter>;
}
