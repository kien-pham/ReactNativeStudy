import React from "react";
import { StyleSheet, Text, View } from "react-native";
import UserAvatar from "src/components/avatar/user-avatar";
import { THEME } from "src/constant/theme";

export default function WelcomeHeader() {
  return (
    <View style={styles.wrapper}>
      <View>
        <Text style={styles.title}>Hello Kien,</Text>
        <Text style={styles.subTitle}>What do you want to cook today?</Text>
      </View>
      <UserAvatar size={40} />
    </View>
  );
}

export const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: THEME.spacing.xl,
  },
  title: {
    color: THEME.colors.gray[600],
    fontSize: THEME.fontSizes.xl,
    fontWeight: "600",
    marginBottom: THEME.spacing.md,
  },
  subTitle: {
    color: THEME.colors.gray["400"],
    fontSize: THEME.fontSizes.sm,
  },
});
