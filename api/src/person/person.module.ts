import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database.module';
import { personProvider } from './person.provider';
import { PersonService } from './person.service';
import { PersonController } from './person.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [PersonController],
  providers: [...personProvider, PersonService],
  exports: [PersonService],
})
export class PersonModule {}
