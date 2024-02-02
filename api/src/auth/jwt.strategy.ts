import { ExtractJwt, Strategy as PassportJwt } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { LYRICS } from '../constants';

@Injectable()
export class JwtStrategy extends PassportStrategy(PassportJwt) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: true, // fixme: false
      secretOrKey: LYRICS,
    });
  }

  async validate(payload: any) {
    return { ...payload };
  }
}
