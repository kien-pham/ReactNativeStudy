export type Recipe = {
  idMeal: string;
  strMeal: string;
  strCategory: string;
  strArea: string;
  strInstructions: string;
  strMealThumb: string;
  strTags: string;
  strSource?: string | null;
  strImageSource?: string | null;

  ingredients?: string[];
  measures?: string[];
};
type KeyNumbers = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
export type MeasureKey = `strMeasure${KeyNumbers}`;
export type IngredientKey = `strIngredient${KeyNumbers}`;

type ResponseRecipesFromApi = Omit<Recipe, "ingredients" | "measures"> & {
  [K in IngredientKey | MeasureKey]: string | null;
};

export type ResponseRecipes = {
  meals: ResponseRecipesFromApi[];
};

export type RecipeCategory = {
  idCategory: string;
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: string;
};

export type ResponseCategories = {
  categories: RecipeCategory[];
};
