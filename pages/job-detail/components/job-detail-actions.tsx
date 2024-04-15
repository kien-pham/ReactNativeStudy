import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const heartIcon = require("./../../../assets/heartIcon.png");

export default function JobDetailActions() {
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.loveBtn}>
          <Image source={heartIcon} style={styles.heartIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.applyBtn}>
          <Text style={styles.applyBtnText}>Apply this job</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    bottom: 0,
    left: 0,
    padding: 16,
    paddingBottom: 0,
    width: "100%",
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 8,
  },
  heartIcon: {
    width: 16,
    height: 16,
  },
  loveBtn: {
    padding: 16,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "tomato",
  },
  applyBtn: {
    backgroundColor: "tomato",
    padding: 16,
    borderRadius: 8,
    flex: 1,
  },
  applyBtnText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
});
