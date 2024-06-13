import { UserEntity } from '@entities/user.entity';
import { Injectable } from '@nestjs/common';
import { Knex } from 'knex';
import { InjectConnection } from 'nest-knexjs';

export interface IUsersRepo {
  getAllUsers(): Promise<UserEntity[]>;

  createUser(user: UserEntity): Promise<void>;
}

@Injectable()
export class UsersRepo {
  constructor(@InjectConnection() private readonly knex: Knex) {}

  async getAllUsers() {
    return await this.knex('users');
  }

  async createUser(user: UserEntity) {
    await this.knex('users').insert(user);
  }
}
