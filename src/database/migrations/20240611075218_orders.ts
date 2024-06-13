exports.up = (knex) => {
  return knex.schema.createTable('orders', (table) => {
    table.increments('id').comment('Идентификатор');
    table.string('url').comment('Ссылка на заказ');
    table.decimal('price').comment('Цена (без комиссии)');
    table.tinyint('count').comment('Количество товара');
    table.enum('status', [
      'created',
      'rejected',
      'processing',
      'ordered',
      'ready',
    ]);

    table
      .bigint('user_id')
      .references('id')
      .inTable('users')
      .onDelete('CASCADE');
    table
      .bigint('worker_id')
      .references('id')
      .inTable('workers')
      .onDelete('CASCADE');
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable('orders');
};
