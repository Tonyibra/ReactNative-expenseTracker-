import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const Paginator = ({ data }) => {
  return (
    <View style={styles.container}>
      {data?.map((_, i) => (
        <View style={styles.dots} key={i.toString()}></View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 64,
  },
  dots: {
    width: 16,
    height: 16,
    backgroundColor: "#7F3DFF",
    marginHorizontal: 8,
    borderRadius: 999,
  },
});
