import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { THEME } from "src/constant/theme";

export default function TitleWithSub({
  title,
  subTitle,
}: {
  title: string;
  subTitle: string;
}) {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.sub}>{subTitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    color: THEME.colors.purple[700],
    fontWeight: "bold",
    fontSize: THEME.fontSizes.md,
  },
  sub: {
    marginTop: THEME.spacing.sm,
    fontSize: THEME.fontSizes.xs,
    color: THEME.colors.purple[700],
  },
});
