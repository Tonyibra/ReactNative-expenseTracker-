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
    flex: 1,
  },
  balance: {
    color: "rgba(252, 252, 252, .64)",
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
    paddingBottom: 20,
  },
  topContainer: {
    flex: 0.7,
    backgroundColor: "#7F3DFF",
    justifyContent: "flex-end",
    padding: 16,
  },
  bottomContainer: {
    flex: 0.55,
    backgroundColor: "#fff",
    borderRadius: 32,
    position: "relative",
    width: "100%",
    top: -20,
    marginTop: -10,
  },
});
