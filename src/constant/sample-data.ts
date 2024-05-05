import { ImageSourcePropType } from "react-native";
import { ICONS } from "./icons";

export type Category = {
  label: string;
  color: string;
  icon: ImageSourcePropType;
};

export const CATEGORIES: Category[] = [
  {
    label: "Happy",
    color: "#ef5da8",
    icon: ICONS.HappyIcon,
  },
  {
    label: "Calm",
    color: "#aeaff7",
    icon: ICONS.CalmIcon,
  },
  {
    label: "Manic",
    color: "#9fe3e2",
    icon: ICONS.YinYangIcon,
  },
  {
    label: "Angry",
    color: "#f09e54",
    icon: ICONS.AngryIcon,
  },
  {
    label: "Good",
    color: "#c2f2a5",
    icon: ICONS.GoodIcon,
  },
];
