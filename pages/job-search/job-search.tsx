import React from "react";
import { StyleSheet, View } from "react-native";
import JobHeader from "./components/job-header";
import JobPopular from "./components/job-popular";
import JobNearby from "./components/job-nearby";
import JobSearchBar from "./components/job-search-bar";

export default function JobSearchApp() {
  return (
    <View style={styles.container}>
      <JobHeader />
      <JobSearchBar />
      <JobPopular />
      <JobNearby />
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
