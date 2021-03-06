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

  async create(createDiscussInput: CreateDiscussDto): Promise<Discuss> {
    const discuss = new Discuss();
    discuss.content = createDiscussInput.content;
    discuss.articleId = createDiscussInput.articleId;
    discuss.reply=[];
    const { replyId } = createDiscussInput;
    if(replyId){
      const discuss = await this.discussRepository.findOne(replyId);
      discuss.reply = [...discuss.reply,replyId]
      this.discussRepository.update(replyId,discuss)
    }
    return this.discussRepository.save(discuss);
  }

  async reply(createDiscussInput: CreateDiscussDto, id: number): Promise<Discuss>  {
    
    const replyedDiscuss = await this.discussRepository.findOne(id);
    if(!replyedDiscuss){
      throw new Error(`未找到该数据：${id}`)
    }
    const reply = await this.create(createDiscussInput)
    const discuss = new Discuss();
    discuss.reply.push(reply.id);
    const updateResult = await this.discussRepository.update(id,discuss);
    return reply;
  }

  async findAll(): Promise<Discuss[]> {
    const allDiscuss = await this.discussRepository.find();
    const result = await Promise.all(allDiscuss.map(async (discuss)=>{
      if(discuss && discuss.reply.length>0){
        const {reply}=discuss;
        discuss.replyEtities = await this.discussRepository.findByIds(reply);
      }
      return discuss
    }))

    return result;
    
  }

  async findOne(id: string): Promise<Discuss> {
    const discuss = await this.discussRepository.findOne(id);
    if(discuss && discuss.reply.length>0){
      const {reply}=discuss;
      discuss.replyEtities = await this.discussRepository.findByIds(reply);
    }
    return discuss
  }

  async remove(id: string): Promise<void> {
    await this.discussRepository.delete(id);
  }
}
