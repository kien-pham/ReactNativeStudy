import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AppScreen } from "../constant/screen";
import BottomTabsNavigation from "./bottom-tabs-navigation";
import { createStackNavigator } from "@react-navigation/stack";
import { RootStackParamList } from "../types/navigation";

const Stack = createStackNavigator<RootStackParamList>();

export default function MainNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name={AppScreen.MainTabs}
          component={BottomTabsNavigation}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
