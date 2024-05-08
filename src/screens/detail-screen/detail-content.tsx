import React from "react";
import {
  DimensionValue,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import UserAvatar from "src/components/avatar/user-avatar";
import { ICONS } from "src/constant/icons";
import { THEME } from "src/constant/theme";
import { Recipe } from "src/types/recipe";

const userAvatar1 = require("@appAssets/avatar/avatar-1.jpg");
const userAvatar2 = require("@appAssets/avatar/avatar-2.jpg");
const userAvatar3 = require("@appAssets/avatar/avatar-3.jpg");

const UserAvatarsGroup = () => {
  return (
    <View style={styles.userGroupWrapper}>
      <View style={[styles.postAbsolute, { right: 75 }]}>
        <UserAvatar size={40} source={userAvatar3} />
      </View>
      <View style={[styles.postAbsolute, { right: 50 }]}>
        <UserAvatar size={40} source={userAvatar2} />
      </View>
      <View style={[styles.postAbsolute, { right: 25 }]}>
        <UserAvatar size={40} source={userAvatar1} />
      </View>
      <UserAvatar size={40} />
    </View>
  );
};

export default function DetailContent({ recipeData }: { recipeData: Recipe }) {
  return (
    <View style={styles.container}>
      <View style={styles.contentHeaderWrapper}>
        <View style={styles.contentTitleWrapper}>
          <Text style={styles.recipeTitle} numberOfLines={2}>
            {recipeData.strMeal}
          </Text>
          <Text style={styles.recipeSubtitle}>{recipeData.strTags}</Text>
        </View>

        <View style={styles.userContentWrapper}>
          <UserAvatarsGroup />

          <Text
            numberOfLines={2}
            style={[styles.recipeSubtitle, styles.textRight]}
          >
            {`4 people\nalready tried this!`}
          </Text>
        </View>
      </View>

      <View style={styles.ingredientsWrapper}>
        <View style={styles.headingWrapper}>
          <Text style={styles.ingredientHeading}>Ingredients</Text>
          <Text style={styles.recipeSubtitle}>
            {recipeData.ingredients?.length} items
          </Text>
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.ingredientsContentWrapper}>
            <View>
              {recipeData.ingredients?.map((ingredient, index) => (
                <View key={index} style={styles.ingredientItem}>
                  <View style={styles.ingredientItemTitle}>
                    <View style={styles.ingredientImgWrapper}>
                      <Image
                        source={ICONS.IngredientIcon}
                        style={styles.ingredientImg}
                      />
                    </View>
                    <Text style={styles.textCap}>{ingredient}</Text>
                  </View>

                  <Text>{recipeData.measures?.[index]}</Text>
                </View>
              ))}
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  postAbsolute: {
    position: "absolute",
  },
  textRight: {
    textAlign: "right",
  },
  textCap: {
    textTransform: "capitalize",
  },

  container: {
    flex: 3,
    padding: THEME.spacing.xl,
  },
  contentHeaderWrapper: {
    justifyContent: "space-between",
    flexDirection: "row",
    height: 85,
  },
  contentTitleWrapper: {
    flexGrow: 1,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  recipeTitle: {
    fontWeight: "600",
    width: THEME.sizes.full as DimensionValue,
    fontSize: THEME.fontSizes.xl,
    maxWidth: 220,
  },
  recipeSubtitle: {
    color: THEME.colors.gray[600],
  },

  userContentWrapper: {
    flexGrow: 1,
  },

  userGroupWrapper: {
    alignItems: "flex-end",
    flex: 1,
  },

  ingredientsWrapper: {
    marginTop: THEME.spacing["2xl"],
    flex: 1,
  },
  ingredientHeading: {
    fontSize: THEME.fontSizes.lg,
    fontWeight: "700",
    marginBottom: THEME.spacing.lg,
  },
  headingWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  ingredientsContentWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: THEME.sizes.full as DimensionValue,
  },
  ingredientItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: THEME.spacing.lg,
    paddingLeft: 0,
    width: THEME.sizes.full as DimensionValue,
  },
  ingredientItemTitle: {
    flexDirection: "row",
    alignItems: "center",
    gap: THEME.spacing.lg,
  },
  ingredientImgWrapper: {
    backgroundColor: THEME.colors.gray[100],
    borderRadius: THEME.spacing.lg,
    padding: THEME.spacing.lg,
  },
  ingredientImg: {
    width: 22,
    height: 22,
    tintColor: THEME.colors.gray[400],
  },
});
