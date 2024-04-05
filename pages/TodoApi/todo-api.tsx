import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, SafeAreaView, FlatList } from "react-native";
import { apiClient } from "../../services/api-client";
import { TotoItem } from "../../types/todo";
import TodoItem from "./todo-item";

const TODO_API_URL = "https://jsonplaceholder.typicode.com/todos";

export default function TodoApi() {
  const [todos, setTodos] = useState<TotoItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiClient().get(TODO_API_URL);

        if (response.status !== 200) {
          throw new Error("Failed to fetch data");
        }
        setTodos(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <SafeAreaView style={styles.mainView}>
      <View style={styles.sectionContainer}>
        <Text style={styles.heading}>Todo List</Text>
        <FlatList
          data={todos}
          renderItem={({ item }) => <TodoItem title={item.title} />}
          keyExtractor={(item) => item.title}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: "#efefef",
  },
  sectionContainer: {
    width: "100%",
    height: "100%",
    padding: 20,
  },
  heading: {
    color: "#559bd7",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
});
