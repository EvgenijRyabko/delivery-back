import { USERS_REPO } from '@common/constants';
import { UserEntity } from '@entities/user.entity';
import { Inject, Injectable } from '@nestjs/common';

import { IUsersRepo } from './users.repo';

export interface IUsersService {
  getAllUsers(): Promise<UserEntity[]>;

  createUser(user: UserEntity): Promise<void>;
}

@Injectable()
export class UsersService {
  constructor(@Inject(USERS_REPO) private readonly usersRepo: IUsersRepo) {}

  async getAllUsers() {
    return await this.usersRepo.getAllUsers();
  }

  async createUser(user: UserEntity) {
    return await this.usersRepo.createUser(user);
  }
}
