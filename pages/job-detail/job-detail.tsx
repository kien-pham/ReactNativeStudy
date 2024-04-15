import { useRoute } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { JobDetailScreenRouteProp } from "../../types/navigation";
import JobDetailHeader from "./components/job-detail-header";
import JobDetailInfo from "./components/job-detail-info";
import JobDetailActions from "./components/job-detail-actions";

export default function JobDetail() {
  const { params } = useRoute<JobDetailScreenRouteProp>();
  const jobData = params.jobData;

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <JobDetailHeader />
        <JobDetailInfo jobData={jobData} />

        <Text>{jobData.jobTitle}</Text>
      </View>

      <JobDetailActions />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    padding: 12,
  },
});
