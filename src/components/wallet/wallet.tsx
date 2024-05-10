import React from "react";
import { StyleSheet, Text, View } from "react-native";
import PercentChange from "../percent-change/percent-change";
import { THEME } from "src/constant/theme";

export default function Wallet({
  price,
  changeValue,
}: {
  price: number;
  changeValue: number;
}) {
  return (
    <View style={styles.container}>
      <Text style={[styles.heading, styles.textGray]}>Your Wallet</Text>
      <View style={styles.priceWrapper}>
        <Text style={[styles.textGray, styles.bold]}>$</Text>
        <Text style={[styles.textWhite, styles.heading, styles.space]}>
          {price}
        </Text>
        <Text style={[styles.textGray, styles.bold]}>USD</Text>
      </View>
      <View style={styles.infoWrapper}>
        <PercentChange changeValue={changeValue} />
        <Text style={[styles.textGray, styles.spaceH]}>7d change</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "auto",
  },
  textGray: {
    color: THEME.colors.gray[200],
  },
  textWhite: {
    color: THEME.colors.white,
  },
  heading: {
    fontSize: THEME.fontSizes.lg,
    fontWeight: "bold",
  },
  space: {
    margin: THEME.spacing.sm,
  },
  spaceH: {
    marginHorizontal: THEME.spacing.lg,
  },
  spaceV: {
    marginVertical: THEME.spacing.lg,
  },
  bold: {
    fontWeight: "700",
  },
  priceWrapper: {
    flexDirection: "row",
    alignItems: "flex-end",
  },
  infoWrapper: {
    flexDirection: "row",
  },
});
