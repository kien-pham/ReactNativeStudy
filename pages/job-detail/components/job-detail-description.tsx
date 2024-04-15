import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Job, JobTabsType } from "../../../types/job";

const tabsData = ["description", "company", "reviews"];

function JobTabs({
  activeTab,
  onChangeTab,
}: {
  activeTab: JobTabsType;
  onChangeTab: (tabId: JobTabsType) => void;
}) {
  const isActive = (tabId: string) => tabId === activeTab;

  return (
    <View style={styles.tabsContainer}>
      {tabsData.map((tab) => (
        <TouchableOpacity
          key={tab}
          onPress={() => onChangeTab(tab as JobTabsType)}
          style={[styles.tabItem, isActive(tab) ? styles.tabItemActive : null]}
        >
          <Text style={[styles.tabTitle]}>{tab}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

function JobTabDetail({
  tabId = JobTabsType.description,
  jobData,
}: {
  tabId: JobTabsType;
  jobData: Job;
}) {
  return (
    <View style={styles.tabContentWrapper}>
      <ScrollView>
        <Text style={styles.tabContentText}>
          {tabId === JobTabsType.description ? jobData.jobDescription : null}
          {tabId === JobTabsType.company ? jobData.companyInfo : null}
          {tabId === JobTabsType.reviews ? jobData.reviewInfo : null}
        </Text>
      </ScrollView>
    </View>
  );
}

export default function JobDetailDescription({ jobData }: { jobData: Job }) {
  const [activeTab, setActiveTab] = useState<JobTabsType>(
    JobTabsType.description
  );

  const handleChangeTab = (tabId: JobTabsType) => {
    setActiveTab(tabId);
  };

  return (
    <View>
      <JobTabs activeTab={activeTab} onChangeTab={handleChangeTab} />
      <JobTabDetail tabId={activeTab} jobData={jobData} />
    </View>
  );
}

const styles = StyleSheet.create({
  tabsContainer: {
    flexDirection: "row",
    marginLeft: 14,
    gap: 12,
  },
  tabTitle: {
    textTransform: "capitalize",
  },
  tabItem: {
    padding: 10,
    borderRadius: 8,
    borderBottomEndRadius: 0,
    borderBottomStartRadius: 0,
    borderWidth: 1,
    borderColor: "#eee",
  },
  tabItemActive: {
    backgroundColor: "#fff",
    borderBottomColor: "#fff",
  },
  tabContentWrapper: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: "#fff",
  },
  tabContentText: {
    lineHeight: 20,
  },
});
