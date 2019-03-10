'use strict'

/*
|--------------------------------------------------------------------------
| FoodSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Database = use('Database')

class FoodSeeder {
  async run () {
    const foods = await Database.table("foods").insert(
      {
        food_name: 'Ewedu Soup',
        category_id: 1,
        description: 'Ewedu soup is indigenous to the people of Yoruba, a very popular Nigerian ethnic group.But then I am guessing you know that already so we are going to delve right into the matter of the day which is totally about making Yoruba ewedu soup.',
        ingredient: `Ewedu leaves (corchorus olitorius) 300g
        1/2 teaspoon of powdered potash
        1.5 cups of water
        Ewedu Broom or a blender
        Salt to taste
        Maggi (1 or 2 cubes)
        Chilly Pepper to taste
        4-5 spoons of ground crayfish`,
        steps: `Nicely pick just the leaves (no stem allowed), then go ahead and wash properly with a lot of water to remove any sand left on it.

        Pour 1.5 cups of water to a cooking pot and heat to boiling point, add the washed ewedu leaves, soak the half teaspoon of potash in half cup of water and filter into the pot (to soften the leaves), cook for 7-10 minutes.
        
        Then use the cooking broom to mash (more like pound) continuously inside the pot, this will turn the leaves to tiny bits after mashing for about five minutes.
        
        Alternatively, You can also transfer into a blender and pulse a couple of times, I think this way is easier and better. That was how I made the soup above, couldn’t find the ewedu broom.
        
        Transfer back to the pot and add the ground crayfish, maggi, salt and pepper to taste. Allow to simmer for just five minutes and you are done with making ewedu soup.
        
        Serve ewedu soup plus stew and meat with either amala, eba, semo or pounded yam, the exact way a Yoruba man would love it.`,
        image_url: 'https://allnigerianfoods.com/wp-content/uploads/2015/04/ewedu-soup.jpg'
      }
    )
    
  }
}

module.exports = FoodSeeder
