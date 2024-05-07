import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { THEME } from "src/constant/theme";

export default function ActionButton({
  label,
  isTransparent = false,
  btnBgColor,
  btnTextColor,
  btnFontSize,
  isFixedWidth = true,
}: {
  label: string;
  btnBgColor?: string;
  btnTextColor?: string;
  btnFontSize?: number;
  isTransparent?: boolean;
  isFixedWidth?: boolean;
}) {
  const styles = StyleSheet.create({
    btnWrapper: {
      width: isFixedWidth ? THEME.sizes.actionBtn : "auto",
      paddingHorizontal: isFixedWidth ? "auto" : THEME.spacing.xl0,
      paddingVertical: THEME.spacing.lg2,
      borderRadius: THEME.spacing.lg,
      backgroundColor: btnBgColor ? btnBgColor : THEME.colors.primary[500],
    },
    text: {
      color: btnTextColor ? btnTextColor : THEME.colors.white,
      fontSize: btnFontSize ? btnFontSize : THEME.fontSizes.md,
      fontWeight: "700",
      textAlign: "center",
    },
    btnTransparent: {
      backgroundColor: "transparent",
    },
    textColored: {
      color: THEME.colors.primary[500],
    },
  });

  return (
    <View style={[styles.btnWrapper, isTransparent && styles.btnTransparent]}>
      <Text style={[styles.text, isTransparent ? styles.textColored : {}]}>
        {label}
      </Text>
    </View>
  );
}
