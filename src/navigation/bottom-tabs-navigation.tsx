import React from "react";
import { AppScreen } from "src/constant/screen";
import { Tab } from "./tab";
import MainScreen from "src/screens/main-screen/main-screen";
import SearchScreen from "src/screens/search-screen/search-screen";
import BookmarkScreen from "src/screens/bookmark-screen/bookmark-screen";
import SettingsScreen from "src/screens/settings-screen/settings-screen";
import TabIcon from "src/components/tab-icon/tab-icon";
import { THEME } from "src/constant/theme";

const homeIcon = require("@appAssets/icon/home-icon.png");
const searchIcon = require("@appAssets/icon/search-icon.png");
const bookmarkIcon = require("@appAssets/icon/bookmark-icon.png");
const settingsIcon = require("@appAssets/icon/settings-icon.png");

export default function BottomTabsNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          borderTopWidth: 0,
        },
      }}
    >
      <Tab.Screen
        name={AppScreen.MainScreen}
        component={MainScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon icon={homeIcon} isFocused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name={AppScreen.SearchScreen}
        component={SearchScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon icon={searchIcon} isFocused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name={AppScreen.BookmarksScreen}
        component={BookmarkScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon icon={bookmarkIcon} isFocused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name={AppScreen.SettingsScreen}
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon icon={settingsIcon} isFocused={focused} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
