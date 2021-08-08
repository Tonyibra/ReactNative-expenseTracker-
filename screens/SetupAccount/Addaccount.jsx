import React, { useState } from "react";
import { KeyboardAvoidingView } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-paper";
import BottomSheet from "reanimated-bottom-sheet";
import Animated from "react-native-reanimated";
export const Addaccount = () => {
  const renderContent = () => (
    <View
      style={{
        backgroundColor: "white",
        padding: 16,
        height: 450,
      }}
    >
      <View style={styles.panelHeader}>
        <Text style={styles.headerText}>Account Type </Text>
      </View>
    </View>
  );

  const sheetRef = React.useRef(null);
  let fall = new Animated.Value(1);
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
          <Text onPress={() => sheetRef.current.snapTo(0)}>CHOOSE</Text>
        </View>
      </KeyboardAvoidingView>

      <BottomSheet
        ref={sheetRef}
        snapPoints={[450, 300, 0]}
        borderRadius={10}
        renderContent={renderContent}
        callbackNode={fall}
        initialSnap={1}
        enabledGestureInteraction={true}
      />
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
});
