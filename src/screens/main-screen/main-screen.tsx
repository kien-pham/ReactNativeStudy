import React from "react";
import { SafeAreaView } from "react-native";
import { styles } from "./style";
import WelcomeHeader from "./welcome-header";
import SearchForm from "./search-form";

export default function MainScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <WelcomeHeader />
      <SearchForm />
    </SafeAreaView>
  );
}
