import React from "react";
import { AppScreen } from "src/constant/screen";
import MainScreen from "src/screens/main-screen/main-screen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ICONS } from "src/constant/icons";
import TabIcon from "src/components/tab-icon/tab-icon";
import VideoScreen from "src/screens/video-screen/video-screen";
import NotificationScreen from "src/screens/user-screen/user-screen";
import UserScreen from "src/screens/notification-screen/notification-screen";

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
        name={AppScreen.VideoScreen}
        component={VideoScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon icon={ICONS.VideoIcon} isFocused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name={AppScreen.NotificationScreen}
        component={NotificationScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon icon={ICONS.CommentMiddleIcon} isFocused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name={AppScreen.UserScreen}
        component={UserScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon icon={ICONS.UserIcon} isFocused={focused} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
