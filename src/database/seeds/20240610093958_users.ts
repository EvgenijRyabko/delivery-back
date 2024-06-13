exports.seed = async (knex) => {
  // Deletes ALL existing entries
  await knex('users').del();

  // Inserts seed entries
  await knex('users').insert([
    { id: 1, fullname: 'TestUser1', login: 'test1', password: 'test' },
    { id: 2, fullname: 'TestUser2', login: 'test2', password: 'test' },
    { id: 3, fullname: 'TestUser3', login: 'test3', password: 'test' },
  ]);
};
