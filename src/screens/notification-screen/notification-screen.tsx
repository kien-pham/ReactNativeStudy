import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { ICONS } from "src/constant/icons";
import { THEME } from "src/constant/theme";

export default function NotificationScreen() {
  return (
    <View style={styles.container}>
      <Image source={ICONS.CommentMiddleIcon} style={styles.image} />
      <Text>😑</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: THEME.sizes.md,
    height: THEME.sizes.md,
    marginBottom: THEME.spacing.lg,
  },
});
