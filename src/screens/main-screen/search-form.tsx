import React from "react";
import { Image, StyleSheet, TextInput, View } from "react-native";
import { ICONS } from "src/constant/icons";
import { THEME } from "src/constant/theme";

export default function SearchForm() {
  return (
    <View style={styles.container}>
      <View style={styles.formWrapper}>
        <Image source={ICONS.SearchIcon} style={styles.searchIcon} />
        <TextInput style={styles.formInput} placeholder="Search Recipes" />
      </View>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    padding: THEME.spacing.xl,
  },
  searchIcon: {
    width: 16,
    height: 16,
  },
  formWrapper: {
    flexDirection: "row",
    backgroundColor: THEME.colors.gray[100],
    padding: THEME.spacing.lg2,
    borderRadius: 10,
  },
  formInput: {
    marginLeft: THEME.spacing.lg,
    color: THEME.colors.gray["600"],
    width: "90%",
  },
});
