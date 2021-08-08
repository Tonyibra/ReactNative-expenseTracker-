import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const Addaccount = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.balance}>Balance</Text>
        <Text style={styles.currency}>$00.0</Text>
      </View>
      <View style={styles.bottomContainer}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.6,
    backgroundColor: "#7F3DFF",
    padding: 16,
  },
  balance: {
    color: "#FCFCFC",
    fontSize: 18,
    lineHeight: 22,
    fontWeight: "600",
    textAlign: "left",
  },
  currency: {
    color: "#FCFCFC",
    fontSize: 64,
    lineHeight: 77,
    fontWeight: "600",
  },
  topContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },
});
