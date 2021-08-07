import React from "react";
import { KeyboardAvoidingView } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-paper";
import { PrimaryBtn } from "../../Components/Buttons/PrimaryBtn";

export const AuthLogin = ({ navigation }) => {
  const nav = navigation;
  const registerHandler = () => {
    nav.navigate("auth");
  };
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView style={styles.inputContainer}>
        <TextInput
          placeholder="Name"
          style={styles.input}
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          placeholder="password"
          style={styles.input}
          value={password}
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
        />
        <View style={styles.btnContainer}>
          <PrimaryBtn title="Login" />
        </View>
        <View style={styles.textWrapper}>
          <Text style={styles.forgetPassword}>Forgot Password?</Text>

          <Text style={styles.loginText}>
            Already have an account?{" "}
            <Text style={styles.loginLink} onPress={() => registerHandler()}>
              Sign Up
            </Text>
          </Text>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  inputContainer: {
    flex: 1,
    margin: 24,
    marginTop: 50,
  },
  input: {
    marginBottom: 24,
    backgroundColor: "#fff",
  },
  btnContainer: {
    marginTop: 20,
    alignItems: "center",
    marginBottom: 33,
  },
  textWrapper: {
    alignItems: "center",
  },
  forgetPassword: {
    color: "#7F3DFF",
    fontSize: 18,
    lineHeight: 22,
    fontWeight: "600",
    marginBottom: 38,
  },
  loginText: {
    color: "#91919F",
    fontSize: 16,
    lineHeight: 20,
    fontWeight: "500",
  },
  loginLink: {
    color: "#7F3DFF",
    fontWeight: "500",
  },
});
