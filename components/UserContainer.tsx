import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const UserContainer = () => {
  return (
    <View style={styles.rectangleParent}>
      <View style={[styles.componentChild, styles.componentLayout]} />
      <Text style={[styles.username, styles.usernameTypo]}>Username</Text>
      <View style={[styles.componentItem, styles.componentLayout]} />
      <Text style={[styles.password, styles.usernameTypo]}>Password</Text>
      <View style={[styles.componentInner, styles.rectangleViewPosition]} />
      <Text style={[styles.login, styles.backTypo]}>Login</Text>
      <View style={[styles.rectangleView, styles.rectangleViewPosition]} />
      <Text style={[styles.back, styles.backTypo]}>Back</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  componentLayout: {
    backgroundColor: Color.colorSteelblue,
    borderRadius: Border.br_6xl,
    left: "0%",
    right: "0%",
    width: "100%",
    height: "23.37%",
    position: "absolute",
  },
  usernameTypo: {
    textAlign: "center",
    color: Color.white,
    fontFamily: FontFamily.bodyLargeSemibold,
    fontWeight: "700",
    lineHeight: 27,
    letterSpacing: 0,
    fontSize: FontSize.size_lg,
    left: "4.83%",
    position: "absolute",
  },
  rectangleViewPosition: {
    bottom: "0%",
    top: "82.22%",
    width: "35.95%",
    height: "17.78%",
    backgroundColor: Color.colorSteelblue,
    borderRadius: Border.br_6xl,
    position: "absolute",
  },
  backTypo: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    top: "85.56%",
    width: "34.14%",
    height: "10.43%",
    textAlign: "center",
    color: Color.white,
    fontFamily: FontFamily.bodyLargeSemibold,
    fontWeight: "700",
    lineHeight: 27,
    letterSpacing: 0,
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  componentChild: {
    top: "0%",
    bottom: "76.63%",
  },
  username: {
    top: "5.84%",
  },
  componentItem: {
    top: "37.56%",
    bottom: "39.07%",
  },
  password: {
    top: "43.41%",
  },
  componentInner: {
    right: "12.69%",
    left: "51.36%",
  },
  login: {
    left: "52.27%",
  },
  rectangleView: {
    right: "56.19%",
    left: "7.85%",
  },
  back: {
    left: "8.76%",
  },
  rectangleParent: {
    top: 260,
    left: 23,
    width: 331,
    height: 240,
    position: "absolute",
  },
});

export default UserContainer;
