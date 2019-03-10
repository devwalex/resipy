'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Food extends Model {
    foodCategory () {
        return this.hasOne('App/Models/Category', 'category_id', 'id')
      }
}

module.exports = Food
