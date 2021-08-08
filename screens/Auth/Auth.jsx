import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-paper";
import { CheckBox } from "react-native-elements";
import { PrimaryBtn } from "../../Components/Buttons/PrimaryBtn";
import { GoogleBtn } from "../../Components/Buttons/GoogleBtn";
import { KeyboardAvoidingView } from "react-native";
import { auth, db } from "../../firebase.js";
export const Auth = ({ navigation }) => {
  const nav = navigation;

  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [policyChecked, setPolicyChecked] = React.useState(false);

  const loginHandler = () => {
    nav.navigate("authLogin");
  };
  const registerHandler = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        authUser.user.updateProfile({
          displayName: name,
        });
        db.collection("expensesDb").doc("users").set({
          username: name,
          email: email,
          verified: false,
          setupMode: true,
        });
        loginHandler();
        authUser.user.sendEmailVerification();
        console.log(authUser.user.emailVerified);
      })

      .catch((error) => {
        var error = error.code;
        var errorMessage = error.message;
      });
  };
  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Name"
          style={styles.input}
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <TextInput
          placeholder="Email"
          style={styles.input}
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          placeholder="Password"
          style={styles.input}
          value={password}
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <View style={styles.policy}>
        <CheckBox
          containerStyle={{
            backgroundColor: "#fff",
            border: "1px solid #fff",
            outline: "none",
          }}
          title="By signing up, you agree to the Terms of Service and Privacy Policy"
          checked={policyChecked}
          onPress={() => setPolicyChecked(!policyChecked)}
          style={styles.checkBox}
        />
      </View>
      <View style={styles.btnContainer}>
        <PrimaryBtn title="Sign Up" onPress={registerHandler} />
        <Text style={styles.moreText}>Or with</Text>
        <GoogleBtn title="Sign Up with Google" />
        <Text style={styles.loginText}>
          Already have an account?{" "}
          <Text style={styles.loginLink} onPress={() => loginHandler()}>
            Login
          </Text>
        </Text>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  inputContainer: {
    margin: 24,
    marginTop: 50,
  },
  input: {
    marginBottom: 10,
    backgroundColor: "#fff",
  },
  policy: {
    flexDirection: "row",
    backgroundColor: "#fff",
  },
  policyText: {
    fontSize: 14,
    lineHeight: 18,
    fontWeight: "500",
  },
  checkBox: {
    backgroundColor: "#fff",
  },
  btnContainer: {
    alignItems: "center",
    marginTop: 25,
  },
  moreText: {
    color: "#91919F",
    fontWeight: "700",
    fontSize: 14,
    lineHeight: 18,
  },
  loginText: {
    marginTop: 19,
    fontSize: 16,
    lineHeight: 19,
    fontWeight: "500",
    color: "#91919F",
  },
  loginLink: {
    color: "#7F3DFF",
    textDecorationLine: "underline",
  },
});
