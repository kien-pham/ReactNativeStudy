import React from "react";
import { View, StyleSheet } from "react-native";
import MainNavigation from "src/navigation/main-navigation";

export default function App() {
  return (
    <View style={styles.container}>
      <MainNavigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
