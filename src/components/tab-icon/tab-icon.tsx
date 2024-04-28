import React from "react";
import { Image, ImageSourcePropType, StyleSheet, View } from "react-native";
import { THEME } from "src/constant/theme";

export default function TabIcon({
  icon,
  isFocused,
}: {
  icon: ImageSourcePropType;
  isFocused: boolean;
}) {
  return (
    <View style={styles.tabWrapper}>
      <Image
        source={icon}
        style={isFocused ? styles.iconActive : styles.iconNormal}
      />
      <View style={isFocused && styles.tabActive} />
    </View>
  );
}

const styles = StyleSheet.create({
  tabWrapper: {
    alignItems: "center",
    justifyContent: "center",
    width: 40,
    height: 48,
  },
  iconActive: {
    tintColor: THEME.colors.primary[500],
    width: 20,
    height: 20,
  },
  iconNormal: {
    tintColor: THEME.colors.gray[400],
    width: 20,
    height: 20,
  },
  tabActive: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 3,
    borderRadius: 10,
    backgroundColor: THEME.colors.primary[500],
  },
});
