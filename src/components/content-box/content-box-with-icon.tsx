import React, { ReactNode } from "react";
import { Image, ImageProps, StyleSheet, View } from "react-native";
import { THEME } from "src/constant/theme";

export default function ContentBoxWithIcon({
  children,
  icon,
  iconSize = THEME.sizes.md,
  iconPosition = "left",
  backgroundColor = THEME.colors.primary[10],
  isNoPadding = false,
}: {
  children: ReactNode;
  icon: ImageProps["source"];
  iconSize?: number;
  iconPosition?: "left" | "right";
  backgroundColor?: string;
  isNoPadding?: boolean;
}) {
  const styles = StyleSheet.create({
    container: {
      flexDirection: iconPosition === "left" ? "row" : "row-reverse",
      alignItems: "center",
      justifyContent: "space-between",
      padding: isNoPadding ? 0 : THEME.spacing.xl1,
      backgroundColor: backgroundColor,
      borderRadius: THEME.spacing.xl,
      flex: 1,
    },
    icon: {
      width: iconSize,
      height: iconSize,
      marginRight: THEME.spacing.xl,
      tintColor: THEME.colors.primary[100],
    },
    text: {
      paddingHorizontal: THEME.spacing.lg,
      maxWidth: "80%",
    },
  });

  return (
    <View style={styles.container}>
      <Image source={icon} style={styles.icon} />
      <View style={styles.text}>{children}</View>
    </View>
  );
}
