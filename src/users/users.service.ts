import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getConnection } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly UsersRepository: Repository<User>,
  ) { }

  async findAll(): Promise<User[]> {
    return await this.UsersRepository.find();
  }

  async findUserByName(name: string): Promise<User | undefined> {
    const target = await this.UsersRepository.
    createQueryBuilder("user")
    .where('user.name = :name', {name})
    .getOne();
    return target
  }

  async findUserById(id: string): Promise<User | undefined> {
    return await getConnection()
    .createQueryBuilder()
    .where('user.id = :id', {id})
    .execute();
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
