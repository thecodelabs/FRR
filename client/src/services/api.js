export function getRecentRecipes(app) {
  const recipes = app.service('recipe_tests');
  return recipes.find().then((data, err)=> data.data);
}
