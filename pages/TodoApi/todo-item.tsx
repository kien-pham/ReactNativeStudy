import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { TotoItem } from "../../types/todo";

export default function TodoItem({ title }: { title: TotoItem["title"] }) {
  return (
    <View style={styles.itemBox}>
      <Text>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  itemBox: {
    backgroundColor: "white",
    margin: 5,
    padding: 16,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ddd",

    // shadow
    shadowColor: "#aaa",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
