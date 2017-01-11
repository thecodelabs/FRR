export function getRecentRecipes(app) {
  const recipes = app.service('recipes');
  return recipes.get().then((data, err)=> data.data);
}
