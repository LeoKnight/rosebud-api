import { Module } from '@nestjs/common';
import { DiscussService } from './discuss.service';
import { DiscussResolver } from './discuss.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Discuss } from './discuss.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Discuss])],
  providers: [DiscussService, DiscussResolver]
})
export class DiscussModule {}
