
exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('image').del()
      .then(function () {
        // Inserts seed entries
        return knex('image').insert([
          {category: 'Owl', birdId: 1, url: 'https://i.imgur.com/1IKf0zQ.jpg'}
        ]);
      });
  };
  