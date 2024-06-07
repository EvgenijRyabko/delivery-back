import { Module } from '@nestjs/common';
import { USERS_REPO, USERS_SERVICE } from 'src/common/constants';
import { PrismaService } from 'src/database/prisma.service';

import { UsersController } from './users.controller';
import { UsersRepo } from './users.repo';
import { UsersService } from './users.service';

@Module({
  imports: [],
  controllers: [UsersController],
  providers: [
    { provide: USERS_REPO, useClass: UsersRepo },
    { provide: USERS_SERVICE, useClass: UsersService },
    PrismaService,
  ],
})
export class UsersModule {}
