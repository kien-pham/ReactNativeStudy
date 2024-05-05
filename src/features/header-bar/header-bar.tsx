import React from "react";
import { Image, StyleSheet, View } from "react-native";
import Badge from "src/components/badge/badge";
import UserAvatar from "src/components/user-avatar/user-avatar";
import { ICONS } from "src/constant/icons";
import { THEME } from "src/constant/theme";

export default function HeaderBar() {
  return (
    <View style={styles.wrapper}>
      <UserAvatar size={40} isOutlined />

      <View style={styles.notificationWrapper}>
        <Image source={ICONS.BellIcon} style={styles.avatar} />
        <View style={styles.notification}>
          <Badge value={3} size={18} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: THEME.colors.white,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    alignContent: "center",
    padding: THEME.spacing.appWrapper,
  },
  avatar: { width: 26, height: 26 },
  notificationWrapper: {
    position: "relative",
    marginRight: 5,
  },
  notification: { position: "absolute", right: -5, top: -5 },
});
