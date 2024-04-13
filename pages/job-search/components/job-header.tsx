import React from "react";
import { Image, ImageSourcePropType, StyleSheet, View } from "react-native";

const menuIcon = require("./../../../assets/menu-50.png");
const avatarImg = require("./../../../assets/appAvatar.jpeg");

function UserAvatar({ avatar }: { avatar: ImageSourcePropType }) {
  return <Image source={avatar} style={styles.headerAvatar} />;
}

function MenuIcon() {
  return (
    <View style={styles.headerMenuIconWrapper}>
      <Image source={menuIcon} style={styles.headerMenuIcon} />
    </View>
  );
}

export default function JobHeader() {
  return (
    <View style={styles.headerWrapper}>
      <MenuIcon />
      <UserAvatar avatar={avatarImg} />
    </View>
  );
}

const styles = StyleSheet.create({
  headerWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerAvatar: {
    width: 32,
    height: 32,
    borderRadius: 6,
  },
  headerMenuIconWrapper: {
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#efefef",
  },
  headerMenuIcon: {
    width: 16,
    height: 16,
  },
});
