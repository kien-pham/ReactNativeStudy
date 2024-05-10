import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import CoinCard from "src/components/cards/coin-card";
import CoinChart from "src/components/chart/coin-chart";
import IconButton from "src/components/icon-button/icon-button";
import Wallet from "src/components/wallet/wallet";
import { ICONS } from "src/constant/icons";
import { THEME } from "src/constant/theme";
import { useFormatCoinDataFromApi } from "src/hooks/use-format-coin-data";
import { useGetCoinsPriceQuery } from "src/services/api/coingecko-api";
import { ResponseCoin } from "src/types/coin";

export default function MainScreen() {
  const { data } = useGetCoinsPriceQuery();
  const coinData = useFormatCoinDataFromApi(data as ResponseCoin[]);
  const btcChartData =
    (coinData && coinData.find((coin) => coin.symbol === "btc")?.chartValue) ||
    [];

  if (coinData)
    return (
      <View style={styles.container}>
        <View style={styles.headerWrapper}>
          <View style={styles.walletWrapper}>
            <Wallet
              price={coinData[0].currentPrice}
              changeValue={coinData[0].priceChangePercentage24h}
              isUp={coinData[0].isUp}
            />
          </View>

          <View style={styles.btnWrapper}>
            <View style={styles.btnsGroup}>
              <IconButton label="Transfer" icon={ICONS.SendIcon} />
              <IconButton label="Withdraw" icon={ICONS.DownArrowIcon} />
            </View>
          </View>
        </View>

        <View style={styles.chartWrapper}>
          <CoinChart data={btcChartData} height={200} />
        </View>

        <View style={styles.coinListWrapper}>
          <Text style={styles.heading}>Top Cryptocurrency</Text>
          <FlatList
            data={coinData.sort((a, b) => a.marketRank - b.marketRank)}
            renderItem={({ item }) => (
              <CoinCard
                icon={item.image}
                name={item.name}
                price={item.currentPrice}
                changePercent={item.priceChangePercentage24h}
                isPriceUp={item.isUp}
              />
            )}
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
    marginTop: THEME.spacing.xxl,
  },
  coinListWrapper: {
    paddingHorizontal: THEME.spacing.xl2,
  },
  heading: {
    color: THEME.colors.white,
    fontWeight: "bold",
    fontSize: THEME.fontSizes.md,
    marginBottom: THEME.spacing.xl,
  },
});
