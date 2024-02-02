import { Module } from '@nestjs/common';
import { RouteService } from './route.service';
import { RouteController } from './route.controller';
import { routeProvider } from './route.provider';
import { DatabaseModule } from '../database.module';
import { RouteSetterService } from '../route-setter/route-setter.service';
import { routeSetterProvider } from '../route-setter/route-setter.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [RouteController],
  providers: [
    ...routeProvider,
    RouteService,
    RouteSetterService,
    ...routeSetterProvider,
  ],
})
export class RouteModule {}
