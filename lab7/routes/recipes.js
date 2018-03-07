const express = require("express");
const router = express.Router();
const data = require("../data");
const recipeData = data.recipes;

// GET /recipes
// Responds with an array of all recipes in the 
// format of {_id: RECIPE_ID, title: RECIPE_TITLE}
router.get("/", async (req, res) => {
  try {
    const recipeList = await recipeData.getAllRecipes();
    res.json(recipeList);
  } catch (e) {
    res.status(500).send();
  }
});

// GET /recipes/:id
// Responds with the full content of the specified recipe
router.get("/:id", async (req, res) => {
  try {
    const recipe = await recipeData.getRecipe(req.params.id);
    res.json(recipe);
  } catch (e) {
    res.status(404).json({ message: "Recipe not found" });
  }
});

// POST /recipes
// Creates a recipe with the supplied data in the request body, 
// and returns the new recipe
router.post("/", async (req, res) => {
  try {
    let rbody = req.body;
    // console.log("here");
    // console.log(rbody);
    const newRecipe = await recipeData.postRecipe(rbody.title, rbody.ingredients, rbody.steps);
    res.json(newRecipe);
  } catch (e) {
    res.status(500).json({error: e});
  }
});

// PUT /recipes/:id
// Updates the specified recipe by replacing the recipe with the new recipe content, 
// and returns the updated recipe
router.put("/:id", async (req, res) => {
  try {
    const updatedRecipe = await recipeData.putRecipe(req.params.id, req.body);
    res.json(updatedRecipe);
  } catch (e) {
    res.status(500).json({error: e});
  }
});

// PATCH /recipes/:id
// Updates the specified recipe with only the supplied changes, 
// and returns the updated recipe
router.patch("/:id", async (req, res) => {
  try {
    const updatedRecipe = await recipeData.patchRecipe(req.params.id, req.body);
    res.json(updatedRecipe);
  } catch (e) {
    res.status(500).json({error: e});
  }
});

// DELETE /recipes/:id
// Deletes the recipe and returns nothing.
router.delete("/:id", async (req, res) => {
  try {
    await recipeData.deleteRecipe(req.params.id);
    res.sendStatus(200);
  } catch (e) {
    res.status(500).json({error: e});
  }
});
module.exports = router;













