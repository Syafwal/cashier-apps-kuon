import * as React from "react";
import { StyleSheet, View, Text, ImageBackground } from "react-native";
import { Image } from "expo-image";
import HomeIndicator from "../components/HomeIndicator";
import Property1default from "../components/Property1default";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const LoginKaryawan = () => {
  return (
    <ImageBackground
      style={styles.loginKaryawanIcon}
      resizeMode="cover"
      source={require("../assets/3loginkaryawan.png")}
    >
      <HomeIndicator
        homeIndicatorPosition="absolute"
        homeIndicatorTop={778}
        homeIndicatorLeft={0}
        homeIndicatorWidth={375}
        homeIndicatorHeight={34}
        rectangleViewBackgroundColor="#000"
      />
      <View style={styles.frame}>
        <View style={styles.frame1}>
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
          <View style={styles.img} />
        </View>
        <View style={styles.frame2}>
          <View style={styles.frameParent}>
            <View style={styles.frame3}>
              <Image
                style={styles.nematodaHighResolutionLogoIcon}
                contentFit="cover"
                source={require("../assets/nematodahighresolutionlogotransparent-2-1.png")}
              />
              <Text style={styles.collaboratedWith}>Collaborated With :</Text>
            </View>
            <View style={styles.frame4}>
              <Image
                style={styles.frameChild}
                contentFit="cover"
                source={require("../assets/ellipse-2.png")}
              />
              <Image
                style={styles.logoKuon1}
                contentFit="cover"
                source={require("../assets/logo-kuon-11.png")}
              />
            </View>
          </View>
          <View style={styles.frame5}>
            <View style={styles.loginButton}>
              <Text style={styles.loginWithBarcode}>Login With Barcode</Text>
            </View>
            <View style={styles.registerButton}>
              <Text style={styles.registerBarcode}>Register Barcode</Text>
            </View>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  img: {
    width: 375,
    height: 812,
    marginRight: 22,
    marginTop: -2,
  },
  frame1: {
    width: 397,
    height: 854,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  nematodaHighResolutionLogoIcon: {
    width: 128,
    height: 128,
    marginRight: 22,
  },
  collaboratedWith: {
    position: "relative",
    fontSize: FontSize.headingH4_size,
    fontFamily: FontFamily.abhayaLibre,
    color: Color.white,
    textAlign: "center",
    width: 198,
    height: 17,
    marginTop: 11,
  },
  frame3: {
    width: 198,
    height: 156,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  frameChild: {
    position: "relative",
    width: 88,
    height: 86,
  },
  logoKuon1: {
    position: "relative",
    width: 57,
    height: 63,
    marginTop: -77,
  },
  frame4: {
    width: 88,
    height: 86,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
    marginRight: 20,
    marginTop: 20,
  },
  frameParent: {
    width: 198,
    height: 263,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    marginLeft: 7,
  },
  loginWithBarcode: {
    position: "relative",
    fontSize: FontSize.bodyLargeSemibold_size,
    letterSpacing: 0,
    lineHeight: 24,
    fontWeight: "700",
    fontFamily: FontFamily.bodyLargeSemibold,
    color: Color.white,
    textAlign: "center",
  },
  loginButton: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorSteelblue,
    width: 331,
    height: 56,
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "center",
    paddingHorizontal: 92,
    paddingVertical: 0,
  },
  registerBarcode: {
    position: "relative",
    fontSize: 15,
    fontWeight: "700",
    fontFamily: FontFamily.urbanist,
    color: Color.dark,
    textAlign: "center",
  },
  registerButton: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.white,
    borderStyle: "solid",
    borderColor: Color.dark,
    borderWidth: 1,
    width: 331,
    height: 56,
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "center",
    paddingHorizontal: 107,
    paddingVertical: 0,
    marginTop: 15,
  },
  frame5: {
    borderRadius: Border.br_6xl,
    backgroundColor: Color.colorGray_300,
    width: 375,
    height: 330,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-end",
    paddingHorizontal: 22,
    paddingTop: 93,
    paddingBottom: 110,
    marginTop: 92,
  },
  frame2: {
    width: 375,
    height: 685,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: -711,
  },
  frame: {
    position: "absolute",
    top: 0,
    left: -11,
    width: 397,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  loginKaryawanIcon: {
    position: "relative",
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default LoginKaryawan;
