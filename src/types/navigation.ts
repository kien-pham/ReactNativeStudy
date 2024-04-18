import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { AppScreen } from "../constant/screen";

export type RootStackParamList = {
  SplashScreen: undefined;
  MainScreen: undefined;
};

export type ScreenNavProps = StackNavigationProp<
  RootStackParamList,
  AppScreen.SplashScreen,
  AppScreen.MainScreen
>;

export type ScreenNavRouteProp = RouteProp<
  RootStackParamList,
  AppScreen.MainScreen
>;