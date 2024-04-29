import {
  IngredientKey,
  MeasureKey,
  Recipe,
  ResponseRecipes,
} from "src/types/recipe";

const LIMIT_INGREDIENTS = 10;

export const useFormatRecipeData = (
  data: ResponseRecipes | undefined
): Recipe | null => {
  if (data && data.meals.length) {
    const mealData = data.meals[0]; // call meal detail api, so there is only 1 item in array
    const ingredients: string[] = [];
    const measures: string[] = [];

    for (let i = 1; i <= LIMIT_INGREDIENTS; i++) {
      const ingredientKey = `strIngredient${i}` as MeasureKey;
      const measureKey = `strMeasure${i}` as IngredientKey;

      if (mealData[ingredientKey]) {
        ingredients.push(mealData[ingredientKey]!);
      }

      if (mealData[measureKey]) {
        measures.push(mealData[measureKey]!);
      }
    }

    return {
      ...mealData,
      ingredients,
      measures,
    };
  }

  return null;
};
