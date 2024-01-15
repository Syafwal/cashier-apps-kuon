import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import Property1default from "./Property1default";
import FormContainer1 from "./FormContainer1";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const SectionForm = () => {
  return (
    <View style={[styles.frameParent, styles.parentLayout]}>
      <View style={[styles.rectangleParent, styles.frameItemPosition]}>
        <View style={[styles.frameChild, styles.frameChildLayout]} />
        <Image
          style={[styles.bgCafeAwal, styles.frameChildLayout]}
          contentFit="cover"
          source={require("../assets/bg-cafe-awal2.png")}
        />
        <Image
          style={styles.notifIcon}
          contentFit="cover"
          source={require("../assets/notif1.png")}
        />
      </View>
      <Image
        style={styles.icon}
        contentFit="cover"
        source={require("../assets/icon8.png")}
      />
      <View style={[styles.logoKuon21Parent, styles.frameItemLayout]}>
        <Image
          style={styles.logoKuon21}
          contentFit="cover"
          source={require("../assets/logo-kuon2-1.png")}
        />
        <Image
          style={[styles.frameItem, styles.frameItemLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-1.png")}
        />
        <Image
          style={styles.logoKuon1}
          contentFit="cover"
          source={require("../assets/logo-kuon-1.png")}
        />
      </View>
      <Property1default
        mobileSignal={require("../assets/mobile-signal1.png")}
        wifi={require("../assets/wifi1.png")}
        battery={require("../assets/battery1.png")}
        property1defaultPosition="absolute"
        property1defaultTop={18}
        property1defaultLeft={1}
        property1defaultWidth={413}
        textColor="#000"
      />
      <Text style={styles.silahkanPilihNegara}>Silahkan pilih negara kamu</Text>
      <FormContainer1
        profileImageUrl={require("../assets/download-1-11.png")}
        displayName="Adjie"
        itemId="ID 664851"
        propTop={87}
        propLeft={16}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  parentLayout: {
    height: 214,
    width: 415,
    position: "absolute",
  },
  frameItemPosition: {
    left: 0,
    top: 0,
  },
  frameChildLayout: {
    height: 213,
    width: 414,
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  frameItemLayout: {
    height: 35,
    position: "absolute",
  },
  frameChild: {
    left: 1,
    backgroundColor: Color.colorSteelblue,
    top: 1,
  },
  bgCafeAwal: {
    left: 0,
    top: 0,
  },
  notifIcon: {
    top: 101,
    left: 319,
    width: 25,
    height: 22,
    position: "absolute",
  },
  rectangleParent: {
    height: 214,
    width: 415,
    position: "absolute",
  },
  icon: {
    top: 91,
    left: 358,
    borderRadius: Border.br_xs,
    width: 40,
    height: 40,
    overflow: "hidden",
    position: "absolute",
  },
  logoKuon21: {
    top: 10,
    left: 40,
    width: 69,
    height: 23,
    position: "absolute",
  },
  frameItem: {
    width: 35,
    left: 0,
    top: 0,
  },
  logoKuon1: {
    left: 4,
    width: 28,
    height: 29,
    top: 1,
    position: "absolute",
  },
  logoKuon21Parent: {
    top: 171,
    left: 133,
    width: 109,
  },
  silahkanPilihNegara: {
    top: 122,
    left: 100,
    fontSize: FontSize.bodyLargeSemibold_size,
    letterSpacing: 0,
    lineHeight: 24,
    fontFamily: FontFamily.bodyLargeSemibold,
    color: "transparent",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 289,
    position: "absolute",
  },
  frameParent: {
    top: -18,
    left: -1,
  },
});

export default SectionForm;
