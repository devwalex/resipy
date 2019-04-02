'use strict'

/*
|--------------------------------------------------------------------------
| AdminSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Database = use('Database')
const Hash = use('Hash')

class AdminSeeder {
  async run () {
    await Database.raw('SET FOREIGN_KEY_CHECKS = 0;')
    await Database.truncate('users')
    const encryptedPassword = await Hash.make('P@55W0RD')

    const Admin = await Database.table('users').insert({
      username: 'ResipyAdmin',
      email: 'contact@resipy.com',
      password: encryptedPassword,
      is_verify: 1
    })
    await Database.raw('SET FOREIGN_KEY_CHECKS = 0;')
  }
}

module.exports = AdminSeeder
