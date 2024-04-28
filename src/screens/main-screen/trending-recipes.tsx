import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import TrendingRecipeCard from "src/components/cards/trending-recipe-card/trending-recipe-card";
import { THEME } from "src/constant/theme";
import { useGetTrendingRecipesQuery } from "src/services/recipe-api/recipe-api";
import { ResponseRecipes } from "src/types/recipe";

export default function TrendingRecipes() {
  const { data, isLoading } = useGetTrendingRecipesQuery();

  if (isLoading)
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Trending Recipes</Text>
        <View style={styles.skeletonWrapper}>
          <TrendingRecipeCard.Skeleton />
          <TrendingRecipeCard.Skeleton />
        </View>
      </View>
    );

  if (data !== undefined)
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Trending Recipes</Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={(data as unknown as ResponseRecipes).meals || []}
          renderItem={({ item }) => (
            <TrendingRecipeCard key={item.idMeal} recipe={item} />
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
