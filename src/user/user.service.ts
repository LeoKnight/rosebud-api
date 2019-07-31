import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getConnection } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly UserRepository: Repository<User>,
  ) { }

  async findAll(): Promise<User[]> {
    return await this.UserRepository.find();
  }

  async insert(body): Promise<any> {

    return await getConnection()
    .createQueryBuilder()
    .insert()
    .into(User)
    .values([
      body,
     ])
    .execute();
  }

  async delete(id) {
    return await getConnection()
    .createQueryBuilder()
    .delete()
    .from(User)
    .where('id = :id', { id })
    .execute();
  }
}
