import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import JobSearchApp from "./pages/job-search/job-search";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import JobDetail from "./pages/job-detail/job-detail";
import { RootStackParamList, ScreenName } from "./types/navigation";

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name={ScreenName.Home} component={JobSearchApp} />
          <Stack.Screen name={ScreenName.JobDetail} component={JobDetail} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
