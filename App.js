import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Onboarding } from "./screens/Auth/Onboarding";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { Auth } from "./screens/Auth/Auth";

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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
