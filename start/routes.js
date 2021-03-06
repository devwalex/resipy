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
// User route
Route.post('register', 'UserController.register')
Route.get('user/:id', 'UserController.showUser')
Route.get('users', 'UserController.allUser')
Route.get('account/verify/:verification_token', 'UserController.verifyAccount')

// Food route
Route.get('foods', 'FoodController.allFoods')
Route.get('food/:id', 'FoodController.eachFood')
Route.post('food', 'FoodController.addFood')
Route.put('food/:id', 'FoodController.editFood')
Route.delete('food/:id', 'FoodController.deleteFood')




