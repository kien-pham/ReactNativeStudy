import { BlurView } from "expo-blur";
import React, { memo } from "react";
import {
  DimensionValue,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { ICONS } from "src/constant/icons";
import { THEME } from "src/constant/theme";
import { useBookmark } from "src/hooks/use-bookmark";
import { Recipe } from "src/types/recipe";

export function TrendingRecipeCardSkeleton() {
  return (
    <View style={styles.container}>
      <View style={styles.skeletonCard} />
      <View style={styles.contentWrapper}>
        <View style={styles.skeletonTag} />
        <View style={styles.skeletonInfo} />
      </View>
    </View>
  );
}

function TrendingRecipeCard({
  recipe,
  onPress,
}: {
  recipe: Recipe;
  onPress?: (recipeId: string) => void;
}) {
  const { saveBookmark } = useBookmark();

  return (
    <TouchableOpacity onPress={() => onPress?.(recipe.idMeal)}>
      <View style={styles.container}>
        <Image source={{ uri: recipe.strMealThumb }} style={styles.image} />

        <View style={styles.contentWrapper}>
          <BlurView intensity={30} style={styles.tagWrapper}>
            <Text style={[styles.textWhite, styles.textSmall]}>
              {recipe.strArea}
            </Text>
          </BlurView>

          <BlurView intensity={50} style={styles.infoWrapper}>
            <View style={styles.infoTitleBox}>
              <Text style={styles.textTitle}>{recipe.strMeal}</Text>

              <TouchableOpacity
                onPress={() =>
                  saveBookmark({
                    idMeal: recipe.idMeal,
                    strMeal: recipe.strMeal,
                    strCategory: recipe.strCategory,
                    strArea: recipe.strArea,
                    strMealThumb: recipe.strMealThumb,
                  })
                }
              >
                <Image
                  source={ICONS.BookmarkIcon}
                  style={styles.bookmarkIcon}
                />
              </TouchableOpacity>
            </View>
            <Text style={[styles.subTitle]}>{recipe.strCategory}</Text>
          </BlurView>
        </View>
      </View>
    </TouchableOpacity>
  );
}
export default memo(TrendingRecipeCard);

const styles = StyleSheet.create({
  container: {
    width: 240,
    height: 350,
    marginRight: THEME.spacing.xl,
  },
  contentWrapper: {
    padding: 12,
    paddingTop: 16,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    flex: 1,
  },
  textWhite: {
    color: THEME.colors.white,
  },
  textBold: {
    fontWeight: "600",
  },
  textSmall: {
    fontSize: THEME.fontSizes.xs,
  },
  image: {
    position: "absolute",
    width: THEME.sizes.full as DimensionValue,
    height: THEME.sizes.full as DimensionValue,
    objectFit: "cover",
    borderRadius: 12,
  },
  tagWrapper: {
    padding: 6,
    borderRadius: 8,
    alignItems: "center",
    textAlign: "center",
    overflow: "hidden",
  },
  infoWrapper: {
    padding: 8,
    borderRadius: 8,
    overflow: "hidden",
    width: THEME.sizes.full as DimensionValue,
    height: 84,
    justifyContent: "space-between",
  },
  infoTitleBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: THEME.spacing.lg,
    padding: THEME.spacing.md,
  },
  textTitle: {
    fontSize: THEME.fontSizes.sm,
    fontWeight: "600",
    color: THEME.colors.white,
    flex: 1,
    lineHeight: 20,
  },
  subTitle: {
    paddingLeft: THEME.spacing.md,
    color: THEME.colors.gray[100],
    fontSize: THEME.fontSizes.xs,
  },
  bookmarkIcon: {
    tintColor: THEME.colors.white,
    width: 20,
    height: 20,
  },

  // skeleton
  skeletonContainer: {
    padding: THEME.spacing.xl,
    paddingRight: 0,
  },
  skeletonCard: {
    backgroundColor: THEME.colors.gray[100],
    position: "absolute",
    width: THEME.sizes.full as DimensionValue,
    height: THEME.sizes.full as DimensionValue,
    objectFit: "cover",
    borderRadius: 12,
  },
  skeletonTag: {
    backgroundColor: THEME.colors.gray[200],
    borderRadius: 8,
    width: 80,
    height: 24,
  },
  skeletonInfo: {
    backgroundColor: THEME.colors.gray[200],
    borderRadius: 8,
    width: THEME.sizes.full as DimensionValue,
    height: 84,
  },
});
