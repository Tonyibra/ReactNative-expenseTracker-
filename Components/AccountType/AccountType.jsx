import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

export const AccountType = ({ isSelected, ...props }) => {
  return (
    <TouchableOpacity
      style={isSelected ? [styles.container, styles.active] : styles.container}
      onPress={props.onPress}
      activeOpacity={0.7}
    >
      <Icon name="bank" size={24} style={styles.img} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#EEE5FF",
    borderRadius: 8,
    width: 80,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  active: {
    borderColor: "#7F3DFF",
    borderWidth: 1,
    borderRadius: 8,
  },
});
