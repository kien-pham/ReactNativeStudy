import React from "react";
import { StyleSheet, Text, View } from "react-native";
import CoinCard from "src/components/cards/coin-card";
import CoinChart from "src/components/chart/coin-chart";
import IconButton from "src/components/icon-button/icon-button";
import Wallet from "src/components/wallet/wallet";
import { ICONS } from "src/constant/icons";
import { THEME } from "src/constant/theme";

const data = [
  {
    timestamp: 1625945400000,
    value: 33575.25,
  },
  {
    timestamp: 1625946300000,
    value: 33545.25,
  },
  {
    timestamp: 1625947200000,
    value: 33510.25,
  },
  {
    timestamp: 1625948100000,
    value: 33215.25,
  },
];

export default function MainScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.headerWrapper}>
        <View style={styles.walletWrapper}>
          <Wallet price={62290} changeValue={3.2} />
        </View>

        <View style={styles.btnWrapper}>
          <View style={styles.btnsGroup}>
            <IconButton label="Transfer" icon={ICONS.HomeIcon} />
            <IconButton label="Withdraw" icon={ICONS.HomeIcon} />
          </View>
        </View>
      </View>

      <View style={styles.chartWrapper}>
        <CoinChart data={data} height={200} />
      </View>

      <View>
        <Text style={styles.heading}>Top Cryptocurrency</Text>
        <CoinCard
          icon={ICONS.HomeIcon}
          name="Bitcoin"
          price="$ 50.000"
          changePercent={30}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.colors.black,
  },
  headerWrapper: {
    backgroundColor: THEME.colors.gray[800],
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8,
    paddingTop: THEME.spacing.xxl,
    height: 200,
    justifyContent: "center",
  },
  walletWrapper: { paddingHorizontal: THEME.spacing.xl2 },
  btnWrapper: {
    width: "100%",
    position: "absolute",
    bottom: -16,
    alignItems: "center",
    justifyContent: "center",
  },
  btnsGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "66%",
  },
  chartWrapper: {
    marginVertical: THEME.spacing.xxl,
  },
  heading: {
    color: THEME.colors.white,
    fontWeight: "bold",
    fontSize: THEME.fontSizes.md,
  },
});
