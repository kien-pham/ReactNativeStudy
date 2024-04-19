import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Stack } from "./stack";
import SplashScreen from "../screens/splash-screen/splash-screen";
import { AppScreen } from "../constant/screen";
import BottomTabsNavigation from "./bottom-tabs-navigation";

export default function MainNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={AppScreen.SplashScreen}
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name={AppScreen.SplashScreen} component={SplashScreen} />
        <Stack.Screen
          name={AppScreen.MainScreen}
          component={BottomTabsNavigation}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
