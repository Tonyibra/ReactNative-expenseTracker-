import React, { useState } from "react";
import { KeyboardAvoidingView } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-paper";
import { AccountType } from "../../Components/AccountType/AccountType";
import { PrimaryBtn } from "../../Components/Buttons/PrimaryBtn";
import { SecondaryBtn } from "../../Components/Buttons/SecondaryBtn";
import { db, auth } from "../../firebase.js";
import { useAuthState } from "react-firebase-hooks/auth";
import firebase from "firebase";

export const Addaccount = ({ navigation }) => {
  const [isbank, setIsBank] = useState(false);
  const [isPaypal, setIsPaypal] = useState(false);
  const [isWallet, setIsWallet] = useState(false);
  const [walletType, setIsWalletType] = useState("");
  const [walletName, setWalletName] = useState("");
  const [cash, setCash] = useState("00.0");

  const [user, loading, error] = useAuthState(auth);
  const finishUpHandler = async () => {
    const Newuser = await db
      .collection("expensesDb")
      .doc(user.email)
      .collection("profile")
      .doc(user.uid)
      .set({
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        username: user.displayName,
        email: user.email,
        verified: user.emailVerified,
        setupMode: false,
        walletName,
        walletType,
        isbank,
        isPaypal,
        isWallet,
        cash: `$ ${cash}`,
        currency: "dollar",
      });
    navigation.replace("set");
  };
  const bankHandler = () => {
    setIsWallet(false);
    setIsPaypal(false);
    setIsBank(!isbank);
    setIsWalletType("Bank");
  };
  const paypalHandler = () => {
    setIsWallet(false);
    setIsPaypal(!isPaypal);
    setIsBank(false);
    setIsWalletType("Paypal");
  };
  const walletHandler = () => {
    setIsWallet(!isWallet);
    setIsPaypal(false);
    setIsBank(false);
    setIsWalletType("Wallet");
  };
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.balance}>Balance</Text>
        <Text style={styles.currency}>${cash}</Text>
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.bottomContainer}
      >
        <View style={styles.inputStyles}>
          <TextInput
            style={styles.input}
            placeholder="Wallet Name"
            value={walletName}
            onChangeText={(text) => setWalletName(text)}
          />
          <View style={styles.btnWrapper}>
            <SecondaryBtn title={walletType || "Account Type"} />
            <View style={styles.accountsList}>
              <AccountType
                AntDesign={true}
                name="bank"
                bank={isbank}
                onPress={() => bankHandler()}
                style={styles.type}
              />
              <AccountType
                FontAwesome={true}
                style={styles.type}
                name="paypal"
                paypal={isPaypal}
                onPress={() => paypalHandler()}
              />
              <AccountType
                AntDesign={true}
                style={styles.type}
                name="wallet"
                wallet={isWallet}
                onPress={() => walletHandler()}
              />
            </View>

            <Text style={styles.moreWalletText}>More wallets Soon !</Text>
          </View>
          <View style={styles.continue}>
            <PrimaryBtn
              title={"Continue"}
              onPress={() => finishUpHandler()}
              disabled={walletName === "" ? true : false}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  balance: {
    color: "rgba(252, 252, 252, .64)",
    fontSize: 18,
    lineHeight: 22,
    fontWeight: "600",
    textAlign: "left",
  },
  currency: {
    color: "#FCFCFC",
    fontSize: 64,
    lineHeight: 77,
    fontWeight: "600",
    paddingBottom: 20,
  },
  topContainer: {
    flex: 0.7,
    backgroundColor: "#7F3DFF",
    justifyContent: "flex-end",
    padding: 16,
  },
  bottomContainer: {
    flex: 0.55,
    backgroundColor: "#fff",
    borderRadius: 32,
    position: "relative",
    width: "100%",
    top: -20,
    marginTop: -10,
  },
  inputStyles: {
    marginVertical: 24,
    marginHorizontal: 16,
  },
  input: {
    backgroundColor: "#fff",
  },
  panelHeader: {
    flex: 1,
    alignItems: "center",
  },
  headerText: {
    fontSize: 36,
    lineHeight: 40,
    color: "#7F3DFF",
  },
  btnWrapper: {
    marginTop: 20,
    alignItems: "center",
    marginBottom: 15,
  },
  continue: {
    marginTop: 20,
    alignItems: "center",
  },
  accountsList: {
    flexDirection: "row",
    marginTop: 10,
    paddingHorizontal: 10,
    alignItems: "center",
  },
  moreWalletText: {
    color: "#212325",
    fontSize: 15,
  },
});
