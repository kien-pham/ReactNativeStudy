import React from "react";
import { Text, View, StyleSheet, SafeAreaView } from "react-native";

export default function TodoApi() {
  return (
    <SafeAreaView style={styles.mainView}>
      <View style={styles.sectionContainer}>
        <Text>todo-api</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: "#efefef",
  },
  sectionContainer: {
    width: "100%",
    height: "100%",
    padding: 20,
  },
});
