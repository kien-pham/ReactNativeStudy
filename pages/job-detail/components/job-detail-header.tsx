import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ScreenNavProps } from "../../../types/navigation";

const backIcon = require("./../../../assets/backIcon.png");
const shareIcon = require("./../../../assets/shareIcon.png");

function ShareIcon() {
  return (
    <View style={styles.headerIconWrapper}>
      <Image source={shareIcon} style={styles.headerMenuIcon} />
    </View>
  );
}

function BackIcon() {
  const navigation = useNavigation<ScreenNavProps>();

  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <View style={styles.headerIconWrapper}>
        <Image source={backIcon} style={styles.headerMenuIcon} />
      </View>
    </TouchableOpacity>
  );
}

export default function JobDetailHeader() {
  return (
    <View style={styles.headerWrapper}>
      <BackIcon />
      <ShareIcon />
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
  headerIconWrapper: {
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#fff",
  },
  headerMenuIcon: {
    width: 16,
    height: 16,
  },
});
