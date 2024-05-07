import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import ContentBoxWithIcon from "src/components/content-box/content-box-with-icon";
import { ICONS } from "src/constant/icons";
import { THEME } from "src/constant/theme";

export default function FilterBar() {
  return (
    <View style={[styles.navWrapper, styles.bottomSpace]}>
      <View style={styles.filter}>
        <ContentBoxWithIcon
          icon={ICONS.ArrowDown}
          backgroundColor="transparent"
          iconPosition="right"
          isNoPadding
        >
          <Text style={styles.heading}>All Sessions</Text>
        </ContentBoxWithIcon>
      </View>
      <Image source={ICONS.TwoArrows} style={styles.twoArrows} />
    </View>
  );
}

const styles = StyleSheet.create({
  navWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  bottomSpace: {
    marginBottom: THEME.spacing.xl,
  },
  filter: {
    maxWidth: 200,
  },
  heading: {
    color: THEME.colors.purple[700],
    fontWeight: "bold",
    fontSize: THEME.fontSizes.lg,
  },
  twoArrows: {
    width: THEME.sizes.md,
    height: THEME.sizes.md,
    tintColor: THEME.colors.primary[100],
  },
});
