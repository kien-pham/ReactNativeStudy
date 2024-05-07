import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import ActionLink from "src/components/action-link/action-link";
import ContentBox from "src/components/content-box/content-box";
import { ICONS } from "src/constant/icons";
import { THEME } from "src/constant/theme";
import HeaderBar from "src/features/header-bar/header-bar";
import FilterBar from "./filter-bar";
import SessionsContent from "./sessions-content";

export default function VideoScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <HeaderBar />

      <ScrollView>
        <View style={styles.boxWrapper}>
          <View style={styles.bottomSpace}>
            <ContentBox
              title="Upcoming Session"
              content="Sahana V. Msc in Clinical Psychology"
              subContent={<Text style={styles.time}>7:30 PM - 8:30 PM</Text>}
              textColor={THEME.colors.purple[700]}
              bgColor={THEME.colors.primary[30]}
              bgImgColor={THEME.colors.primary[600]}
              actionBtn={
                <ActionLink
                  label="Join Now"
                  color={THEME.colors.primary[500]}
                  icon={ICONS.PlayIcon}
                />
              }
            />
          </View>

          <View style={styles.topSpace}>
            <FilterBar />
          </View>

          <SessionsContent />
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
  topSpace: {
    marginTop: THEME.spacing.xl,
  },
  bottomSpace: {
    marginBottom: THEME.spacing.xl,
  },
  time: {
    fontSize: THEME.fontSizes.sm,
    color: THEME.colors.purple[700],
    marginTop: THEME.spacing.lg,
    lineHeight: THEME.fontSizes.lg,
    fontWeight: "bold",
  },
});
