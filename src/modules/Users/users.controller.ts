import { USERS_SERVICE } from '@common/constants';
import { UserDTO } from '@common/dto/user.dto';
import { UserEntity } from '@entities/user.entity';
import { Body, Controller, Get, Inject, Post } from '@nestjs/common';

import { IUsersService } from './users.service';

interface IUsersController {
  getAllUsers(): Promise<UserEntity[]>;

  createUser(user: UserEntity): Promise<void>;
}

@Controller('users')
export class UsersController implements IUsersController {
  constructor(
    @Inject(USERS_SERVICE) private readonly usersService: IUsersService,
  ) {}

  @Get('')
  async getAllUsers() {
    return await this.usersService.getAllUsers();
  }

  @Post('/user')
  async createUser(@Body() user: UserDTO) {
    console.log(user);

    return await this.usersService.createUser(user);
  }
}
