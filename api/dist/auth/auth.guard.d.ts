import { CanActivate, ExecutionContext } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
export declare class JwtAuthGuard implements CanActivate {
    private jwtService;
    constructor(jwtService: JwtService);
    private readonly logger;
    canActivate(context: ExecutionContext): Promise<boolean>;
    private extractTokenFromHeader;
}
