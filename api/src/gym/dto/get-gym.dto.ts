import { Expose, plainToInstance, Transform } from 'class-transformer';

export class GetGymDto {
  @Expose()
  @Transform(({ value }) => +value)
  id!: number;

  @Expose()
  name!: string;

  @Expose()
  location!: string;

  @Expose()
  image!: string;

  @Expose()
  isModifiable?: boolean;

  static from(plain: any) {
    return plainToInstance(GetGymDto, plain);
  }
}
