import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const LoginContainer = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <Pressable
      style={[styles.loginWith, styles.loginLayout]}
      onPress={() => navigation.navigate("RegisterAdmin")}
    >
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
        <Text style={styles.orLoginWith}>Or Login with</Text>
        <View style={[styles.loginWithChild, styles.loginPosition]} />
        <View style={[styles.loginWithItem, styles.loginPosition]} />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  loginLayout: {
    width: 331,
    position: "absolute",
  },
  buttonIconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    bottom: "0%",
    top: "41.05%",
    width: "31.72%",
    height: "58.95%",
    position: "absolute",
  },
  loginPosition: {
    borderTopWidth: 1,
    borderColor: Color.colorSteelblue,
    borderStyle: "solid",
    bottom: "44.12%",
    top: "50%",
    height: "5.88%",
    position: "absolute",
  },
  googleButtonIcon: {
    right: "59.82%",
    left: "8.46%",
  },
  appleButtonIcon: {
    right: "7.55%",
    left: "60.73%",
    borderRadius: Border.br_5xs,
  },
  orLoginWith: {
    top: "0%",
    left: "37.46%",
    fontSize: FontSize.bodyMediumBold_size,
    fontWeight: "600",
    fontFamily: FontFamily.urbanist,
    color: Color.darkGray,
    textAlign: "left",
    position: "absolute",
  },
  loginWithChild: {
    width: "34.14%",
    right: "66.01%",
    left: "-0.15%",
  },
  loginWithItem: {
    width: "33.84%",
    right: "-0.15%",
    left: "66.31%",
  },
  loginWith1: {
    top: 0,
    left: 0,
    height: 17,
  },
  loginWith: {
    top: 572,
    left: 22,
    height: 95,
  },
});

export default LoginContainer;
