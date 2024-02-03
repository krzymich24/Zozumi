import { CreateGymDto } from './dto/create-gym.dto';
import { Repository } from 'typeorm';
import { Gym } from './entities/gym.entity';
export declare class GymService {
    private gymRepository;
    constructor(gymRepository: Repository<Gym>);
    create(createGymDto: CreateGymDto): Promise<import("typeorm").InsertResult>;
    findAll(): Promise<Gym[]>;
    findOne(id: string): Promise<Gym>;
    remove(id: number | string): Promise<import("typeorm").DeleteResult>;
}
