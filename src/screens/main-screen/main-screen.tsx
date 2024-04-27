import React from "react";
import { SafeAreaView } from "react-native";
import { styles } from "./style";
import WelcomeHeader from "./welcome-header";

export default function MainScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <WelcomeHeader />
    </SafeAreaView>
  );
}
