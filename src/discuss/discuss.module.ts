import { Module } from '@nestjs/common';
import { DiscussService } from './discuss.service';
import { DiscussResolver } from './discuss.resolver';

@Module({
  providers: [DiscussService, DiscussResolver]
})
export class DiscussModule {}
