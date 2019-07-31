import { Controller, Get, Post, Body, Delete, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Get()
  findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Post()
  insert(
    @Body() body,
  ): Promise<User[]> {
    return this.userService.insert(body);
  }
  // @Delete(':id')
  // delete(
  //   @Param('id') id,
  // ) {
  //   return this.UserService.delete(id);
  // }
}
