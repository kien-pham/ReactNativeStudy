import React from "react";
import { View } from "react-native";
import JobHeader from "./components/job-header";
import JobPopular from "./components/job-popular";
import JobNearby from "./components/job-nearby";

export default function JobSearch() {
  return (
    <View>
      <JobHeader />
      <JobSearch />
      <JobPopular />
      <JobNearby />
    </View>
  );
}
