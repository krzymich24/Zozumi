import {
  BadGatewayException,
  Body,
  Controller,
  Logger,
  NotFoundException,
  Post,
  Put,
  Query,
  Request,
  UseGuards,
} from '@nestjs/common';
import { Person } from './person.entity';
import { PersonService } from './person.service';
import { sign, verify } from 'jsonwebtoken';
import { CLIENT, LYRICS } from '../constants';
import { Maybe } from 'typescript-functional-extensions';
import { LocalAuthGuard } from '../auth/local-auth.guard';
import { Request as Req } from 'express';
import { join } from 'path';
import { hashSync } from 'bcrypt';
import { RegisterDto } from './dto/create-user.dto';
import { ParseCredentialsPipe } from '../parse-credentials.pipe';

@Controller('person')
export class PersonController {
  private readonly logger = new Logger(PersonController.name);

  constructor(private readonly service: PersonService) {}

  @Post('/register')
  async register(
    @Body(ParseCredentialsPipe) dto: RegisterDto,
  ): Promise<string> {
    this.logger.debug(`Parsed Registration DTO: ${JSON.stringify(dto)}`);
    const person = new Person();
    person.username = dto.username;
    person.password = dto.password;
    person.email = dto.email;
    const created = await this.service.addOne(person);
    const otp = sign({ canActivate: created.id }, LYRICS);
    const link = join(CLIENT, 'auth', 'register', otp);
    this.logger.verbose(
      `Account activation OTP for user=${created.id}: ${link}`,
    );
    return;
  }

  @Put('/activate')
  async activate(@Query('otp') otp: string) {
    const token = verify(otp, LYRICS);
    const userId = Maybe.from(token['canActivate']);

    this.logger.verbose(
      `Account activation attempted for ${userId.getValueOrDefault('???')}`,
    );

    if (userId.hasNoValue) throw new NotFoundException();
    await this.service.activate(userId.getValueOrThrow());

    return;
  }

  @Post('/forgotten')
  async forgottenPassword(@Query('email') email: string) {
    this.logger.debug(`email=${email}, ${decodeURIComponent(email)}`);
    const user = await this.service.findOneByEmail(email);

    if (email !== user.email)
      throw new BadGatewayException(`${email} is not ${user.email}`);

    await this.service.deactivate(user.id);

    const otp = sign({ canReset: user.id }, LYRICS);

    this.logger.verbose(`Password reset OTP for user#${user.id}: ${otp}`);

    return otp;
  }

  @Put('/reset')
  async reset(@Query('otp') otp: string, @Query('password') password: string) {
    const token = verify(otp, LYRICS);
    const userId = Maybe.from(token['canReset']);

    this.logger.verbose(
      `Password reset attempted for ${userId.getValueOrDefault('???')}`,
    );

    if (userId.hasNoValue) throw new NotFoundException();

    await this.service.resetPassword(userId.getValueOrThrow(), hashSync(password,8));

    return;
  }

  @UseGuards(LocalAuthGuard)
  @Put('login')
  async login(@Request() req: Req) {
    this.logger.debug(`User: ${req.user}`);
    return sign(req.user, LYRICS);
  }
}
