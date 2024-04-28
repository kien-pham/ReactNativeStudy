import { useRoute } from "@react-navigation/native";
import React from "react";
import { Text } from "react-native";
import { ScreenNavRouteProp } from "src/types/navigation";

export default function DetailScreen() {
  const { params } = useRoute<ScreenNavRouteProp>();
  console.log(params);

  return <Text>DetailScreen</Text>;
}
