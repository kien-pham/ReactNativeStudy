import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ContentBoxWithIcon from "src/components/content-box/content-box-with-icon";
import { ICONS } from "src/constant/icons";
import { THEME } from "src/constant/theme";

export default function GroupBtns() {
  return (
    <View>
      <View style={[styles.boxWrapper, styles.groupBtnsWrapper]}>
        <ContentBoxWithIcon icon={ICONS.BookIcon} iconSize={22}>
          <Text style={styles.heading}>Journal</Text>
        </ContentBoxWithIcon>

        <ContentBoxWithIcon icon={ICONS.LibraryIcon} iconSize={24}>
          <Text style={styles.heading}>Library</Text>
        </ContentBoxWithIcon>
      </View>

      <View style={styles.quoteBox}>
        <ContentBoxWithIcon
          icon={ICONS.QuoteIcon}
          iconSize={THEME.sizes.lg}
          iconPosition="right"
        >
          <Text style={styles.quoteText}>
            "It is better to conquer yourself than to win a thousand battles"
          </Text>
        </ContentBoxWithIcon>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  boxWrapper: {
    padding: THEME.spacing.xl,
  },
  quoteBox: {
    paddingHorizontal: THEME.spacing.xl,
  },
  quoteText: {
    fontSize: THEME.fontSizes.sm,
    lineHeight: THEME.spacing.xl0,
    color: THEME.colors.purple[800],
  },
  groupBtnsWrapper: {
    flexDirection: "row",
    alignItems: "stretch",
    // justifyContent: "space-between",
    gap: THEME.spacing.xl,
  },
  heading: {
    fontWeight: "bold",
    fontSize: THEME.fontSizes.md,
    color: THEME.colors.purple[800],
  },
});
