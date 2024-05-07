import React, { ReactNode } from "react";
import { ImageSourcePropType, StyleSheet, View } from "react-native";
import UserAvatar from "../user-avatar/user-avatar";
import { THEME } from "src/constant/theme";

export default function AvatarContentBox({
  avatarSize,
  avatarSource,
  children,
}: {
  avatarSize?: number;
  avatarSource?: ImageSourcePropType;
  children: ReactNode;
}) {
  return (
    <View style={styles.container}>
      <View style={styles.avatar}>
        <UserAvatar
          source={avatarSource}
          size={avatarSize as number}
          isOutlined
        />
      </View>
      <View style={styles.content}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {},
  content: {
    marginLeft: THEME.spacing.lg2,
  },
});
