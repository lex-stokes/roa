exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          user_id: 1,
          user_first_name: 'Super',
          user_last_name: 'User',
          user_username: 'administrator',
          user_email: 'lexx_stokes@live.com',
          user_hash: 'Krang'
        }
      ])
    })
}
