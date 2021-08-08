import React from "react";
import { SafeAreaView } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import { PrimaryBtn } from "../../Components/Buttons/PrimaryBtn";

export const Setup = ({ navigation }) => {
  const addNewAccount = () => {
    navigation.navigate("newAccount");
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.Contentcontainer}>
        <Text style={styles.setupText}>Let’s setup your account!</Text>
        <Text style={styles.subTitle}>
          Account can be your bank, credit card or your wallet.
        </Text>
      </View>
      <View style={styles.btnWrapper}>
        <PrimaryBtn title="Let’s go" onPress={() => addNewAccount()} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  setupText: {
    marginTop: 70,
    fontSize: 39,
    lineHeight: 44,
    fontWeight: "500",
    color: "#212325",
  },
  subTitle: {
    maxWidth: "70%",
    marginTop: 40,
    fontSize: 14,
    lineHeight: 18,
    fontWeight: "500",
    color: "#292B2D",
  },
  container: {
    flex: 1,
    margin: 16,
  },
  Contentcontainer: {
    flex: 1,
  },
  btnWrapper: {
    alignItems: "center",
  },
});
