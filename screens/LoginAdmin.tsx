import * as React from "react";
import { StyleSheet, View, Text, ImageBackground } from "react-native";
import { Image } from "expo-image";
import UserContainer from "../components/UserContainer";
import Property1default from "../components/Property1default";
import HomeIndicator from "../components/HomeIndicator";
import LoginContainer from "../components/LoginContainer";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const LoginAdmin = () => {
  return (
    <ImageBackground
      style={styles.loginAdminIcon}
      resizeMode="cover"
      source={require("../assets/3loginadmin.png")}
    >
      <View style={styles.img} />
      <UserContainer />
      <Property1default
        mobileSignal={require("../assets/mobile-signal1.png")}
        wifi={require("../assets/wifi1.png")}
        battery={require("../assets/battery1.png")}
        property1defaultPosition="absolute"
        property1defaultTop={0}
        property1defaultLeft={0}
        property1defaultWidth={375}
        textColor="#000"
      />
      <HomeIndicator
        homeIndicatorPosition="absolute"
        homeIndicatorTop={778}
        homeIndicatorLeft={0}
        homeIndicatorWidth={375}
        homeIndicatorHeight={34}
        rectangleViewBackgroundColor="#000"
      />
      <Text style={[styles.tittle, styles.tittleTypo]}>{`Selamat datang silahkan
Login terlebih dahulu`}</Text>
      <Text style={[styles.signUp, styles.tittlePosition]}>
        <Text style={styles.dontHaveAn}>{`Don’t have an account? `}</Text>
        <Text style={[styles.signUp1, styles.tittleTypo]}>Sign Up</Text>
      </Text>
      <LoginContainer />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  tittleTypo: {
    fontWeight: "700",
    fontFamily: FontFamily.bodyLargeSemibold,
  },
  tittlePosition: {
    letterSpacing: 0,
    position: "absolute",
  },
  img: {
    top: 42,
    left: -11,
    width: 375,
    position: "absolute",
    height: 812,
  },
  tittle: {
    top: 133,
    left: 32,
    fontSize: FontSize.headingH4_size,
    lineHeight: 31,
    color: Color.greyscale900,
    textAlign: "left",
    width: 287,
    fontFamily: FontFamily.bodyLargeSemibold,
    letterSpacing: 0,
    position: "absolute",
  },
  dontHaveAn: {
    color: Color.greyscale500,
    fontFamily: FontFamily.bodyLargeSemibold,
  },
  signUp1: {
    color: Color.colorSteelblue,
    fontFamily: FontFamily.bodyLargeSemibold,
  },
  signUp: {
    top: 761,
    left: 71,
    fontSize: FontSize.bodyLargeSemibold_size,
    lineHeight: 24,
    textAlign: "center",
  },
  loginAdminIcon: {
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 812,
  },
});

export default LoginAdmin;
