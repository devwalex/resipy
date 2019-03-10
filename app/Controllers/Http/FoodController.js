'use strict'

const Food = use('App/Models/Food')
class FoodController {
    async allFoods({ response }){
        const foods = await Food.all()
        response.status(200).json({
            message: 'All types of food available',
            data: foods
        })
    }

    async eachFood({ response, params: { id } }){
        const food = await Food.query()
        .where('id', id)
        .first()

        response.status(200).json({
            message: 'This is your food',
            data: food
        })
    }

}

module.exports = FoodController
