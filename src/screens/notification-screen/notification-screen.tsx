import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function NotificationScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🐶</Text>
      <Text>meow meoww</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 80,
  },
});
