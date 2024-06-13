import { OrderEntity } from '@entities/order.entity';
import { UserEntity } from '@entities/user.entity';
import { WorkerEntity } from '@entities/worker.entity';
import { Knex } from 'knex';

declare module 'knex/types/tables' {
  interface Tables {
    users: Knex.CompositeTableType<
      UserEntity,
      Omit<UserEntity, 'id'> & Partial<Pick<UserEntity, 'id'>>,
      Partial<Omit<UserEntity, 'id'>>
    >;

    workers: Knex.CompositeTableType<
      WorkerEntity,
      Omit<WorkerEntity, 'id'> & Partial<Pick<WorkerEntity, 'id'>>,
      Partial<Omit<WorkerEntity, 'id'>>
    >;

    orders: Knex.CompositeTableType<
      OrderEntity,
      Omit<OrderEntity, 'id'> & Partial<Pick<OrderEntity, 'id'>>,
      Partial<Omit<OrderEntity, 'id'>>
    >;
  }
}
