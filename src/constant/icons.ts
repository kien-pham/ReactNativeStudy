import { ImageSourcePropType } from "react-native";

const SearchIcon = require("@appAssets/icon/search-icon.png");
const FoodIcon = require("@appAssets/icon/food-bibimbap.png");
const BookmarkIcon = require("@appAssets/icon/bookmark-icon.png");
const HomeIcon = require("@appAssets/icon/home-icon.png");
const SettingsIcon = require("@appAssets/icon/settings-icon.png");
const BackIcon = require("@appAssets/icon/back-icon.png");
const NextIcon = require("@appAssets/icon/next-icon.png");

export const ICONS: { [key: string]: ImageSourcePropType } = {
  HomeIcon,
  SettingsIcon,
  SearchIcon,
  BookmarkIcon,
  FoodIcon,
  BackIcon,
  NextIcon,
};
