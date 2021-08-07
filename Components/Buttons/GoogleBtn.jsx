import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

export const GoogleBtn = ({ title, ...props }) => {
  return (
    <TouchableOpacity
      style={styles.primaryBtn}
      onPress={props.onPress}
      activeOpacity={0.7}
    >
      <Image
        height={20}
        width={20}
        style={styles.img}
        source={{
          uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1024px-Google_%22G%22_Logo.svg.png",
        }}
      />
      <Text style={styles.btnText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  primaryBtn: {
    flexDirection: "row",
    height: 56,
    backgroundColor: "#fff",
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    padding: 8,
    borderRadius: 16,
    marginBottom: 16,
    marginTop: 12,
    borderColor: "#F1F1FA",
    borderWidth: 1,
  },
  btnText: {
    color: "#212325",
    fontSize: 18,
    fontWeight: "600",
    lineHeight: 21,
    paddingLeft: 10,
  },
  img: {
    width: 28,
    height: 28,
  },
});
