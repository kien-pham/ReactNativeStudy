import React from "react";
import { StyleSheet, View } from "react-native";
import { LineChart } from "react-native-wagmi-charts";
import { THEME } from "src/constant/theme";
import { ChartValue } from "src/types/coin";

export default function CoinChart({
  height = 300,
  data,
}: {
  height?: number;
  data: ChartValue[];
}) {
  return (
    <View style={{}}>
      <LineChart.Provider data={data}>
        <LineChart height={height}>
          <LineChart.Path color={THEME.colors.primary[500]} width={1}>
            <LineChart.Gradient />
          </LineChart.Path>
          <LineChart.CursorCrosshair color={THEME.colors.primary[500]}>
            <LineChart.Tooltip position="bottom" textStyle={styles.tooltip} />
          </LineChart.CursorCrosshair>
        </LineChart>
        <LineChart.PriceText />
        <LineChart.DatetimeText />
      </LineChart.Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  tooltip: {
    backgroundColor: THEME.colors.gray[800],
    borderRadius: 4,
    color: "white",
    padding: THEME.spacing.sm,
  },
});
