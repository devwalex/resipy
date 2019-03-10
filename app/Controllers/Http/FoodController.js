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

    async addFood({ response, request }){
        const {food_name, category_id, description, ingredient, steps, image_url} = request.post()
        const food = new Food()
        food.food_name = food_name
        food.category_id = category_id
        food.description = description
        food.ingredient = ingredient
        food.steps = steps
        food.image_url = image_url

        await food.save()

        response.status(201).json({
            message: 'Successfully add new food',
            data: food
        })

    }

    async editFood({ response, request, params: { id } }){
        const {food_name, category_id, description, ingredient, steps, image_url} = request.post()
        const food = await Food.query()
        .where('id', id)
        .first()
        food.food_name = food_name
        food.category_id = category_id
        food.description = description
        food.ingredient = ingredient
        food.steps = steps
        food.image_url = image_url

        await food.save()

        response.status(201).json({
            message: 'Edited this food successfully',
            data: food
        })

    }

    async deleteFood({ response, params: { id } }){
        const food = await Food.query()
        .where('id', id)
        .first()

        await food.delete()

        response.status(200).json({
            message: 'Deleted this food',
            id
        })
    }
}

module.exports = FoodController
