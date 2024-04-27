import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { IMAGES } from "src/constant/images";
import { THEME } from "src/constant/theme";

export default function WelcomeHeader() {
  return (
    <View style={styles.wrapper}>
      <View>
        <Text style={styles.title}>Hello Kien,</Text>
        <Text style={styles.subTitle}>What do you want to cook today?</Text>
      </View>
      <Image
        source={IMAGES.UserAvatar}
        resizeMode="cover"
        style={styles.avatar}
      />
    </View>
  );
}

export const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: THEME.spacing.xl,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  title: {
    color: THEME.colors.gray["600"],
    fontSize: THEME.fontSizes.xl,
    fontWeight: "500",
    marginBottom: THEME.spacing.md,
  },
  subTitle: {
    color: THEME.colors.gray["500"],
    fontSize: THEME.fontSizes.sm,
  },
});
