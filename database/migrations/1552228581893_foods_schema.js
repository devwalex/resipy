'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FoodsSchema extends Schema {
  up () {
    this.create('foods', (table) => {
      table.increments()
      table.string('food_name')
      table.integer('category_id')
      table.text('description')
      table.text('ingredient')
      table.text('steps')
      table.string('image_url')
      table.timestamps()
    })
  }

  down () {
    this.drop('foods')
  }
}

module.exports = FoodsSchema
