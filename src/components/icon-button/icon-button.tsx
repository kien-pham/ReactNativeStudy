import React from "react";
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { THEME } from "src/constant/theme";

export default function IconButton({
  label,
  icon,
}: {
  label: string;
  icon: ImageSourcePropType;
}) {
  return (
    <View style={styles.wrapper}>
      <Image source={icon} style={styles.icon} />
      <Text style={styles.text}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    paddingVertical: THEME.spacing.xl,
    paddingHorizontal: THEME.spacing.xl1,
    backgroundColor: THEME.colors.white,
    borderRadius: THEME.spacing.lg,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    width: THEME.sizes.sm,
    height: THEME.sizes.sm,
    marginRight: THEME.spacing.md,
  },
  text: {
    color: THEME.colors.gray[900],
    fontWeight: "700",
  },
});
