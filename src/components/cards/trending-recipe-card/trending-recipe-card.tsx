import { BlurView } from "expo-blur";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { ICONS } from "src/constant/icons";
import { IMAGES } from "src/constant/images";
import { THEME } from "src/constant/theme";

export default function TrendingRecipeCard() {
  return (
    <View style={styles.container}>
      <Image source={IMAGES.SplashScreenBg} style={styles.image} />

      <View style={styles.contentWrapper}>
        <BlurView intensity={50} style={styles.tagWrapper}>
          <Text style={[styles.textWhite, styles.textSmall]}>tag</Text>
        </BlurView>

        <BlurView intensity={40} style={styles.infoWrapper}>
          <View style={styles.infoTitleBox}>
            <Text style={styles.textTitle}>Pizza and Salad in Liverpool</Text>
            <Image source={ICONS.BookmarkIcon} style={styles.bookmarkIcon} />
          </View>
          <Text style={[styles.subTitle]}>30 mins | 1 serving</Text>
        </BlurView>
      </View>
    </View>
  );
}

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
    width: "100%",
    height: "100%",
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
  tagText: {
    color: THEME.colors.white,
    fontSize: THEME.fontSizes.xs,
  },
  infoWrapper: {
    padding: 8,
    borderRadius: 8,
    overflow: "hidden",
    width: "100%",
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
    tintColor: THEME.colors.cygan[300],
  },
});
