import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function App() {
  return (
    <View style={styles.wrapper}>
      <Text>Hello World!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#efefef",
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
