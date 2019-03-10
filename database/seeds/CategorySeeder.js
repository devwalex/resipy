'use strict'

/*
|--------------------------------------------------------------------------
| CategorySeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Database = use("Database");
class CategorySeeder {
  async run () {
    // await Database.raw("SET FOREIGN_KEY_CHECKS = 0;");

    const categories = await Database.table("categories").insert(
      {
      category_label: 'Yoruba Foods'
      },
      {
        category_label: 'Ibo Foods'
      }
    )
    // await Database.raw("SET FOREIGN_KEY_CHECKS = 1;");
  }
}

module.exports = CategorySeeder
