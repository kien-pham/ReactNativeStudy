import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { CATEGORIES } from "src/constant/sample-data";
import Categories from "src/features/categories/categories";
import HeaderBar from "src/features/header-bar/header-bar";
import WelcomeHeading from "./welcome-heading";
import ContentBox from "src/components/content-box/content-box";
import { THEME } from "src/constant/theme";
import { ICONS } from "src/constant/icons";
import ActionLink from "src/components/action-link/action-link";
import GroupBtns from "./group-btns";

export default function MainScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <HeaderBar />

      <ScrollView>
        <WelcomeHeading />
        <Categories data={CATEGORIES} />

        <View style={styles.boxWrapper}>
          <ContentBox
            title="1 on 1 Sessions"
            content="Let's open up to the things that matter the most"
            actionBtn={
              <ActionLink
                label="Book a Session"
                color={THEME.colors.primary[500]}
                icon={ICONS.CalendarIcon}
              />
            }
            bgColor={THEME.colors.primary[30]}
            bgImgColor={THEME.colors.primary[600]}
            bgImg={ICONS.LinkIcon}
          />
        </View>

        <GroupBtns />
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
});
