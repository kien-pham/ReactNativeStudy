import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, StyleSheet, TextInput, View } from "react-native";
import { ICONS } from "src/constant/icons";
import { AppScreen } from "src/constant/screen";
import { THEME } from "src/constant/theme";
import { ScreenNavProps } from "src/types/navigation";

const TIME_TO_REDIRECT = 1000;

export default function SearchForm() {
  const { navigate } = useNavigation<ScreenNavProps>();
  let searchText = "";
  let timeOutId: NodeJS.Timeout;

  const handleSearch = (value: string) => {
    searchText = value;

    if (timeOutId) {
      clearTimeout(timeOutId);
    }

    timeOutId = setTimeout(() => {
      navigate(AppScreen.SearchScreen, { searchQuery: searchText });
    }, TIME_TO_REDIRECT);
  };

  return (
    <View style={styles.container}>
      <View style={styles.formWrapper}>
        <Image source={ICONS.SearchIcon} style={styles.searchIcon} />
        <TextInput
          onChangeText={handleSearch}
          style={styles.formInput}
          placeholder="Search Recipes"
        />
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
