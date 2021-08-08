import React, { useRef } from "react";
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
import { auth, db } from "../../firebase.js";
import { useDocumentOnce } from "react-firebase-hooks/firestore";

const { width, height } = Dimensions.get("window");

export const Onboarding = ({ navigation }) => {
  const mountedRef = useRef(true);
  const [user, loading, error] = useAuthState(auth);
  const [snapshot] = useDocumentOnce(
    db
      .collection("expensesDb")
      .doc(user?.email)
      .collection("profile")
      .doc(user?.uid)
  );
  React.useEffect(() => {
    if (snapshot?.data()) {
      if (snapshot.data().setupMode === true) {
        navigation.replace("setupAccount");
      } else if (snapshot.data().setupMode === false) {
        navigation.replace("home");
      }
    }
  }, [snapshot]);
  // React.useEffect(() => {
  //   if (user) {
  //     navigation.replace("setupAccount");
  //   }
  // }, [user]);

  const signUpHandler = () => {
    navigation.navigate("auth");
  };
  const loginHandler = () => {
    navigation.navigate("authLogin");
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
