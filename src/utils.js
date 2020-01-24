export const normalizeRecipe = (data) => {
  // data is the response body
  const recipe = data;

  let ingredients = [];
  for (let i = 1; i <= 20; i ++) {
    if (!recipe[`strIngredient${i}`]) continue;
    ingredients.push({
      ingredient: recipe[`strIngredient${i}`],
      measurement: recipe[`strMeasure${i}`]
    });
  }

  recipe.ingredients = ingredients;

  return recipe;
};
