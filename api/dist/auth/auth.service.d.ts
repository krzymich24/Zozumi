import { JwtService } from '@nestjs/jwt';
import { PersonService } from '../person/person.service';
export declare class AuthService {
    private readonly usersService;
    private readonly jwtService;
    private readonly logger;
    constructor(usersService: PersonService, jwtService: JwtService);
    validateSimpleAuth(username: string, pass: string): Promise<any>;
    login(user: any): Promise<string>;
}
