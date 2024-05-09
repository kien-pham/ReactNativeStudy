import React from "react";
import { AppScreen } from "src/types/screen";
import TabIcon from "src/components/tab-icon/tab-icon";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ICONS } from "src/constant/icons";
import MainScreen from "src/screens/main-screen/main-screen";
import PortfolioScreen from "src/screens/portfolio-screen/portfolio-screen";
import TradeScreen from "src/screens/trade-screen/trade-screen";
import MarketScreen from "src/screens/market-screen/market-screen";
import ProfitScreen from "src/screens/profit-screen/profit-screen";
import { THEME } from "src/constant/theme";

const Tab = createBottomTabNavigator();

export default function BottomTabsNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          borderTopWidth: 0,
          backgroundColor: THEME.colors.gray[800],
          paddingTop: THEME.spacing.xl2,
        },
      }}
    >
      <Tab.Screen
        name={AppScreen.MainScreen}
        component={MainScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon label="Home" icon={ICONS.HomeIcon} isFocused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name={AppScreen.PortfolioScreen}
        component={PortfolioScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon
              label="Portfolio"
              icon={ICONS.PortfolioIcon}
              isFocused={focused}
            />
          ),
        }}
      />
      <Tab.Screen
        name={AppScreen.TradeScreen}
        component={TradeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon
              label="Trade"
              isFeatured
              icon={ICONS.TradeIcon}
              isFocused={focused}
            />
          ),
        }}
      />
      <Tab.Screen
        name={AppScreen.MarketScreen}
        component={MarketScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon
              label="Market"
              icon={ICONS.MarketIcon}
              isFocused={focused}
            />
          ),
        }}
      />
      <Tab.Screen
        name={AppScreen.ProfitScreen}
        component={ProfitScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon label="Profit" icon={ICONS.UserIcon} isFocused={focused} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
