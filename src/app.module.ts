import { Module } from '@nestjs/common';

import { DatabaseModule } from './database/database.module';
import { UsersModule } from './modules/Users/users.module';

@Module({
  imports: [DatabaseModule, UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
