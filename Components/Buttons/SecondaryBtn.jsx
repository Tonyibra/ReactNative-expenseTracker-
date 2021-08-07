import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export const SecondaryBtn = ({ title, ...props }) => {
  return (
    <TouchableOpacity
      style={styles.primaryBtn}
      onPress={props.onPress}
      activeOpacity={0.7}
    >
      <Text style={styles.btnText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  primaryBtn: {
    height: 56,
    backgroundColor: "#EEE5FF",
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    padding: 8,
    borderRadius: 16,
  },
  btnText: {
    color: "#7F3DFF",
    fontSize: 18,
    fontWeight: "600",
    lineHeight: 21,
  },
});
