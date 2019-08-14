import { Controller, Get, Post, Body, Delete, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Get()
  findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Post()
  insert(
    @Body() body,
  ): Promise<User[]> {
    return this.usersService.insert(body);
  }
  // @Delete(':id')
  // delete(
  //   @Param('id') id,
  // ) {
  //   return this.UsersService.delete(id);
  // }
}
