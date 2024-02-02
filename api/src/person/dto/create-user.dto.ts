import { Expose, Transform } from 'class-transformer';
import { hashSync } from 'bcrypt';

export abstract class UserCredentials {
  @Expose()
  username: string;

  @Expose()
  @Transform(({ value }) => hashSync(value, 8))
  password: string;

  @Expose()
  __type: 'register' | 'login';
}

export class RegisterDto extends UserCredentials {
  @Expose()
  email: string;

  __type: 'register';
}

export class LoginDto extends UserCredentials {
  __type: 'login';
}
