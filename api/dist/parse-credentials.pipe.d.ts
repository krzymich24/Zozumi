import { ArgumentMetadata, PipeTransform } from '@nestjs/common';
import { UserCredentials } from './person/dto/create-user.dto';
export declare class ParseCredentialsPipe implements PipeTransform<object, UserCredentials> {
    transform(value: object, metadata: ArgumentMetadata): UserCredentials;
}
