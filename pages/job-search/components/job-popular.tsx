import React, { memo, useEffect, useState } from "react";
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

function JobPopularHeading() {
  return (
    <View style={styles.jobPopularWrapper}>
      <Text style={styles.jobPopularTitle}>Popular jobs</Text>
      <Text style={styles.jobPopularShowAll}>Show all</Text>
    </View>
  );
}

const JobItem = memo(({ jobData }: { jobData: Job }) => {
  const navigation = useNavigation<ScreenNavProps>();

  return (
    <TouchableOpacity
      style={styles.jobItemWrapper}
      onPress={() => navigation.navigate(ScreenName.JobDetail, { jobData })}
    >
      <Image source={{ uri: jobData.companyLogo }} style={styles.jobItemLogo} />
      <Text numberOfLines={1} style={styles.jobItemCompanyTitle}>
        {jobData.company}
      </Text>
      <Text numberOfLines={1} style={styles.jobItemTitle}>
        {jobData.jobTitle}
      </Text>
    </TouchableOpacity>
  );
});

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
      initialNumToRender={5}
      maxToRenderPerBatch={5}
      windowSize={5}
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
    borderWidth: 1,
    borderColor: "#eee",

    shadowColor: "#ccc",
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
