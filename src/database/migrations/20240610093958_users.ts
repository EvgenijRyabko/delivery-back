exports.up = (knex) => {
  return knex.schema.createTable('users', (table) => {
    table.increments('id').comment('Идентификатор');
    table.string('fullname', 60).comment('ФИО');
    table.string('login', 20).comment('Логин для входа').unique();
    table.string('password', 20).comment('Пароль для входа');
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable('users');
};
