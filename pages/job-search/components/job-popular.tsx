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
import { apiClient } from "../../../services/api-client";
import { JOBS_API_URL } from "../job-search";

function JobPopularHeading() {
  return (
    <View style={styles.jobPopularWrapper}>
      <Text style={styles.jobPopularTitle}>Popular jobs</Text>
      <Text style={styles.jobPopularShowAll}>Show all</Text>
    </View>
  );
}

function JobItem({ jobData }: { jobData: Job }) {
  return (
    <TouchableOpacity style={styles.jobItemWrapper}>
      <Image source={{ uri: jobData.companyLogo }} style={styles.jobItemLogo} />
      <Text numberOfLines={1} style={styles.jobItemCompanyTitle}>
        {jobData.company}
      </Text>
      <Text numberOfLines={1} style={styles.jobItemTitle}>
        {jobData.jobTitle}
      </Text>
    </TouchableOpacity>
  );
}

function JobPopularList() {
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
      horizontal
      renderItem={({ item }) => <JobItem jobData={item} />}
      keyExtractor={(job) => job.id}
    />
  );
}

export default function JobPopular() {
  return (
    <View>
      <JobPopularHeading />
      <JobPopularList />
    </View>
  );
}

const styles = StyleSheet.create({
  jobPopularWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 20,
  },
  jobPopularTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#555",
  },
  jobPopularShowAll: {
    color: "#999",
    fontSize: 14,
  },
  jobItemWrapper: {
    padding: 24,
    margin: 8,
    backgroundColor: "#fff",
    borderRadius: 8,

    shadowColor: "#666",
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
  },
  jobItemTitle: {
    color: "#333",
    fontSize: 16,
    fontWeight: "600",
    marginTop: 8,
    maxWidth: 200,
  },
  jobItemLogo: {
    width: 50,
    height: 50,
    borderRadius: 8,
    marginBottom: 8,
    objectFit: "cover",
  },
});
