import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Discuss } from './discuss.entity';
import { Repository } from 'typeorm';
import { CreateDiscussDto } from './dto';

@Injectable()
export class DiscussService {
  constructor(
    @InjectRepository(Discuss)
    private readonly discussRepository: Repository<Discuss>,
  ) {}

  create(createDiscussInput: CreateDiscussDto): Promise<Discuss> {
    const discuss = new Discuss();
    discuss.content = createDiscussInput.content;
    discuss.articleId = createDiscussInput.articleId;
    discuss.reply=[]

    return this.discussRepository.save(discuss);
  }

  async reply(createDiscussInput: CreateDiscussDto, id: number): Promise<Discuss>  {
    const commit = await this.create(createDiscussInput)
    const result = await this.discussRepository.findOne(id);
    const discuss = new Discuss();
    Object.assign(discuss,result);
    discuss.reply.push(commit.id.toString());
    const updateResult = await this.discussRepository.update(result.id,discuss);
    console.log(updateResult)
    return discuss;
  }

  async findAll(): Promise<Discuss[]> {
    return this.discussRepository.find();
  }

  findOne(id: string): Promise<Discuss> {
    return this.discussRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.discussRepository.delete(id);
  }
}
