import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Stack } from "./stack";
import SplashScreen from "../screens/splash-screen/splash-screen";
import MainScreen from "../screens/main-screen/main-screen";
import { AppScreen } from "../constant/screen";

export default function MainNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={AppScreen.SplashScreen} component={SplashScreen} />
        <Stack.Screen name={AppScreen.MainScreen} component={MainScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
