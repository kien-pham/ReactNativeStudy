import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { THEME } from "src/constant/theme";

export default function ActionButton({
  label,
  isTransparent = false,
}: {
  label: string;
  isTransparent?: boolean;
}) {
  return (
    <View
      style={[styles.btnWrapper, isTransparent ? styles.btnTransparent : {}]}
    >
      <Text style={[styles.text, isTransparent ? styles.textColored : {}]}>
        {label}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  btnWrapper: {
    width: THEME.sizes.actionBtn,
    paddingVertical: THEME.spacing.lg2,
    borderRadius: THEME.spacing.lg,
    backgroundColor: THEME.colors.primary[500],
  },
  text: {
    color: THEME.colors.white,
    fontSize: THEME.fontSizes.md,
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
