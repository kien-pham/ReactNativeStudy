import React from "react";
import { Image, ImageSourcePropType, StyleSheet, View } from "react-native";
import { THEME } from "src/constant/theme";

export default function TabIcon({
  icon,
  size = THEME.spacing.xl0,
  isFocused,
}: {
  icon: ImageSourcePropType;
  size?: number;
  isFocused: boolean;
}) {
  return (
    <View style={styles.tabWrapper}>
      {isFocused && <View style={styles.tabActive} />}

      <Image
        source={icon}
        style={[
          isFocused ? styles.iconActive : styles.iconNormal,
          { width: size, height: size },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  tabWrapper: {
    alignItems: "center",
    justifyContent: "center",
    width: 40,
    height: 48,
    overflow: "hidden",
  },
  iconActive: {
    tintColor: THEME.colors.primary[500],
  },
  iconNormal: {
    tintColor: THEME.colors.gray[400],
  },
  tabActive: {
    backgroundColor: THEME.colors.primary[500],
    width: 10,
    height: 10,
    borderRadius: 5,
    position: "absolute",
    top: -4,
  },
});
