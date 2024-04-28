import React from "react";
import { AppScreen } from "src/constant/screen";
import MainScreen from "src/screens/main-screen/main-screen";
import SearchScreen from "src/screens/search-screen/search-screen";
import BookmarkScreen from "src/screens/bookmark-screen/bookmark-screen";
import SettingsScreen from "src/screens/settings-screen/settings-screen";
import TabIcon from "src/components/tab-icon/tab-icon";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ICONS } from "src/constant/icons";

const Tab = createBottomTabNavigator();

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
            <TabIcon icon={ICONS.HomeIcon} isFocused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name={AppScreen.SearchScreen}
        component={SearchScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon icon={ICONS.SearchIcon} isFocused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name={AppScreen.BookmarksScreen}
        component={BookmarkScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon icon={ICONS.BookmarkIcon} isFocused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name={AppScreen.SettingsScreen}
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon icon={ICONS.SettingsIcon} isFocused={focused} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
