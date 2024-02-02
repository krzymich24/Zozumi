// auth.module.ts
import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
// import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtStrategy } from './jwt.strategy';
import { LYRICS } from '../constants';
import { PersonModule } from '../person/person.module';
import { LocalStrategy } from './local.strategy';
import { PersonService } from '../person/person.service';
import { personProvider } from '../person/person.provider';
import { DatabaseModule } from '../database.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    // ConfigModule.forRoot(), // Move this line up
    // MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
    // PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: LYRICS,
      signOptions: { expiresIn: '1h' },
    }),
    PersonModule,
    PassportModule,
    DatabaseModule,
  ],
  providers: [
    AuthService,
    PersonService,
    JwtStrategy,
    LocalStrategy,
    ...personProvider,
  ],
  // exports: [AuthService /*, JwtModule*/],
})
export class AuthModule {}
