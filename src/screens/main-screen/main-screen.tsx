import React from "react";
import { StyleSheet, View } from "react-native";
import CoinCard from "src/components/cards/coin-card";
import IconButton from "src/components/icon-button/icon-button";
import Wallet from "src/components/wallet/wallet";
import { ICONS } from "src/constant/icons";
import { THEME } from "src/constant/theme";

export default function MainScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.headerWrapper}>
        <View style={{ paddingHorizontal: THEME.spacing.xl2 }}>
          <Wallet price={62290} changeValue={3.2} />
        </View>

        <View style={styles.btnWrapper}>
          <View style={styles.btnsGroup}>
            <IconButton label="Transfer" icon={ICONS.HomeIcon} />
            <IconButton label="Withdraw" icon={ICONS.HomeIcon} />
          </View>
        </View>
      </View>

      <CoinCard
        icon={ICONS.HomeIcon}
        name="Bitcoin"
        price="$ 50.000"
        changePercent={30}
      />
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
});
