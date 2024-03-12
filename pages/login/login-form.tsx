import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function LoginForm() {
  return (
    <View style={styles.sectionContainer}>
      <View style={styles.loginContainer}>
        <Text style={styles.textTitle}>Đăng nhập</Text>
        <TextInput style={styles.inputField}>Username</TextInput>
        <TextInput style={styles.inputField}>Password</TextInput>
        <TouchableOpacity style={styles.submitButton}>
          <Text style={styles.textBtn}>Đăng nhập</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    backgroundColor: "#3498db",
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  loginContainer: {
    width: "70%",
    padding: 30,
    borderRadius: 18,
    backgroundColor: "#d9ebf8",
    display: "flex",
    flexDirection: "column",
  },
  textTitle: {
    fontSize: 20,
    fontWeight: "400",
    color: "#000",
  },
  inputField: {
    padding: 10,
    fontSize: 15,
    fontWeight: "400",
    backgroundColor: "#fff",
    marginTop: 15,
    borderRadius: 5,
  },
  submitButton: {
    backgroundColor: "#2196f3",
    padding: 10,
    marginTop: 15,
    borderRadius: 5,
  },
  textBtn: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "500",
    textAlign: "center",
  },
});
