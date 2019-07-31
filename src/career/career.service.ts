import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getConnection } from 'typeorm';
import { Career } from './career.entity';

@Injectable()
export class CareerService {
  constructor(
    @InjectRepository(Career)
    private readonly careerRepository: Repository<Career>,
  ) { }

  async findAll(): Promise<Career[]> {
    return await this.careerRepository.find();
  }

  async insert(body): Promise<any> {
    const {
      name = '未知',
      description = '无描述',
    } = body;
    const career = new Career();
    career.name = name;
    career.description = description;
    return await this.careerRepository.save(career);
  }

  async delete(id) {
    return await getConnection()
    .createQueryBuilder()
    .delete()
    .from(Career)
    .where('id = :id', { id })
    .execute();
  }
}
