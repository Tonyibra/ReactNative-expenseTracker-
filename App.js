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
import { Setup } from "./screens/Setup";
const Stack = createStackNavigator();
export default function App({ navigation }) {
  const nav = navigation;

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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
