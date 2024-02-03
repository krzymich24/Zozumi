import { Strategy as PassportJwt } from 'passport-jwt';
declare const JwtStrategy_base: new (...args: any[]) => PassportJwt;
export declare class JwtStrategy extends JwtStrategy_base {
    constructor();
    validate(payload: any): Promise<any>;
}
export {};
