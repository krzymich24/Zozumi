import { Inject, Injectable } from '@nestjs/common';
import { ObjectId, Repository } from 'typeorm';
import { Person } from './person.entity';
import { PERSON_REPO } from './person.provider';

@Injectable()
export class PersonService {
  constructor(
    @Inject(PERSON_REPO)
    private personRepository: Repository<Person>,
  ) {}

  async activate(id: number | string | ObjectId) {
    return this.personRepository.update(id, { isActive: true });
  }

  async resetPassword(id: number | string | ObjectId, password: string) {
    return this.personRepository.update(id, { isActive: true, password });
  }

  async deactivate(id: number | string | ObjectId) {
    return this.personRepository.update(id, { isActive: false });
  }

  async findAll(): Promise<Person[]> {
    return this.personRepository.find();
  }

  async addOne(person: Person) {
    return this.personRepository.save(person);
  }

  async findOneByUsername(username: string) {
    return this.personRepository.findOneBy({ username });
  }

  async findOneByEmail(email: string) {
    return this.personRepository.findOneBy({ email });
  }
}
