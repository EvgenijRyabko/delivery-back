exports.up = (knex) => {
  return knex.schema.createTable('workers', (table) => {
    table.increments('id').comment('Идентификатор');
    table.string('login', 20).comment('Логин для входа').unique();
    table.string('password', 20).comment('Пароль для входа');
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable('workers');
};
