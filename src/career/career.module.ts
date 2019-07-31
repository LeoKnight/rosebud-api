import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Career } from './career.entity';
import { CareerService } from './career.service';
import { CareerController } from './career.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Career])],
  providers: [CareerService],
  controllers: [CareerController],
})
export class CareerModule {}
