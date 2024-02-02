import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { Maybe } from 'typescript-functional-extensions';
import {
  LoginDto,
  RegisterDto,
  UserCredentials,
} from './person/dto/create-user.dto';

@Injectable()
export class ParseCredentialsPipe
  implements PipeTransform<object, UserCredentials>
{
  transform(value: object, metadata: ArgumentMetadata): UserCredentials {
    try {
      const username = Maybe.from(value['username']).getValueOrThrow();
      const password = Maybe.from(value['password']).getValueOrThrow();
      const email = Maybe.from(value['email']);
      if (email.hasValue)
        return plainToInstance(
          RegisterDto,
          {
            username,
            password,
            email: email.getValueOrThrow(),
          },
          { excludeExtraneousValues: true },
        );
      return plainToInstance(
        LoginDto,
        {
          username,
          password,
        },
        { excludeExtraneousValues: true },
      );
    } catch (e) {
      throw new BadRequestException('Validation failed');
    }
  }
}
