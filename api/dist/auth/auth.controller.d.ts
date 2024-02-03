import { AuthService } from './auth.service';
import { RegisterDto, LoginDto, ResetPasswordDto, RequestPasswordResetDto } from './dto/auth.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    register(body: RegisterDto): Promise<void>;
    login(body: LoginDto): Promise<void>;
    getProfile(req: any): Promise<void>;
    requestPasswordReset(body: RequestPasswordResetDto): Promise<void>;
    resetPassword(body: ResetPasswordDto): Promise<void>;
}
