import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ResponseCategories, ResponseRecipes } from "src/types/recipe";

export const recipeApi = createApi({
  reducerPath: "recipeApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://www.themealdb.com/api/json/v1/1/",
  }),
  endpoints: (builder) => ({
    getTrendingRecipes: builder.query<ResponseRecipes, void>({
      query: () => "search.php?f=t",
    }),
    getRecipeById: builder.query<ResponseRecipes, string>({
      query: (id) => `lookup.php?i=${id}`,
    }),
    getCategories: builder.query<ResponseCategories, void>({
      query: () => "categories.php",
    }),
  }),
});

export const {
  useGetTrendingRecipesQuery,
  useGetRecipeByIdQuery,
  useGetCategoriesQuery,
} = recipeApi;
