import React from "react";
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { THEME } from "../../constant/theme";

export default function TabIcon({
  label,
  icon,
  isFocused,
  isFeatured = false,
}: {
  label: string;
  icon: ImageSourcePropType;
  isFocused: boolean;
  isFeatured?: boolean;
}) {
  return (
    <View style={styles.tabWrapper}>
      <View
        style={[
          styles.tabFeatured,
          isFeatured && {
            width: THEME.sizes.tabFeatured,
            height: THEME.sizes.tabFeatured,
            borderRadius: THEME.sizes.tabFeatured / 2,
          },
        ]}
      />
      <Image
        source={icon}
        style={isFocused || isFeatured ? styles.iconActive : styles.iconNormal}
      />
      <Text
        style={[
          styles.text,
          (isFocused || isFeatured) && styles.textActiveColor,
        ]}
      >
        {label}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  tabWrapper: {
    alignItems: "center",
    justifyContent: "center",
  },
  tabFeatured: {
    backgroundColor: THEME.colors.gray[900],
    position: "absolute",
  },
  iconActive: {
    tintColor: THEME.colors.white,
    width: THEME.sizes.sm,
    height: THEME.sizes.sm,
  },
  iconNormal: {
    tintColor: THEME.colors.gray[300],
    width: THEME.sizes.sm,
    height: THEME.sizes.sm,
  },
  text: {
    textAlign: "center",
    fontSize: THEME.fontSizes.xs1,
    paddingTop: THEME.spacing.md,
    color: THEME.colors.gray[300],
  },
  textActiveColor: {
    color: THEME.colors.white,
  },
});
