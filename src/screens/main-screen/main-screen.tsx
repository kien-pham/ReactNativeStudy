import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import { CATEGORIES } from "src/constant/sample-data";
import Categories from "src/features/categories/categories";
import HeaderBar from "src/features/header-bar/header-bar";
import WelcomeHeading from "./welcome-heading";
import { THEME } from "src/constant/theme";

export default function MainScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <HeaderBar />

      <ScrollView>
        <WelcomeHeading />
        <Categories data={CATEGORIES} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.colors.primary[50],
  },
});
