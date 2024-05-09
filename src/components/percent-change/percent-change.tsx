import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { ICONS } from "src/constant/icons";
import { THEME } from "src/constant/theme";

export default function PercentChange({
  isUp = true,
  changeValue,
}: {
  isUp?: boolean;
  changeValue: number;
}) {
  return (
    <View style={styles.coinWrapper}>
      <Image
        source={ICONS.ArrowUpIcon}
        style={[styles.iconArrow, isUp ? styles.upIcon : styles.downIcon]}
      />
      <Text style={[styles.coinChange, isUp ? styles.up : styles.down]}>
        {changeValue}%
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  iconArrow: {
    width: THEME.sizes.xs,
    height: THEME.sizes.xs,
    marginRight: THEME.spacing.md,
  },
  coinWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  coinChange: {
    fontWeight: "600",
    fontSize: THEME.fontSizes.sm,
  },
  up: {
    color: THEME.colors.primary[500],
  },
  down: {
    color: "red",
  },
  upIcon: {
    tintColor: THEME.colors.primary[500],
  },
  downIcon: {
    tintColor: "red",
    transform: [{ rotate: "90deg" }],
  },
});
