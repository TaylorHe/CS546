const mongoCollections = require("../config/mongoCollections");
const recipes = mongoCollections.recipes;
const uuid = require("node-uuid");

let exportedMethods = {
  // Get all recipes
  getAllRecipes() {
    // console.log("getting all recipes");
    return recipes().then(recipeCollection => {
      return recipeCollection.find({}).toArray();
    });
  },

  // Get recipe by ID
  getRecipe(id) {
    //console.log("getting one recipe");
    if (!id || typeof(id) !== 'string') {
      throw "ID is not valid";
    }
    return recipes().then(recipeCollection => {
      return recipeCollection.findOne({ _id: id }).then(recipe => {
        if (!recipe) throw "Recipe not found";
        return recipe;
      });
    });
  },

  // Post a recipe
  postRecipe(title, ingredients, steps) {
    if (!title || typeof(title) !== 'string'){
      throw 'Title is not valid: ' + title;
    }
    // Check Ingredients, and that each has a name and amount
    if (!ingredients || !Array.isArray(ingredients)) {
      throw 'Invalid ingredient format.'
    }
    for (let i=0; i < ingredients.length; ++i) {
      if (!ingredients[i].name || !ingredients[i].amount){
        throw 'Each ingredient must have a name and an amount';
      }
    }
    if (!steps || !Array.isArray(steps)) {
      throw "Invalid steps.";
    }
    // console.log("Passed checking");
    return recipes().then(recipeCollection => {
      let newRecipe = {
        _id : uuid.v4(),
        title: title,
        ingredients: ingredients,
        steps: steps
      }
      //console.log("Passed recipes() call");
      return recipeCollection
        .insertOne(newRecipe)
        .then(newInsertInformation => {
          return newInsertInformation.insertedId;
        })
        .then(newId => {
          return this.getRecipe(newId);
        });
    });
  },

  // delete a recipe
  deleteRecipe(id) {
    return recipes().then(recipeCollection => {
      return recipeCollection.removeOne({ _id: id }).then(deletionInfo => {
        if (deletionInfo.deletedCount === 0) {
          throw "Could not delete post with id: " + id;
        } else {
        }
      });
    });
  },

  // PUT: Updates a recipe by replacing the recipe with new content
  // Returns the updated recipe
  putRecipe(id, updatedRecipe) {
    //console.log("here");
    if (!id) {
      throw "ID is not valid";
    }
    if (!updatedRecipe) {
      throw "Updated recipe cannot be null";
    }
    if (!updatedRecipe.title || typeof(updatedRecipe.title) !== 'string'){
      throw 'Title is not valid.';
    }
    // Check Ingredients, and that each has a name and amount
    if (!updatedRecipe.ingredients || !Array.isArray(updatedRecipe.ingredients)) {
      throw 'Invalid ingredient format.'
    }
    for (let i=0; i < updatedRecipe.ingredients.length; ++i) {
      if (!updatedRecipe.ingredients[i].name || !updatedRecipe.ingredients[i].amount){
        throw 'Ingredients have to have a name and an amount';
      }
    }
    if (!updatedRecipe.steps || !Array.isArray(updatedRecipe.steps)) {
      throw "Invalid steps.";
    }

    try {
      let recipe = this.getRecipe(id);
    } catch (e) {
      throw e;
    }
    return recipes().then(recipeCollection => {
      return recipeCollection
        .updateOne({ _id: id }, {$set : updatedRecipe} )
        .then(result => {
          return this.getRecipe(id);
        });
    });
  },

  // PATCH: Updates a recipe by updating only the content given
  patchRecipe(id, updatedRecipe) {
    if (!id) {
      throw "ID is not valid";
    }
    if (!updatedRecipe) {
      throw "Updated recipe cannot be null";
    }

    let newInfo = {}
    if (updatedRecipe.title && typeof(updatedRecipe.title) === 'string'){
      newInfo.title = updatedRecipe.title;
    }
    // Check Ingredients, and that each has a name and amount
    if (updatedRecipe.ingredients && Array.isArray(updatedRecipe.ingredients)) {
      for (let i=0; i < updatedRecipe.ingredients.length; ++i) {
        if (!updatedRecipe.ingredients[i].name || !updatedRecipe.ingredients[i].amount){
          throw 'Ingredients have to have a name and an amount';
        }
      }
      // If all are valid, add ingredients
      newInfo.ingredients = updatedRecipe.ingredients;
    }

    if (updatedRecipe.steps) {
      if(!Array.isArray(updatedRecipe.steps)) {
        throw "Invalid steps";
      }
      newInfo.steps = updatedRecipe.steps;
    }
    
    return recipes().then(recipeCollection => {
      return recipeCollection
        .updateOne({_id : id}, {$set : newInfo})
        .then(result => {
          return this.getRecipe(id)
        });
    });

  }
};














module.exports = exportedMethods;