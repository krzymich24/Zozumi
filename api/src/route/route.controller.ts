import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';
import { RouteService } from './route.service';
import { CreateRouteDto } from './dto/create-route.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { Credentials } from '../auth/credentials.decorator';
import { Person } from '../person/person.entity';

@Controller('route')
export class RouteController {
  constructor(private readonly routeService: RouteService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(
    @Body() createRouteDto: CreateRouteDto,
    @Credentials() cred: Person | undefined,
  ) {
    if (!cred?.id) throw new UnauthorizedException();
    return this.routeService.create(createRouteDto, cred.id + '');
  }

  @Get()
  findAll() {
    return this.routeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.routeService.findOne(+id);
  }

  @Get('gym/:id')
  findAllByGym(@Param('id') id: string) {
    return this.routeService.findAllForGym(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.routeService.remove(+id);
  }
}
