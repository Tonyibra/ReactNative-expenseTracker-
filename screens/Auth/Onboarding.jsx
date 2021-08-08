import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { Slide } from "../../Components/Slide";
import { PrimaryBtn } from "../../Components/Buttons/PrimaryBtn";
import { SecondaryBtn } from "../../Components/Buttons/SecondaryBtn";
import { slideData } from "../../Slide.js";
import { Pages } from "react-native-pages";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase.js";
const { width, height } = Dimensions.get("window");

export const Onboarding = ({ navigation }) => {
  const [user, loading, error] = useAuthState(auth);

  const nav = navigation;

  if (user) {
    nav.replace("setupAccount");
  }

  const signUpHandler = () => {
    nav.navigate("auth");
  };
  const loginHandler = () => {
    nav.navigate("authLogin");
  };
  return (
    <SafeAreaView style={styles.slider}>
      <Pages
        horizontal
        indicatorPosition="top"
        indicatorColor="#7F3DFF"
        indicatorOpacity={0.2}
      >
        {slideData?.map(({ label, desc, img }, index) => (
          <View key={index} style={styles.slide}>
            <Slide label={label} desc={desc} img={img} />
          </View>
        ))}
      </Pages>

      <View style={styles.pagination}></View>
      <View style={styles.btnsContainer}>
        <PrimaryBtn title="Sign Up" onPress={() => signUpHandler()} />
        <SecondaryBtn title="Login" onPress={() => loginHandler()} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  slider: {
    flex: 1,
    backgroundColor: "#fff",
  },
  slide: {
    flex: 1,
    marginTop: 32,
    width: width,
    height: height,
    alignItems: "center",
  },
  btnsContainer: {
    alignItems: "center",
  },
  pagination: {
    alignItems: "center",
  },
});
