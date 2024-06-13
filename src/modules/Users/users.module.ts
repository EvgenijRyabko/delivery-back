import { USERS_REPO, USERS_SERVICE } from '@common/constants';
import { Module } from '@nestjs/common';

import { UsersController } from './users.controller';
import { UsersRepo } from './users.repo';
import { UsersService } from './users.service';

@Module({
  imports: [],
  controllers: [UsersController],
  providers: [
    { provide: USERS_REPO, useClass: UsersRepo },
    { provide: USERS_SERVICE, useClass: UsersService },
  ],
})
export class UsersModule {}
