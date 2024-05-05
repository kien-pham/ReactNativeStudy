import React from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import { Category } from "src/constant/sample-data";
import { THEME } from "src/constant/theme";

export default function Categories({ data }: { data: Category[] }) {
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={data}
      renderItem={({ item }) => (
        <View style={styles.wrapper}>
          <View style={[styles.iconWrapper, { backgroundColor: item.color }]}>
            <Image source={item.icon} style={styles.icon} />
          </View>
          <Text style={styles.label}>{item.label}</Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginLeft: THEME.spacing.xl,
  },
  iconWrapper: {
    padding: 16,
    borderRadius: 26,
    marginBottom: 8,
  },
  icon: { width: 42, height: 42, tintColor: THEME.colors.white },
  label: {
    textAlign: "center",
    color: THEME.colors.gray[400],
    fontWeight: "500",
  },
});
