import { PersonService } from './person.service';
import { Request as Req } from 'express';
import { RegisterDto } from './dto/create-user.dto';
export declare class PersonController {
    private readonly service;
    private readonly logger;
    constructor(service: PersonService);
    register(dto: RegisterDto): Promise<string>;
    activate(otp: string): Promise<void>;
    forgottenPassword(email: string): Promise<string>;
    reset(otp: string, password: string): Promise<void>;
    login(req: Req): Promise<string>;
}
