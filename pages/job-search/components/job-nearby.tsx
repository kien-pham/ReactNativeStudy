import React, { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Job } from "../../../types/job";
import { apiClient, JOBS_API_URL } from "../../../services/api-client";
import { useNavigation } from "@react-navigation/native";
import { ScreenNavProps, ScreenName } from "../../../types/navigation";

function JobNearbyHeading() {
  return (
    <View style={styles.jobNearbyWrapper}>
      <Text style={styles.jobNearbyTitle}>Nearby jobs</Text>
      <Text style={styles.jobNearbyShowAll}>Show all</Text>
    </View>
  );
}

function JobItem({ jobData }: { jobData: Job }) {
  const navigation = useNavigation<ScreenNavProps>();

  return (
    <TouchableOpacity
      style={styles.jobItemWrapper}
      onPress={() => navigation.navigate(ScreenName.JobDetail, { jobData })}
    >
      <Image source={{ uri: jobData.jobImage }} style={styles.jobItemLogo} />

      <View style={styles.jobDetail}>
        <Text numberOfLines={2} style={styles.jobItemTitle}>
          {jobData.jobTitle}
        </Text>
        <Text numberOfLines={1} style={styles.jobItemCompanyTitle}>
          {jobData.jobType}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

function JobNearbyList() {
  const [jobs, setJobs] = useState<Job[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiClient().get(JOBS_API_URL);

        if (response.status !== 200) {
          throw new Error("Failed to fetch data");
        }
        setJobs(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <FlatList
      data={jobs}
      renderItem={({ item }) => <JobItem jobData={item} />}
      keyExtractor={(job) => job.id}
    />
  );
}

export default function JobNearby() {
  return (
    <View>
      <JobNearbyHeading />
      <JobNearbyList />
    </View>
  );
}

const styles = StyleSheet.create({
  jobNearbyWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 20,
  },
  jobNearbyTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#555",
  },
  jobNearbyShowAll: {
    color: "#999",
    fontSize: 14,
  },
  jobItemWrapper: {
    padding: 24,
    margin: 8,
    backgroundColor: "#fff",
    borderRadius: 8,
    display: "flex",
    flexDirection: "row",

    shadowColor: "#999",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 5,
  },
  jobItemCompanyTitle: {
    color: "#888",
    fontSize: 14,
    fontWeight: "400",
    maxWidth: 200,
    marginTop: 6,
  },
  jobDetail: {
    marginLeft: 16,
  },
  jobItemTitle: {
    color: "#333",
    fontSize: 16,
    fontWeight: "600",
    maxWidth: 270,
  },
  jobItemLogo: {
    width: 50,
    height: 50,
    borderRadius: 8,
    objectFit: "cover",
    opacity: 0.8,
  },
});
