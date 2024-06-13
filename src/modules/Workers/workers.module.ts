import { WORKER_REPO, WORKER_SERVICE } from '@common/constants';
import { Module } from '@nestjs/common';

import { WorkersController } from './workers.controller';
import { WorkersRepo } from './workers.repo';
import { WorkersService } from './workers.service';

@Module({
  controllers: [WorkersController],
  providers: [
    {
      provide: WORKER_SERVICE,
      useClass: WorkersService,
    },
    {
      provide: WORKER_REPO,
      useClass: WorkersRepo,
    },
  ],
})
export class WorkersModuler {}
