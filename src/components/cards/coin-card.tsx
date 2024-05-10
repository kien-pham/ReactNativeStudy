import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { THEME } from "src/constant/theme";
import PercentChange from "../percent-change/percent-change";

export default function CoinCard({
  icon,
  name,
  price,
  changePercent,
  isPriceUp = true,
}: {
  icon: string;
  name: string;
  price: number;
  changePercent: number;
  isPriceUp?: boolean;
}) {
  return (
    <View style={styles.wrapper}>
      <View style={styles.coinWrapper}>
        <Image source={{ uri: icon }} style={styles.icon} />
        <Text style={styles.text}>{name}</Text>
      </View>
      <View style={styles.coinPriceWrapper}>
        <Text style={styles.text}>{price}</Text>
        <PercentChange isUp={isPriceUp} changeValue={changePercent} />
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
    width: THEME.sizes.md,
    height: THEME.sizes.md,
    marginRight: THEME.spacing.xl1,
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
});
