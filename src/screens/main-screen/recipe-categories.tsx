import React from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import { THEME } from "src/constant/theme";
import { useGetCategoriesQuery } from "src/services/recipe-api/recipe-api";

export default function RecipeCategories() {
  const { data } = useGetCategoriesQuery();

  if (data)
    return (
      <View style={styles.container}>
        <View style={styles.headingWrapper}>
          <Text style={styles.heading}>Categories</Text>
          <Text style={styles.subHeading}>View All</Text>
        </View>
        <FlatList
          data={data.categories}
          renderItem={({ item }) => (
            <View key={item.idCategory} style={styles.categoryItemWrapper}>
              <Image
                source={{ uri: item.strCategoryThumb }}
                style={styles.categoryImg}
              />
              <View style={styles.categoryContentWrapper}>
                <Text style={styles.categoryTitle}>{item.strCategory}</Text>
                <Text style={styles.categorySubtitle}>
                  {getRandomNumber(20, 50)} mins | {getRandomNumber(1, 4)}{" "}
                  Serving
                </Text>
              </View>
            </View>
          )}
        />
      </View>
    );
}

function getRandomNumber(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const styles = StyleSheet.create({
  container: {
    padding: THEME.spacing.xl,
  },
  headingWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  heading: {
    fontSize: THEME.fontSizes.lg,
    fontWeight: "700",
    marginBottom: THEME.spacing.xl,
  },
  subHeading: {
    fontWeight: "600",
    color: THEME.colors.gray[500],
  },
  categoryItemWrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: THEME.spacing.xl,
    marginVertical: THEME.spacing.md,
  },
  categoryImg: {
    width: 60,
    height: 60,
    borderRadius: 8,
    objectFit: "cover",
    borderWidth: 1,
    borderColor: THEME.colors.gray[100],
  },
  categoryContentWrapper: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  categoryTitle: {
    fontWeight: "500",
    fontSize: THEME.fontSizes.lg,
    marginBottom: THEME.spacing.lg2,
  },
  categorySubtitle: {
    fontSize: THEME.fontSizes.xs,
    color: THEME.colors.gray[500],
  },
});
