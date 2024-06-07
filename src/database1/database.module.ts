import 'dotenv/config';

import { Module, NotFoundException, OnModuleInit } from '@nestjs/common';
import { KnexModule } from 'nest-knexjs';

const { PG_HOST, PG_USER, PG_PASSWORD, PG_DATABASE } = process.env;

@Module({
  imports: [
    KnexModule.forRootAsync({
      useFactory: () => ({
        config: {
          client: 'pg',
          version: '5.7',
          connection: {
            host: PG_HOST || '127.0.0.1',
            user: PG_USER,
            password: PG_PASSWORD,
            database: PG_DATABASE,
          },
          pool: {
            min: 0,
            max: 100,
          },
          searchPath: ['delivery'],
          acquireConnectionTimeout: 10000,
          migrations: {
            extension: 'ts',
            directory: './migrations',
            tableName: 'migrations',
          },
        },
      }),
    }),
  ],
})
export class DatabaseModule implements OnModuleInit {
  onModuleInit() {
    if (!PG_USER || !PG_PASSWORD || !PG_DATABASE) {
      throw new NotFoundException('Неверно указаны переменные среды');
    }
  }
}
