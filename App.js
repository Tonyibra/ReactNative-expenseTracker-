import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Onboarding } from "./screens/Auth/Onboarding";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { Auth } from "./screens/Auth/Auth";
import { auth } from "./firebase.js";
import { AuthLogin } from "./screens/Auth/AuthLogin";
import { useAuthState } from "react-firebase-hooks/auth";
import { Setup } from "./screens/SetupAccount/Setup";
import { Addaccount } from "./screens/SetupAccount/Addaccount";
import { FinishSetup } from "./screens/SetupAccount/FinishSetup";
const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        options={{
          headerMode: "screen",
        }}
      >
        <Stack.Screen
          name="onboarding"
          component={Onboarding}
          options={{
            headerMode: "none",
          }}
        />
        <Stack.Screen
          name="auth"
          component={Auth}
          options={{
            headerTitle: "Sign Up",
            headerBackTitleVisible: false,
          }}
        />
        <Stack.Screen
          name="authLogin"
          component={AuthLogin}
          options={{
            headerTitle: "Login",
            headerBackTitleVisible: false,
          }}
        />
        <Stack.Screen
          name="setupAccount"
          component={Setup}
          options={{
            headerMode: "none",
          }}
        />
        <Stack.Screen
          name="newAccount"
          component={Addaccount}
          options={{
            headerTitle: "Add new account",
            headerBackTitleVisible: false,
            headerTintColor: "white",
            headerStyle: {
              backgroundColor: "#7F3DFF",
              shadowColor: "#7F3DFF",
            },
          }}
        />
        <Stack.Screen
          name="set"
          component={FinishSetup}
          options={{
            headerBackTitleVisible: false,
            headerTintColor: "white",
            headerMode: "none",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
