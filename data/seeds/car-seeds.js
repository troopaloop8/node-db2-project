
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').del()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {id: 1, make: 'Toyota', model: '86 Levin', year: '1988', price: 12000, color: 'white'},
        {id: 2, make: 'Subaru', model: 'Impreza WRX', year: '2008', price: 24000, color: 'blue'},
        {id: 3, make: 'Tesla', model: 'Model 3 P90', year: '2019', price: 50000, color: 'red'},
      ]);
    });
};
