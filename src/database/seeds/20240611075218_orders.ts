exports.seed = async (knex) => {
  // Deletes ALL existing entries
  await knex('orders').del();

  // Inserts seed entries
  await knex('orders').insert([
    {
      id: 1,
      url: 'https://www.ozon.ru/product/bezmeshkovyy-tsiklonnyy-pylesos-polaris-pvc-2003ri-dlya-doma-moshchnyy-2000-vt-148212484/?avtc=1&avte=1&avts=1718098308',
      price: 10360,
      count: 1,
      status: 'created',
      user_id: 1,
      worker_id: null,
    },
    {
      id: 2,
      url: 'https://www.ozon.ru/product/bezmeshkovyy-tsiklonnyy-pylesos-polaris-pvc-2003ri-dlya-doma-moshchnyy-2000-vt-148212484/?avtc=1&avte=1&avts=1718098308',
      price: 10360,
      count: 1,
      status: 'ordered',
      user_id: 3,
      worker_id: 1,
    },
    {
      id: 3,
      url: 'https://www.ozon.ru/product/bezmeshkovyy-tsiklonnyy-pylesos-polaris-pvc-2003ri-dlya-doma-moshchnyy-2000-vt-148212484/?avtc=1&avte=1&avts=1718098308',
      price: 10360,
      count: 2,
      status: 'rejected',
      user_id: 2,
      worker_id: 2,
    },
  ]);
};
