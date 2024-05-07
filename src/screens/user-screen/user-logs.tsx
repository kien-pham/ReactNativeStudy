import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import AvatarContentBox from "src/components/avatar-content-box/avatar-content-box";
import { ICONS } from "src/constant/icons";
import { IMAGES } from "src/constant/images";
import { THEME } from "src/constant/theme";

function LogToolbar() {
  return (
    <View style={styles.toolbarWrapper}>
      <View style={styles.toolbarLike}>
        <View style={styles.likeItem}>
          <Image source={ICONS.LikeIcon} style={styles.likeActive} />
          <Text style={{ color: THEME.colors.gray[400] }}>12</Text>
        </View>
        <View style={styles.likeItem}>
          <Image source={ICONS.CommentMiddleIcon} style={styles.likeNormal} />
          <Text style={{ color: THEME.colors.gray[400] }}>2</Text>
        </View>
      </View>

      <Image source={ICONS.ShareIcon} style={styles.likeNormal} />
    </View>
  );
}

function LogItem({}) {
  return (
    <View>
      <AvatarContentBox
        avatarSource={IMAGES.UserAvatar2}
        avatarSize={THEME.sizes.xl}
      >
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>Coal Dingo</Text>
          <Text style={styles.time}> - Just now</Text>
        </View>
        <Text style={styles.content}>
          Is there a therapy which can cure crossdressing & bdsm compulsion?
        </Text>

        <LogToolbar />
      </AvatarContentBox>

      <View style={styles.border} />
    </View>
  );
}

export default function UserLogs() {
  return (
    <View>
      {Array(9)
        .fill(null)
        .map((_, index) => (
          <LogItem key={index} />
        ))}
    </View>
  );
}

const styles = StyleSheet.create({
  titleWrapper: { flexDirection: "row" },
  title: {
    color: THEME.colors.purple[700],
    fontWeight: "bold",
    fontSize: THEME.fontSizes.sm,
    marginBottom: THEME.spacing.lg,
  },
  time: { color: THEME.colors.gray[400] },
  content: {
    alignItems: "stretch",
    maxWidth: "90%",
    color: THEME.colors.purple[700],
    lineHeight: THEME.spacing.xl0,
  },
  border: {
    height: THEME.spacing.xs,
    width: "100%",
    marginVertical: THEME.spacing.lg2,
    backgroundColor: THEME.colors.primary[100],
    opacity: 0.3,
  },

  toolbarWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: THEME.spacing.lg,
  },
  toolbarLike: {
    flexDirection: "row",
    width: "35%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  likeItem: { flexDirection: "row", gap: THEME.spacing.lg },
  likeActive: {
    width: THEME.sizes.md,
    height: THEME.sizes.md,
    tintColor: THEME.colors.primary[500],
  },
  likeNormal: {
    width: THEME.sizes.sm,
    height: THEME.sizes.sm,
    tintColor: THEME.colors.primary[100],
  },
});
