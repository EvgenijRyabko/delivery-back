import 'dotenv/config';

import { Module, NotFoundException, OnModuleInit } from '@nestjs/common';
import { Knex } from 'knex';
import { InjectConnection, KnexModule } from 'nest-knexjs';

const { PG_HOST, PG_USER, PG_PASSWORD, PG_DATABASE } = process.env;

@Module({
  imports: [
    KnexModule.forRootAsync({
      useFactory: () => ({
        config: {
          client: 'pg',
          useNullAsDefault: true,
          version: '5.7',
          connection: {
            host: PG_HOST || 'localhost',
            user: PG_USER,
            password: PG_PASSWORD,
            database: PG_DATABASE,
          },
          pool: {
            min: 0,
            max: 100,
          },
          searchPath: ['public'],
          acquireConnectionTimeout: 10000,
          migrations: {
            extension: 'ts',
            directory: 'src/database/migrations',
            tableName: 'migrations',
          },
          seeds: {
            extension: 'ts',
            directory: 'src/database/seeds',
            tableName: 'seeds',
          },
        },
      }),
    }),
  ],
})
export class DatabaseModule implements OnModuleInit {
  constructor(@InjectConnection() private readonly knex: Knex) {}

  async onModuleInit() {
    if (!PG_USER || !PG_PASSWORD || !PG_DATABASE) {
      throw new NotFoundException('Неверно указаны переменные среды');
    }

    await this.knex.migrate.latest();

    await this.knex.seed.run();
  }
}
