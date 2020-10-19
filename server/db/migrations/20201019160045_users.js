/**
 * Users.js
 * Define Table structure for users table in database
 * knex version 0.21.5
 
 * @category DB Initialisation
 * @package  RoaDashboard
 * @author   Anthony McGrath <akm@anthonykyle.co.nz>
 * @license  MIT https://opensource.org/licenses/MIT
 * @link     http://localhost:3000/
 */

exports.up = knex => {
  return knex.schema.createTable('users', table => {
    table.increments('user_id').primary();
    table.string('user_first_name', 100);
    table.string('user_last_name', 100);
    table.string('user_username', 100);
    table.string('user_email', 100);
    table.string('user_hash', 100);
  })
}

exports.down = knex => {
  return knex.schema.dropTable('users')
}
