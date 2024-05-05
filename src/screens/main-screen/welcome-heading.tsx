import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { THEME } from "src/constant/theme";

export default function WelcomeHeading() {
  return (
    <View style={styles.wrapper}>
      <Text style={[styles.heading, { fontWeight: "400" }]}>
        Good Afternoon,
      </Text>
      <Text style={[styles.heading, { fontWeight: "600" }]}>Kien Pham!</Text>

      <Text style={styles.subHeading}>How are you feeling today?</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    padding: THEME.spacing.xl,
  },
  heading: {
    fontSize: 28,
    color: THEME.colors.purple[900],
  },
  subHeading: {
    marginVertical: 14,
    fontSize: 16,
    color: THEME.colors.purple[900],
  },
});
