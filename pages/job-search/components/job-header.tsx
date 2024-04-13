import React from "react";
import { Image, ImageSourcePropType, StyleSheet, View } from "react-native";

const menuIcon = require("./../../../assets/menu-50.png");
const avatarImg = require("./../../../assets/appAvatar.jpeg");

function UserAvatar({ avatar }: { avatar: ImageSourcePropType }) {
  return (
    <View style={styles.headerAvatar}>
      <Image source={avatar} />
    </View>
  );
}

function MenuIcon() {
  return (
    <View style={styles.headerMenuIcon}>
      <Image source={menuIcon} />
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
  headerWrapper: {},
  headerAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  headerMenuIcon: {},
});
