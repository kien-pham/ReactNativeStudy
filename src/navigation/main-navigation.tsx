import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import SplashScreen from "../screens/splash-screen/splash-screen";
import { AppScreen } from "../constant/screen";
import BottomTabsNavigation from "./bottom-tabs-navigation";
import DetailScreen from "src/screens/detail-screen/detail-screen";
import { createStackNavigator } from "@react-navigation/stack";
import { RootStackParamList } from "../types/navigation";

const Stack = createStackNavigator<RootStackParamList>();

export default function MainNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={AppScreen.SplashScreen} component={SplashScreen} />
        <Stack.Screen name={AppScreen.DetailScreen} component={DetailScreen} />

        <Stack.Screen
          name={AppScreen.MainTabs}
          component={BottomTabsNavigation}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
