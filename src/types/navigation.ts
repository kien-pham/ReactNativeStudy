import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { AppScreen } from "./screen";

export type RootStackParamList = {
  MainTabs: undefined;
  MainScreen: undefined;
};

export type ScreenNavProps = StackNavigationProp<
  RootStackParamList,
  AppScreen.MainScreen
>;

export type ScreenNavRouteProp = RouteProp<
  RootStackParamList,
  AppScreen.MainScreen
>;
