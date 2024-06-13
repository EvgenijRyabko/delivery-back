import { WorkerEntity } from '@entities/worker.entity';
import { Injectable } from '@nestjs/common';
import { Knex } from 'knex';
import { InjectConnection } from 'nest-knexjs';

export interface IWorkersRepo {
  getWorkers(): Promise<WorkerEntity[]>;

  createWorker(
    trx: Knex.Transaction,
    worker: WorkerEntity,
  ): Promise<Pick<WorkerEntity, 'id'>[]>;
}

@Injectable()
export class WorkersRepo implements IWorkersRepo {
  constructor(@InjectConnection() private readonly knex: Knex) {}

  async getWorkers() {
    return await this.knex('workers');
  }

  async createWorker(trx: Knex.Transaction, worker: WorkerEntity) {
    return await trx('workers').insert(worker).returning('id');
  }
}
