import { Strategy as PassportLocal } from 'passport-local';
import { AuthService } from './auth.service';
declare const LocalStrategy_base: new (...args: any[]) => PassportLocal;
export declare class LocalStrategy extends LocalStrategy_base {
    private authService;
    constructor(authService: AuthService);
    validate(username: string, password: string): Promise<any>;
}
export {};
