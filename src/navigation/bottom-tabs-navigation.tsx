import React from "react";
import { AppScreen } from "src/constant/screen";
import { Tab } from "./tab";
import MainScreen from "src/screens/main-screen/main-screen";
import SearchScreen from "src/screens/search-screen/search-screen";
import BookmarkScreen from "src/screens/bookmark-screen/bookmark-screen";
import SettingsScreen from "src/screens/settings-screen/settings-screen";

export default function BottomTabsNavigation() {
  return (
    <Tab.Navigator
      initialRouteName={AppScreen.MainScreen}
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen name={AppScreen.MainScreen} component={MainScreen} />
      <Tab.Screen name={AppScreen.SearchScreen} component={SearchScreen} />
      <Tab.Screen name={AppScreen.BookmarksScreen} component={BookmarkScreen} />
      <Tab.Screen name={AppScreen.SettingsScreen} component={SettingsScreen} />
    </Tab.Navigator>
  );
}
