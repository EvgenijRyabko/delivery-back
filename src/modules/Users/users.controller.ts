import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { User } from '@prisma/client';
import { USERS_SERVICE } from 'src/common/constants';

import { IUsersService } from './users.service';

interface IUsersController {
  getAllUsers(): Promise<User[]>;

  createUser(user: User): Promise<void>;
}

@Controller('users')
export class UsersController implements IUsersController {
  constructor(
    @Inject(USERS_SERVICE) private readonly usersService: IUsersService,
  ) {}

  @Get('')
  async getAllUsers(): Promise<User[]> {
    return await this.usersService.getAllUsers();
  }

  @Post('/user')
  async createUser(@Body() user: User): Promise<void> {
    console.log(user);

    return await this.usersService.createUser(user);
  }
}
