exports.seed = async (knex) => {
  // Deletes ALL existing entries
  await knex('workers').del();

  // Inserts seed entries
  await knex('workers').insert([
    { id: 1, login: 'admin1', password: 'admin' },
    { id: 2, login: 'admin2', password: 'admin' },
    { id: 3, login: 'admin3', password: 'admin' },
  ]);
};
