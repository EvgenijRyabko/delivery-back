import { WORKER_REPO } from '@common/constants';
import { WorkerEntity } from '@entities/worker.entity';
import { Inject, Injectable } from '@nestjs/common';

import { IWorkersRepo } from './workers.repo';

export interface IWorkersService {
  getWorkers(): Promise<WorkerEntity[]>;

  createWorker(worker: WorkerEntity): Promise<any>;
}

@Injectable()
export class WorkersService {
  constructor(
    @Inject(WORKER_REPO) private readonly workersRepo: IWorkersRepo,
  ) {}

  async getWorkers() {
    return await this.workersRepo.getWorkers();
  }

  async createWorker(worker: WorkerEntity) {
    return worker;
  }
}
