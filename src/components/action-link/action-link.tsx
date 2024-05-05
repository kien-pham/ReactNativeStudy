import React from "react";
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { THEME } from "src/constant/theme";

export default function ActionLink({
  label,
  icon,
  color,
}: {
  label: string;
  icon: ImageSourcePropType;
  color: string;
}) {
  const styles = StyleSheet.create({
    wrapper: {
      flexDirection: "row",
      alignItems: "center",
    },
    text: {
      color: color,
      fontSize: THEME.fontSizes.md,
      fontWeight: "800",
    },
    icon: {
      tintColor: color,
      marginLeft: THEME.spacing.lg,
      height: THEME.fontSizes.md,
      width: THEME.fontSizes.md,
    },
  });
  return (
    <View style={styles.wrapper}>
      <Text style={styles.text}>{label}</Text>
      <Image source={icon} style={styles.icon} />
    </View>
  );
}
