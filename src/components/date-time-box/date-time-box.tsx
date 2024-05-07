import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ContentBoxWithIcon from "../content-box/content-box-with-icon";
import { ICONS } from "src/constant/icons";
import { THEME } from "src/constant/theme";

export default function DateTimeBox({
  date,
  time,
  isBorderTop = false,
}: {
  date: string;
  time: string;
  isBorderTop?: boolean;
}) {
  return (
    <View>
      {isBorderTop && <View style={styles.borderTop} />}

      <View style={styles.container}>
        <View style={styles.dateWrapper}>
          <ContentBoxWithIcon
            icon={ICONS.CalendarIcon}
            iconSize={THEME.sizes.sm}
            isNoPadding
            backgroundColor="transparent"
          >
            <Text style={styles.text}>{date}</Text>
          </ContentBoxWithIcon>
        </View>

        <View>
          <ContentBoxWithIcon
            icon={ICONS.ClockIcon}
            iconSize={THEME.sizes.sm}
            isNoPadding
            backgroundColor="transparent"
          >
            <Text style={styles.text}>{time}</Text>
          </ContentBoxWithIcon>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: "row", paddingTop: THEME.spacing.lg },
  dateWrapper: { marginRight: THEME.spacing.lg },
  text: {
    fontSize: THEME.fontSizes.xs,
    color: THEME.colors.gray[400],
  },
  borderTop: {
    width: "100%",
    height: 1,
    opacity: 0.5,
    backgroundColor: THEME.colors.primary[450],
    marginTop: THEME.spacing.lg,
  },
});
