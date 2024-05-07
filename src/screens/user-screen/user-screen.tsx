import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import ActionButton from "src/components/button/button";
import { THEME } from "src/constant/theme";
import HeaderBar from "src/features/header-bar/header-bar";
import UserLogs from "./user-logs";

export default function UserScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <HeaderBar />
      <ScrollView style={styles.boxWrapper}>
        <Text style={[styles.heading, styles.bottomSpace]}>Wellness Hub</Text>

        <View style={[styles.btnsWrapper, styles.bottomSpace]}>
          <ActionButton
            label="Trending"
            isFixedWidth={false}
            btnFontSize={THEME.fontSizes.sm}
          />
          <ActionButton
            label="Relationship"
            btnTextColor={THEME.colors.gray[600]}
            btnBgColor={THEME.colors.primary[200]}
            btnFontSize={THEME.fontSizes.sm}
            isFixedWidth={false}
          />
          <ActionButton
            label="Self Care"
            btnTextColor={THEME.colors.gray[600]}
            btnBgColor={THEME.colors.primary[200]}
            btnFontSize={THEME.fontSizes.sm}
            isFixedWidth={false}
          />
        </View>

        <View style={styles.topSpace}>
          <UserLogs />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.colors.white,
  },
  boxWrapper: {
    padding: THEME.spacing.xl,
  },
  bottomSpace: {
    marginBottom: THEME.spacing.xl,
  },
  topSpace: {
    marginTop: THEME.spacing.xl,
  },
  heading: {
    color: THEME.colors.purple[700],
    fontWeight: "bold",
    fontSize: THEME.fontSizes.lg,
  },
  btnsWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
