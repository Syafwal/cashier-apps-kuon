import * as React from "react";
import {
  Text,
  StyleSheet,
  View,
  ImageBackground,
  Pressable,
} from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import Container1 from "../components/Container1";
import Container from "../components/Container";
import HomeIndicator from "../components/HomeIndicator";
import Property1default from "../components/Property1default";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const RegisterAdmin = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <Pressable
      style={styles.registerAdmin}
      onPress={() => navigation.navigate("TampilanHomeAdmin")}
    >
      <ImageBackground
        style={[styles.contentIcon, styles.topBarPosition]}
        resizeMode="cover"
        source={require("../assets/bg-cafe-awal1.png")}
      >
        <Text style={[styles.tittle, styles.logInTypo]}>{`Selamat Datang di Neon
Buatlah Akun Anda`}</Text>
        <View style={styles.input} />
        <Container1 />
        <Text style={[styles.signUp, styles.tittlePosition]}>
          <Text
            style={styles.alreadyHaveAn}
          >{`Already have an account? `}</Text>
          <Text style={[styles.logIn, styles.logInTypo]}>Log In</Text>
        </Text>
        <Container />
      </ImageBackground>
      <HomeIndicator
        homeIndicatorPosition="absolute"
        homeIndicatorTop={778}
        homeIndicatorLeft={0}
        homeIndicatorWidth={375}
        homeIndicatorHeight={34}
        rectangleViewBackgroundColor="#000"
      />
      <View style={styles.topBarPosition}>
        <Property1default
          mobileSignal={require("../assets/mobile-signal1.png")}
          wifi={require("../assets/wifi1.png")}
          battery={require("../assets/battery1.png")}
          property1defaultPosition="relative"
          property1defaultTop="unset"
          property1defaultLeft="unset"
          property1defaultWidth={375}
          textColor="#000"
        />
        <Image
          style={styles.appbarIcon}
          contentFit="cover"
          source={require("../assets/appbar.png")}
        />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  topBarPosition: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  logInTypo: {
    fontWeight: "700",
    fontFamily: FontFamily.bodyLargeSemibold,
  },
  tittlePosition: {
    letterSpacing: 0,
    position: "absolute",
  },
  tittle: {
    top: 122,
    fontSize: FontSize.headingH4_size,
    lineHeight: 31,
    color: Color.greyscale900,
    textAlign: "left",
    fontFamily: FontFamily.bodyLargeSemibold,
    letterSpacing: 0,
    position: "absolute",
    left: 24,
  },
  input: {
    top: 216,
    left: 24,
    position: "absolute",
  },
  alreadyHaveAn: {
    color: Color.greyscale500,
    fontFamily: FontFamily.bodyLargeSemibold,
  },
  logIn: {
    color: Color.colorSteelblue,
    fontFamily: FontFamily.bodyLargeSemibold,
  },
  signUp: {
    top: 761,
    left: 68,
    fontSize: FontSize.bodyLargeSemibold_size,
    lineHeight: 24,
    textAlign: "center",
  },
  contentIcon: {
    width: 375,
    height: 812,
  },
  appbarIcon: {
    height: 56,
    width: 375,
    overflow: "hidden",
  },
  registerAdmin: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 812,
  },
});

export default RegisterAdmin;
