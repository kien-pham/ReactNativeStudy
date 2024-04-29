import React from "react";
import { SafeAreaView, ScrollView } from "react-native";
import { styles } from "./style";
import WelcomeHeader from "./welcome-header";
import SearchForm from "./search-form";
import RecipeHint from "./recipe-hint";
import TrendingRecipes from "./trending-recipes";
import RecipeCategories from "./recipe-categories";

export default function MainScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <WelcomeHeader />
      <ScrollView>
        <SearchForm />
        <RecipeHint />
        <TrendingRecipes />
        <RecipeCategories />
      </ScrollView>
    </SafeAreaView>
  );
}
