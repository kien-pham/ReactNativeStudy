import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { THEME } from "src/constant/theme";

export default function Badge({
  value,
  size = 18,
  bgColor = THEME.colors.primary[500],
}: {
  value: number;
  size?: number;
  bgColor?: string;
}) {
  const styles = StyleSheet.create({
    badgeWrapper: {
      backgroundColor: bgColor,
      borderRadius: size / 2,
      width: size,
      height: size,
      justifyContent: "center",
      alignItems: "center",
    },
    text: {
      color: THEME.colors.white,
      fontSize: THEME.fontSizes.xs,
    },
  });
  return (
    <View style={styles.badgeWrapper}>
      <Text style={styles.text}>{value}</Text>
    </View>
  );
}
