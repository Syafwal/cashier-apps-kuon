import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const Container = () => {
  return (
    <View style={[styles.loginWith, styles.loginLayout]}>
      <Image
        style={[styles.googleButtonIcon, styles.buttonIconLayout]}
        contentFit="cover"
        source={require("../assets/google-button.png")}
      />
      <Image
        style={[styles.appleButtonIcon, styles.buttonIconLayout]}
        contentFit="cover"
        source={require("../assets/apple-button.png")}
      />
      <View style={[styles.loginWith1, styles.loginLayout]}>
        <Text style={styles.orRegisterWith}>Or Register with</Text>
        <View style={[styles.loginWithChild, styles.loginBorder]} />
        <View style={[styles.loginWithItem, styles.loginBorder]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  loginLayout: {
    width: 343,
    position: "absolute",
  },
  buttonIconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    bottom: "0%",
    top: "41.05%",
    width: "30.61%",
    height: "58.95%",
    position: "absolute",
  },
  loginBorder: {
    borderTopWidth: 1,
    borderColor: Color.colorSteelblue,
    borderStyle: "solid",
    height: "5.88%",
    position: "absolute",
  },
  googleButtonIcon: {
    right: "59.48%",
    left: "9.91%",
  },
  appleButtonIcon: {
    right: "9.04%",
    left: "60.35%",
    borderRadius: Border.br_5xs,
  },
  orRegisterWith: {
    top: "0%",
    left: "35.28%",
    fontSize: FontSize.bodyMediumBold_size,
    fontWeight: "600",
    fontFamily: FontFamily.urbanist,
    color: Color.darkGray,
    textAlign: "left",
    position: "absolute",
  },
  loginWithChild: {
    width: "32.94%",
    top: "50%",
    right: "67.2%",
    bottom: "44.12%",
    left: "-0.15%",
  },
  loginWithItem: {
    width: "32.65%",
    top: "55.88%",
    right: "-0.15%",
    bottom: "38.24%",
    left: "67.49%",
  },
  loginWith1: {
    top: 0,
    left: 0,
    height: 17,
  },
  loginWith: {
    top: 567,
    left: 20,
    height: 95,
  },
});

export default Container;
