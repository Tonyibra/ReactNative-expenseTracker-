import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export const PrimaryBtn = ({ title, ...props }) => {
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
    backgroundColor: "#7F3DFF",
    width: "90%",

    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    padding: 8,
    borderRadius: 16,
    marginBottom: 16,
  },
  btnText: {
    color: "#FCFCFC",
    fontSize: 18,
    fontWeight: "600",
    lineHeight: 21,
  },
});
