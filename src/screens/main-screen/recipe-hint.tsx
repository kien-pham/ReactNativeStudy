import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { ICONS } from "src/constant/icons";
import { THEME } from "src/constant/theme";

export default function RecipeHint() {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Image source={ICONS.FoodSaladIcon} />
        <View style={styles.textWrapper}>
          <Text style={{ flexShrink: 1 }}>
            You have 12 recipes that you haven't tried yet
          </Text>
          <Text style={styles.textLink}>See Recipes</Text>
        </View>
      </View>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    padding: THEME.spacing.xl,
  },
  wrapper: {
    flexDirection: "row",
    backgroundColor: THEME.colors.cygan["200"],
    padding: THEME.spacing.xl,
    borderRadius: 8,
  },
  textWrapper: {
    marginLeft: THEME.spacing.lg,
    flexGrow: 1,
    flex: 1,
    justifyContent: "space-between",
  },
  textLink: {
    color: THEME.colors.cygan["600"],
    fontWeight: "600",
    textDecorationLine: "underline",
  },
});
