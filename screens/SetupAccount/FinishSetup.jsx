import React, { useEffect } from "react";
import { StyleSheet, Text, View, Image, SafeAreaView } from "react-native";
import Success from "../../assets/success.png";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../firebase.js";
export const FinishSetup = () => {
  const [user, loading, error] = useAuthState(auth);

  // useEffect(() => {}, []);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image source={Success} />
      </View>
      <View>
        <Text style={styles.text}>You are set!</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  text: {
    textAlign: "center",
    color: "#212325",
    fontSize: 24,
    lineHeight: 29,
    marginTop: 16,
    textAlign: "center",
  },
});
