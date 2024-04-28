import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { AppScreen } from "../constant/screen";

export type RootStackParamList = {
  SplashScreen: undefined;
  MainTabs: undefined;
  MainScreen: undefined;
  SearchScreen: undefined;
  BookmarksScreen: undefined;
  SettingsScreen: undefined;
  DetailScreen: { recipeId: string };
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

export type DetailScreenRouteProp = RouteProp<
  RootStackParamList,
  AppScreen.DetailScreen
>;
