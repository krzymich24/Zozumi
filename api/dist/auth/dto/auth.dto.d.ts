export declare class UserDto {
    id: number;
    isAdmin: boolean;
    username: string;
}
export declare class RegisterDto {
    email: string;
    password: string;
    name: string;
}
export declare class LoginDto {
    email: string;
    password: string;
}
export declare class RequestPasswordResetDto {
    email: string;
}
export declare class ResetPasswordDto {
    token: string;
    newPassword: string;
}
