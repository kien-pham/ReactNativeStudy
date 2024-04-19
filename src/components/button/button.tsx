import React from "react";
import {
  DimensionValue,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from "react-native";
import { THEME } from "src/constant/theme";

export default function ActionButton({
  label = "Button",
  onPress,
  btnStyle,
  textStyle,
}: {
  label: string;
  onPress?: () => void;
  btnStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}) {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, btnStyle]}>
      <Text style={[styles.label, textStyle]}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: THEME.sizes.full as DimensionValue,
    padding: THEME.spacing.md,
  },
  label: {
    textAlign: "center",
  },
});
