'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Welcome To Resipy Api' }
})
Route.get('foods', 'FoodController.allFoods')
Route.get('food/:id', 'FoodController.eachFood')
Route.post('food', 'FoodController.addFood')
Route.put('food/:id', 'FoodController.editFood')
Route.delete('food/:id', 'FoodController.deleteFood')




