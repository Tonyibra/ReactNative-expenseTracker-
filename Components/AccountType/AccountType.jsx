import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

export const AccountType = ({ bank, paypal, wallet, name, ...props }) => {
  return (
    <TouchableOpacity
      style={
        bank || paypal || wallet
          ? [styles.container, styles.active]
          : styles.container
      }
      onPress={props.onPress}
      activeOpacity={0.7}
    >
      {props.AntDesign && <Icon name={name} size={24} style={styles.img} />}
      {props.FontAwesome && (
        <FontAwesomeIcon name={name} size={24} style={styles.img} />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 8,
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
