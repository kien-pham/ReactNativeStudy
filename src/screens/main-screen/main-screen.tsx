import React from "react";
import { Text, View } from "react-native";
import CoinCard from "src/components/cards/coin-card";
import IconButton from "src/components/icon-button/icon-button";
import { ICONS } from "src/constant/icons";

export default function MainScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000",
      }}
    >
      <IconButton label="Home" icon={ICONS.HomeIcon} />
      <CoinCard
        icon={ICONS.HomeIcon}
        name="Bitcoin"
        price="$ 50.000"
        changePercent={30}
      />
    </View>
  );
}
