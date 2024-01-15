import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import HomeIndicator from "../components/HomeIndicator";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import Property1default from "../components/Property1default";
import QRCodeScannerForm from "../components/QRCodeScannerForm";
import { Border, FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const RegisterBarcode = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.registerBarcode}>
      <HomeIndicator
        homeIndicatorPosition="absolute"
        homeIndicatorTop={778}
        homeIndicatorLeft={0}
        homeIndicatorWidth={375}
        homeIndicatorHeight={34}
        rectangleViewBackgroundColor="#000"
      />
      <Image
        style={styles.bgCafeAwal}
        contentFit="cover"
        source={require("../assets/bg-cafe-awal1.png")}
      />
      <Image
        style={[styles.registerBarcodeChild, styles.registerLayout]}
        contentFit="cover"
        source={require("../assets/vector-35.png")}
      />
      <Pressable
        style={styles.qr}
        onPress={() => navigation.navigate("Barcode")}
      >
        <Image
          style={styles.scanIcon}
          contentFit="cover"
          source={require("../assets/scan1.png")}
        />
        <Text style={styles.scanQrCode}>Scan QR code ready</Text>
      </Pressable>
      <Image
        style={styles.download21}
        contentFit="cover"
        source={require("../assets/download-2-1.png")}
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
      <QRCodeScannerForm propWidth={375} />
      <Image
        style={[styles.registerBarcodeItem, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector-33.png")}
      />
      <Image
        style={[styles.registerBarcodeInner, styles.registerLayout]}
        contentFit="cover"
        source={require("../assets/vector-36.png")}
      />
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector-34.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  registerLayout: {
    width: 37,
    borderRadius: Border.br_xl,
    left: 17,
    height: 35,
    position: "absolute",
  },
  vectorIconLayout: {
    width: 38,
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  bgCafeAwal: {
    top: 0,
    left: 1,
    width: 375,
    position: "absolute",
    height: 812,
  },
  registerBarcodeChild: {
    height: 35,
    top: 200,
  },
  scanIcon: {
    width: 20,
    height: 20,
    overflow: "hidden",
  },
  scanQrCode: {
    fontSize: FontSize.bodyMediumBold_size,
    letterSpacing: 0,
    lineHeight: 21,
    fontWeight: "500",
    fontFamily: FontFamily.bodyLargeSemibold,
    color: Color.white,
    textAlign: "left",
    marginLeft: 8,
  },
  qr: {
    marginLeft: -96,
    top: 596,
    left: "50%",
    borderRadius: Border.br_xs,
    backgroundColor: Color.colorSteelblue,
    shadowColor: "rgba(17, 24, 39, 0.02)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 16,
    elevation: 16,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderColor: Color.colorGray_100,
    borderWidth: 1,
    height: 42,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: Padding.p_base,
    position: "absolute",
  },
  download21: {
    top: 212,
    left: 23,
    borderRadius: Border.br_6xl,
    width: 333,
    height: 333,
    position: "absolute",
  },
  registerBarcodeItem: {
    left: 324,
    height: 34,
    top: 200,
  },
  registerBarcodeInner: {
    top: 517,
    height: 35,
  },
  vectorIcon: {
    top: 552,
    left: 320,
    height: 35,
  },
  registerBarcode: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 812,
  },
});

export default RegisterBarcode;
