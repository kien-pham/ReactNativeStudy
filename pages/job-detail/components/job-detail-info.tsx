import React from "react";
import { Job } from "../../../types/job";
import { Image, StyleSheet, Text, View } from "react-native";

export default function JobDetailInfo({ jobData }: { jobData: Job }) {
  return (
    <View style={styles.companyInfoWrapper}>
      <Image
        source={{ uri: jobData.companyLogo }}
        style={styles.companyInfoLogo}
      />
      <Text numberOfLines={2} style={styles.jobTitle}>
        {jobData.jobTitle}
      </Text>
      <Text style={styles.companyInfoLocation}>{jobData.location}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  companyInfoWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: 12,
  },
  companyInfoLogo: {
    width: 80,
    height: 80,
    borderRadius: 6,
    marginBottom: 8,
  },
  jobTitle: {
    fontWeight: "500",
    fontSize: 24,
    marginBottom: 4,
    maxWidth: 350,
  },
  companyInfoLocation: {
    color: "#666",
  },
});
