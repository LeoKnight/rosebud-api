import { Controller, Get, Post, Body, Delete, Param } from '@nestjs/common';
import { CareerService } from './career.service';
import { Career } from './career.entity';

@Controller('career')
export class CareerController {
  constructor(private readonly careerService: CareerService) { }

  @Get()
  findAll(): Promise<Career[]> {
    return this.careerService.findAll();
  }

  @Post()
  insert(
    @Body() body,
  ): Promise<Career[]> {
    return this.careerService.insert(body);
  }
  @Delete(':id')
  delete(
    @Param('id') id,
  ) {
    return this.careerService.delete(id);
  }
}
