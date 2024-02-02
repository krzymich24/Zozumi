import { Module } from '@nestjs/common';
import { GymService } from './gym.service';
import { GymController } from './gym.controller';
import { gymProvider } from './gym.provider';
import { DatabaseModule } from '../database.module';
import { RouteSetterService } from '../route-setter/route-setter.service';
import { routeSetterProvider } from '../route-setter/route-setter.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [GymController],
  providers: [
    ...gymProvider,
    ...routeSetterProvider,
    GymService,
    RouteSetterService,
  ],
})
export class GymModule {}
