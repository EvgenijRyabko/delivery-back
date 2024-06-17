import { WORKER_SERVICE } from '@common/constants';
import { WorkerEntity } from '@entities/worker.entity';
import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Post,
} from '@nestjs/common';

import { IWorkersService } from './workers.service';

interface IWorkersController {}

@Controller('workers')
export class WorkersController implements IWorkersController {
  constructor(
    @Inject(WORKER_SERVICE) private readonly workersService: IWorkersService,
  ) {}

  @Get()
  async getWorkers() {
    return await this.workersService.getWorkers();
  }

  @Post('create')
  async createWorker(@Body() worker: WorkerEntity) {
    return await this.workersService.createWorker(worker);
  }

  @Delete('remove/:id')
  async deleteWorker(@Param('id') workerId: number) {
    return workerId;
  }
}
