import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function UserScreen() {
  return (
    <View style={styles.container}>
      <Text>UserScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
