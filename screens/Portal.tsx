import * as React from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  ImageBackground,
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import HomeIndicator from "../components/HomeIndicator";
import Property1default from "../components/Property1default";
import { Border, FontFamily, FontSize, Color, Padding } from "../GlobalStyles";

const Portal = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <ImageBackground
      style={styles.portalIcon}
      resizeMode="cover"
      source={require("../assets/3loginkaryawan.png")}
    >
      <Image
        style={styles.rectangleIcon}
        contentFit="cover"
        source={require("../assets/rectangle.png")}
      />
      <View style={[styles.portalChild, styles.portalLayout]} />
      <View style={styles.content}>
        <View style={[styles.text, styles.textFlexBox]} />
        <Pressable
          style={[styles.button, styles.adminFlexBox]}
          onPress={() => navigation.navigate("LoginKaryawan")}
        >
          <Text style={[styles.karyawan, styles.bodyTypo]}>Karyawan</Text>
        </Pressable>
        <View style={[styles.contentChild, styles.textFlexBox]} />
        <Text style={styles.skip}>Skip</Text>
        <Image
          style={styles.contentItem}
          contentFit="cover"
          source={require("../assets/group-18298.png")}
        />
      </View>
      <View style={[styles.portalItem, styles.portalLayout]} />
      <Text style={[styles.tittle, styles.tittleTypo]}>Login Sebagai</Text>
      <View style={[styles.text1, styles.textFlexBox]}>
        <Text style={[styles.tittle1, styles.tittleTypo]}>
          Neon Cashier App
        </Text>
        <Text style={[styles.body, styles.bodyTypo]}>
          Neon aplikasi Kasir simple dan mudah digunakan !
        </Text>
      </View>
      <HomeIndicator
        homeIndicatorPosition="absolute"
        homeIndicatorTop={778}
        homeIndicatorLeft={0}
        homeIndicatorWidth={375}
        homeIndicatorHeight={34}
        rectangleViewBackgroundColor="#000"
      />
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
      <Pressable
        style={styles.portalInner}
        onPress={() => navigation.navigate("LoginAdmin")}
      />
      <Text style={[styles.admin, styles.bodyTypo]}>Admin</Text>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  portalLayout: {
    width: 375,
    borderRadius: Border.br_6xl,
    position: "absolute",
  },
  textFlexBox: {
    alignItems: "center",
    position: "absolute",
  },
  adminFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  bodyTypo: {
    textAlign: "center",
    fontFamily: FontFamily.bodyLargeSemibold,
    lineHeight: 24,
    letterSpacing: 0,
    fontSize: FontSize.bodyLargeSemibold_size,
  },
  tittleTypo: {
    color: Color.greyscale900,
    lineHeight: 31,
    fontSize: FontSize.headingH4_size,
    textAlign: "center",
    fontFamily: FontFamily.bodyLargeSemibold,
    fontWeight: "700",
    letterSpacing: 0,
  },
  rectangleIcon: {
    top: 44,
    left: 14,
    width: 338,
    height: 626,
    position: "absolute",
  },
  portalChild: {
    top: 434,
    backgroundColor: Color.colorGray_300,
    height: 395,
    left: 0,
  },
  text: {
    top: 433,
    width: 287,
    left: 0,
  },
  karyawan: {
    color: Color.white,
    textAlign: "center",
    fontWeight: "700",
  },
  button: {
    top: 630,
    borderRadius: Border.br_base,
    height: 56,
    flexDirection: "row",
    padding: Padding.p_5xs,
    backgroundColor: Color.colorSteelblue,
    width: 287,
    left: 0,
  },
  contentChild: {
    top: 590,
    left: 122,
  },
  skip: {
    top: 0,
    left: 274,
    color: Color.primary400,
    textAlign: "right",
    fontFamily: FontFamily.bodyLargeSemibold,
    fontWeight: "700",
    lineHeight: 24,
    letterSpacing: 0,
    fontSize: FontSize.bodyLargeSemibold_size,
    position: "absolute",
  },
  contentItem: {
    top: 290,
    left: 279,
    width: 53,
    height: 53,
    position: "absolute",
  },
  content: {
    top: 68,
    left: 44,
    width: 332,
    height: 686,
    position: "absolute",
  },
  portalItem: {
    top: 425,
    left: 1,
    backgroundColor: Color.colorGray_200,
    height: 190,
  },
  tittle: {
    top: 566,
    left: 72,
    width: 232,
    height: 32,
    position: "absolute",
  },
  tittle1: {
    alignSelf: "stretch",
  },
  body: {
    color: Color.greyscale500,
    width: 286,
    marginTop: 16,
  },
  text1: {
    top: 445,
    left: 47,
    width: 287,
  },
  portalInner: {
    height: "6.9%",
    width: "76.53%",
    top: "76.6%",
    right: "11.73%",
    bottom: "16.5%",
    left: "11.73%",
    borderRadius: Border.br_xs,
    backgroundColor: Color.colorSteelblue,
    position: "absolute",
  },
  admin: {
    top: 637,
    left: 113,
    display: "flex",
    width: 149,
    height: 24,
    color: Color.white,
    textAlign: "center",
    fontWeight: "700",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  portalIcon: {
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default Portal;
