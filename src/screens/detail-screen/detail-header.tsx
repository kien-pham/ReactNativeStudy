import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Recipe } from "src/types/recipe";
import { BlurView } from "expo-blur";
import { ICONS } from "src/constant/icons";
import { THEME } from "src/constant/theme";
import UserAvatar from "src/components/avatar/user-avatar";
import { useNavigation } from "@react-navigation/native";
import { AppScreen } from "src/constant/screen";
import { ScreenNavProps } from "src/types/navigation";

export default function DetailHeader({ recipeData }: { recipeData: Recipe }) {
  const { navigate } = useNavigation<ScreenNavProps>();

  return (
    <View style={styles.headerWrapper}>
      <View style={styles.imageWrapper}>
        <Image
          source={{ uri: recipeData.strMealThumb }}
          resizeMode="cover"
          style={styles.image}
        />
      </View>

      <View style={styles.headerContentWrapper}>
        <View style={styles.headerNavigatorWrapper}>
          <TouchableOpacity onPress={() => navigate(AppScreen.MainScreen)}>
            <BlurView intensity={40} style={styles.blurBackIconWrapper}>
              <View style={styles.headerBackIcon}>
                <Image
                  source={ICONS.BackIcon}
                  style={styles.headerBackIconImg}
                />
              </View>
            </BlurView>
          </TouchableOpacity>

          <Image
            source={ICONS.BookmarkIcon}
            style={styles.headerBookmarkIconImg}
          />
        </View>

        <BlurView intensity={40} style={styles.blurContentWrapper}>
          <View style={styles.createBySection}>
            <UserAvatar size={40} />
            <View>
              <Text style={styles.creatorTitle}>Recipe by</Text>
              <Text style={styles.creatorName}>Kien Pham</Text>
            </View>
          </View>

          <View style={styles.nextIconWrapper}>
            <Image source={ICONS.NextIcon} style={styles.nextIconImg} />
          </View>
        </BlurView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerWrapper: {
    flex: 2,
  },
  headerNavigatorWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  blurBackIconWrapper: {
    width: 28,
    height: 28,
    borderRadius: 20,
    overflow: "hidden",
  },
  headerBackIcon: {
    width: 28,
    height: 28,
    borderRadius: 20,
    borderColor: THEME.colors.white,
    borderWidth: 1,
    padding: THEME.spacing.xs,
    justifyContent: "center",
    alignItems: "center",
  },
  headerBackIconImg: {
    width: 10,
    height: 10,
    tintColor: THEME.colors.white,
  },
  headerBookmarkIconImg: {
    tintColor: THEME.colors.white,
    width: 24,
    height: 24,
  },
  headerContentWrapper: {
    flex: 1,
    marginTop: THEME.spacing["2xl"],
    padding: THEME.spacing["2xl"],
    flexDirection: "column",
    justifyContent: "space-between",
  },
  blurContentWrapper: {
    padding: THEME.spacing.xl,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 8,
    overflow: "hidden",
  },
  createBySection: {
    flexDirection: "row",
    alignItems: "center",
    gap: THEME.spacing.xl,
  },
  imageWrapper: {
    height: "100%",
    width: "100%",
    position: "absolute",
    backgroundColor: "black",
  },
  image: {
    opacity: 0.9,
    height: "100%",
  },
  creatorTitle: {
    color: THEME.colors.gray[800],
    marginBottom: THEME.spacing.sm,
  },
  creatorName: {
    color: THEME.colors.gray[50],
    fontWeight: "600",
  },
  nextIconWrapper: {
    padding: THEME.spacing.lg,
    borderColor: THEME.colors.gray[200],
    borderRadius: 4,
    borderWidth: 1,
    width: 28,
    height: 28,
    justifyContent: "center",
    alignItems: "center",
  },
  nextIconImg: {
    width: 16,
    height: 16,
    tintColor: THEME.colors.gray[200],
  },
});
