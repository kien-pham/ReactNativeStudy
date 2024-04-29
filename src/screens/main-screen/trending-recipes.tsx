import { useNavigation } from "@react-navigation/native";
import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import TrendingRecipeCard, {
  TrendingRecipeCardSkeleton,
} from "src/components/cards/trending-recipe-card/trending-recipe-card";
import { AppScreen } from "src/constant/screen";
import { THEME } from "src/constant/theme";
import { useGetTrendingRecipesQuery } from "src/services/recipe-api/recipe-api";
import { ScreenNavProps } from "src/types/navigation";

const NUMBER_OF_TRENDING_RECIPES_PER_LOAD = 3;

export default function TrendingRecipes() {
  const { data, isLoading } = useGetTrendingRecipesQuery();
  const { navigate } = useNavigation<ScreenNavProps>();

  if (isLoading)
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Trending Recipes</Text>
        <View style={styles.skeletonWrapper}>
          <TrendingRecipeCardSkeleton />
          <TrendingRecipeCardSkeleton />
        </View>
      </View>
    );

  if (data)
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Trending Recipes</Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          initialNumToRender={NUMBER_OF_TRENDING_RECIPES_PER_LOAD}
          data={data.meals}
          renderItem={({ item }) => (
            <TrendingRecipeCard
              key={item.idMeal}
              recipe={item}
              onPress={() =>
                navigate(AppScreen.DetailScreen, {
                  recipeId: item.idMeal,
                })
              }
            />
          )}
        />
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    padding: THEME.spacing.xl,
    paddingRight: 0,
  },
  heading: {
    fontSize: THEME.fontSizes.lg,
    fontWeight: "700",
    marginBottom: THEME.spacing.xl,
  },
  skeletonWrapper: {
    flexDirection: "row",
  },
});
