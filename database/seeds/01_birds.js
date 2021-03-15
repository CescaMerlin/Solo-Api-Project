
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('bird').del()
    .then(function () {
      // Inserts seed entries
      return knex('bird').insert([
        {id: 1, category: 'Owl', scientificName: 'tyto alba'},
        {id: 2, category: 'Falcon', scientificName: 'falco peregrinus'},
        {id: 3, category: 'Eagle', scientificName: 'aquila'}
      ]);
    });
};
