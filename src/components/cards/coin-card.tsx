import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { ICONS } from "src/constant/icons";
import { THEME } from "src/constant/theme";

export default function CoinCard({
  icon,
  name,
  price,
  changePercent,
  isPriceUp = true,
}: {
  icon: any;
  name: string;
  price: string;
  changePercent: string;
  isPriceUp?: boolean;
}) {
  return (
    <View style={styles.wrapper}>
      <View style={styles.coinWrapper}>
        <Image source={icon} style={styles.icon} />
        <Text style={styles.text}>{name}</Text>
      </View>
      <View style={styles.coinPriceWrapper}>
        <Text style={styles.text}>{price}</Text>
        <View style={styles.coinWrapper}>
          <Image
            source={ICONS.ArrowUpIcon}
            style={[
              styles.iconArrow,
              isPriceUp ? styles.upIcon : styles.downIcon,
            ]}
          />
          <Text
            style={[styles.coinChange, isPriceUp ? styles.up : styles.down]}
          >
            {changePercent}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: "space-between",
    flexDirection: "row",
    width: "100%",
    paddingVertical: THEME.spacing.md,
  },
  icon: {
    tintColor: THEME.colors.white,
    width: THEME.sizes.sm,
    height: THEME.sizes.sm,
    marginRight: THEME.spacing.xl1,
  },
  iconArrow: {
    width: THEME.sizes.xs,
    height: THEME.sizes.xs,
    marginRight: THEME.spacing.md,
  },
  coinWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  coinPriceWrapper: {
    flexDirection: "column",
    alignItems: "flex-end",
  },
  text: {
    color: THEME.colors.white,
    fontWeight: "700",
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
