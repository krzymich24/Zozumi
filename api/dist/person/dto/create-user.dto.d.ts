export declare abstract class UserCredentials {
    username: string;
    password: string;
    __type: 'register' | 'login';
}
export declare class RegisterDto extends UserCredentials {
    email: string;
    __type: 'register';
}
export declare class LoginDto extends UserCredentials {
    __type: 'login';
}
