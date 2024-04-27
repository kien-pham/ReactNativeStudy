import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import TrendingRecipeCard from "src/components/cards/trending-recipe-card/trending-recipe-card";
import { THEME } from "src/constant/theme";

export default function TrendingRecipes() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Trending Recipes</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={[1, 2, 3]}
        renderItem={({ item }) => <TrendingRecipeCard />}
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
    marginBottom: THEME.spacing.lg,
  },
});
