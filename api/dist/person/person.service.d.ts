import { ObjectId, Repository } from 'typeorm';
import { Person } from './person.entity';
export declare class PersonService {
    private personRepository;
    constructor(personRepository: Repository<Person>);
    activate(id: number | string | ObjectId): Promise<import("typeorm").UpdateResult>;
    resetPassword(id: number | string | ObjectId, password: string): Promise<import("typeorm").UpdateResult>;
    deactivate(id: number | string | ObjectId): Promise<import("typeorm").UpdateResult>;
    findAll(): Promise<Person[]>;
    addOne(person: Person): Promise<Person>;
    findOneByUsername(username: string): Promise<Person>;
    findOneByEmail(email: string): Promise<Person>;
}
