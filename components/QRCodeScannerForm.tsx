import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { Border, FontSize, FontFamily, Color } from "../GlobalStyles";

type QRCodeScannerFormType = {
  /** Style props */
  propWidth?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const QRCodeScannerForm = ({ propWidth }: QRCodeScannerFormType) => {
  const appBarStyle = useMemo(() => {
    return {
      ...getStyleValue("width", propWidth),
    };
  }, [propWidth]);

  return (
    <View style={[styles.appBar, appBarStyle]}>
      <Image
        style={[styles.icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/icon10.png")}
      />
      <Image
        style={[styles.icon1, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/icon11.png")}
      />
      <Text style={styles.scanQrCode}>Scan QR Code</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    height: 40,
    width: 40,
    borderRadius: Border.br_xs,
    top: 8,
    overflow: "hidden",
    position: "absolute",
  },
  icon: {
    left: 311,
  },
  icon1: {
    left: 24,
  },
  scanQrCode: {
    top: 16,
    left: 122,
    fontSize: FontSize.headingH6_size,
    letterSpacing: 0,
    lineHeight: 24,
    fontWeight: "700",
    fontFamily: FontFamily.bodyLargeSemibold,
    color: Color.primary400,
    textAlign: "center",
    position: "absolute",
  },
  appBar: {
    top: 59,
    left: 1,
    width: 375,
    height: 56,
    overflow: "hidden",
    position: "absolute",
  },
});

export default QRCodeScannerForm;
