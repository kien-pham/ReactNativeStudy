import React from "react";
import { StyleSheet, View } from "react-native";
import MainNavigation from "./src/navigation/main-navigation";
import Toast from "react-native-toast-message";
import { store } from "src/services/redux/redux-store";
import { Provider } from "react-redux";

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <MainNavigation />
      </View>
      <Toast />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
