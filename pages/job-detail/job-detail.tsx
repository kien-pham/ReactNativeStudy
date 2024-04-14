import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {
  JobDetailScreenRouteProp,
  ScreenNavProps,
} from "../../types/navigation";

export default function JobDetail() {
  const navigation = useNavigation<ScreenNavProps>();
  const { params } = useRoute<JobDetailScreenRouteProp>();
  const jobData = params.jobData;

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>Back</Text>
      </TouchableOpacity>

      <Text>{jobData.jobTitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
    flex: 1,
    backgroundColor: "#fff",
  },
});
