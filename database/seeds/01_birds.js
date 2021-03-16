
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('bird').del()
    .then(function () {
      // Inserts seed entries
      return knex('bird').insert([
        {category: 'Owl', scientificName: 'tyto alba', name: 'Barn Owl', activity: 'nocturnal', brood: 5},
        {category: 'Falcon', scientificName: 'falco peregrinus', name: 'Peregrine Falcon', activity: 'diurnal', brood: 3},
        {category: 'Eagle', scientificName: 'aquila', name: 'Golden Eagle', activity: 'diurnal', brood: 3}
      ]);
    });
};
