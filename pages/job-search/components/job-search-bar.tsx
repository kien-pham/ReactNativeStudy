import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { JobSearchFilter } from "../../../types/job";

const searchIcon = require("./../../../assets/searchIcon.png");
const searchFilters: JobSearchFilter[] = [
  {
    label: "Full-time",
    isActive: true,
  },
  {
    label: "Part-time",
    isActive: false,
  },
  {
    label: "Remote",
    isActive: false,
  },
];

function WelcomeHeading({ userName }: { userName: string }) {
  return (
    <View style={styles.headingWrapper}>
      <Text style={styles.headingTitle}>Hello {userName}</Text>
      <Text style={styles.headingSubTitle}>Find your perfect job</Text>
    </View>
  );
}

function SearchForm() {
  return (
    <View style={styles.searchFormWrapper}>
      <TextInput
        style={styles.searchFormInput}
        placeholder="What are you looking for?"
      />
      <TouchableOpacity style={styles.searchButton}>
        <Image style={styles.searchButtonIcon} source={searchIcon} />
      </TouchableOpacity>
    </View>
  );
}

function FilterItem({
  filterItem,
  onFilterClick,
}: {
  filterItem: JobSearchFilter;
  onFilterClick: (filterLabel: JobSearchFilter["label"]) => void;
}) {
  return (
    <TouchableOpacity
      onPress={() => onFilterClick(filterItem.label)}
      style={[
        styles.searchFilterItem,
        filterItem.isActive
          ? styles.searchFilterItemActive
          : styles.searchFilterItem,
      ]}
    >
      <Text
        style={[
          styles.searchFilterItemLabel,
          filterItem.isActive
            ? styles.searchFilterItemLabelActive
            : styles.searchFilterItemLabel,
        ]}
      >
        {filterItem.label}
      </Text>
    </TouchableOpacity>
  );
}

function SearchFilter() {
  const [activeFilter, setActiveFilter] =
    useState<JobSearchFilter["label"]>("Full-time");

  const handleFilterClick = (filterLabel: JobSearchFilter["label"]) => {
    setActiveFilter(filterLabel);
  };

  const searchFiltersWithActiveState = searchFilters.map((filter) => ({
    ...filter,
    isActive: filter.label === activeFilter,
  }));

  return (
    <View style={styles.searchFilterWrapper}>
      {searchFiltersWithActiveState.map((filter) => (
        <FilterItem
          key={filter.label}
          filterItem={filter}
          onFilterClick={handleFilterClick}
        />
      ))}
    </View>
  );
}

export default function JobSearchBar() {
  return (
    <View>
      <WelcomeHeading userName="Kien" />
      <View>
        <SearchForm />
        <SearchFilter />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingWrapper: {
    marginBottom: 16,
    marginTop: 16,
  },
  headingTitle: {
    fontSize: 16,
    fontWeight: "400",
    color: "#333",
    marginBottom: 4,
  },
  headingSubTitle: {
    fontSize: 20,
    fontWeight: "600",
  },
  searchFormWrapper: {
    flexDirection: "row",
  },
  searchFormInput: {
    flex: 1,
    padding: 12,
    backgroundColor: "#efefef",
    borderRadius: 12,
  },
  searchButton: {
    padding: 8,
    backgroundColor: "tomato",
    borderRadius: 12,
    marginLeft: 8,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  searchButtonIcon: {
    width: 24,
    height: 24,
  },
  searchFilterWrapper: {
    flexDirection: "row",
    marginTop: 16,
  },
  searchFilterItem: {
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    marginRight: 8,
  },
  searchFilterItemActive: {
    borderColor: "#999",
  },
  searchFilterItemLabel: {
    padding: 8,
    borderRadius: 12,
    marginRight: 8,
    width: "100%",
    textAlign: "center",
    color: "#999",
  },
  searchFilterItemLabelActive: {
    color: "#333",
  },
});
