import { Inject, Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { USERS_REPO } from 'src/common/constants';

import { IUsersRepo } from './users.repo';

export interface IUsersService {
  getAllUsers(): Promise<User[]>;

  createUser(user: User): Promise<void>;
}

@Injectable()
export class UsersService {
  constructor(@Inject(USERS_REPO) private readonly usersRepo: IUsersRepo) {}

  async getAllUsers(): Promise<User[]> {
    return await this.usersRepo.getAllUsers();
  }

  async createUser(user: User): Promise<void> {
    return await this.usersRepo.createUser(user);
  }
}
