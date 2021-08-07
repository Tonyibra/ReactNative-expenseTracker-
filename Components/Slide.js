import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  Image,
} from "react-native";
import { PrimaryBtn } from "./Buttons/PrimaryBtn";
import { SecondaryBtn } from "./Buttons/SecondaryBtn";
const { width, height } = Dimensions.get("window");

export const Slide = ({ label, desc, img }) => {
  return (
    <View style={styles.slideContainer}>
      <View style={styles.container}>
        <Image styles={styles.image} source={img} />
        <View style={styles.textContainer}>
          <Text style={styles.headerText}>{label}</Text>
        </View>
        <View style={styles.descContainer}>
          <Text style={styles.descText}>{desc}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: 312,
    height: 312,
  },

  textContainer: {
    maxWidth: 280,
  },
  descContainer: {
    maxWidth: 272,
  },
  headerText: {
    color: "#212325",
    fontSize: 32,
    lineHeight: 39,
    textAlign: "center",
    fontWeight: "700",
  },
  descText: {
    color: "#91919F",
    fontSize: 16,
    lineHeight: 19,
    fontWeight: "500",
    textAlign: "center",
    marginTop: 17,
  },
});
