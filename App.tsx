import React from "react";
import { StyleSheet, View } from "react-native";
import MainNavigation from "./src/navigation/main-navigation";
import { Provider } from "react-redux";
import { store } from "src/services/redux/redux-store";

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <MainNavigation />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
