import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, View, Text } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const TampilanAwal = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={[styles.tampilanAwal, styles.awalLayout]}>
      <Pressable
        style={[styles.bgCafeAwal, styles.topBarPosition]}
        onPress={() => navigation.navigate("Portal")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/bg-cafe-awal1.png")}
        />
      </Pressable>
      <View style={[styles.homeIndicator, styles.topBarLayout]}>
        <View style={styles.homeIndicatorChild} />
      </View>
      <View style={[styles.topBar, styles.topBarPosition]}>
        <Text style={[styles.text, styles.textPosition]}>9:41</Text>
        <Image
          style={styles.mobileSignalIcon}
          contentFit="cover"
          source={require("../assets/mobile-signal1.png")}
        />
        <Image
          style={styles.unionIcon}
          contentFit="cover"
          source={require("../assets/wifi1.png")}
        />
        <Image
          style={[styles.batteryIcon, styles.textPosition]}
          contentFit="cover"
          source={require("../assets/battery1.png")}
        />
      </View>
      <View style={[styles.ellipseParent, styles.ellipseParentLayout]}>
        <Image
          style={styles.frameChild}
          contentFit="cover"
          source={require("../assets/ellipse-21.png")}
        />
        <Image
          style={styles.logoKuon1}
          contentFit="cover"
          source={require("../assets/logo-kuon-12.png")}
        />
        <Text style={[styles.collaboratedWith, styles.ellipseParentLayout]}>
          Collaborated With :
        </Text>
        <Image
          style={[styles.nematodaHighResolutionLogoIcon, styles.topBarPosition]}
          contentFit="cover"
          source={require("../assets/nematodahighresolutionlogotransparent-2-1.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  awalLayout: {
    height: 812,
    width: 375,
  },
  topBarPosition: {
    top: 0,
    position: "absolute",
  },
  topBarLayout: {
    width: 375,
    left: 0,
  },
  textPosition: {
    top: "50%",
    position: "absolute",
  },
  ellipseParentLayout: {
    width: 198,
    position: "absolute",
  },
  icon: {
    width: "100%",
    height: "100%",
  },
  bgCafeAwal: {
    left: 0,
    height: 812,
    width: 375,
  },
  homeIndicatorChild: {
    marginLeft: -66.5,
    bottom: 9,
    left: "50%",
    borderRadius: Border.br_81xl,
    backgroundColor: Color.primary400,
    width: 134,
    height: 5,
    position: "absolute",
  },
  homeIndicator: {
    top: 778,
    height: 34,
    left: 0,
    position: "absolute",
  },
  text: {
    marginTop: -11,
    left: 23,
    fontSize: FontSize.bodyLargeSemibold_size,
    letterSpacing: 0,
    lineHeight: 22,
    fontWeight: "600",
    fontFamily: FontFamily.bodyLargeSemibold1,
    color: Color.primary400,
    textAlign: "left",
  },
  mobileSignalIcon: {
    width: 18,
    height: 10,
  },
  unionIcon: {
    width: 15,
    height: 11,
  },
  batteryIcon: {
    marginTop: -4,
    right: 23,
    width: 27,
    height: 13,
  },
  topBar: {
    height: 44,
    left: 0,
    width: 375,
  },
  frameChild: {
    top: 177,
    left: 45,
    width: 88,
    height: 86,
    position: "absolute",
  },
  logoKuon1: {
    top: 186,
    left: 60,
    width: 57,
    height: 63,
    position: "absolute",
  },
  collaboratedWith: {
    top: 139,
    fontSize: FontSize.headingH4_size,
    fontFamily: FontFamily.abhayaLibre,
    color: Color.white,
    textAlign: "center",
    height: 17,
    left: 0,
  },
  nematodaHighResolutionLogoIcon: {
    left: 24,
    width: 128,
    height: 128,
  },
  ellipseParent: {
    top: 270,
    left: 104,
    height: 263,
  },
  tampilanAwal: {
    backgroundColor: Color.colorSteelblue,
    overflow: "hidden",
  },
});

export default TampilanAwal;
