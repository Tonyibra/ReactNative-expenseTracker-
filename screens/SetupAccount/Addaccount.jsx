import React, { useState } from "react";
import { KeyboardAvoidingView } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-paper";
import { AccountType } from "../../Components/AccountType/AccountType";
import { PrimaryBtn } from "../../Components/Buttons/PrimaryBtn";
import { SecondaryBtn } from "../../Components/Buttons/SecondaryBtn";
export const Addaccount = () => {
  const [isSelected, setIsSelected] = useState(false);

  const [walletName, setWalletName] = useState("");
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.balance}>Balance</Text>
        <Text style={styles.currency}>$00.0</Text>
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
            <SecondaryBtn title="Account Type" />
            <View style={styles.accountsList}>
              <AccountType
                isSelected={isSelected}
                onPress={() => setIsSelected(!isSelected)}
              />
            </View>
          </View>
          <View style={styles.continue}>
            <PrimaryBtn title="Continue" />
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
    marginBottom: 35,
  },
  continue: {
    marginTop: 20,
    alignItems: "center",
  },
  accountsList: {
    marginTop: 10,
    paddingHorizontal: 10,
    width: "90%",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
});
