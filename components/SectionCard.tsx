import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import Property1default from "./Property1default";
import FormContainer1 from "./FormContainer1";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const SectionCard = () => {
  return (
    <View style={[styles.groupParent, styles.parentLayout]}>
      <View style={[styles.rectangleParent, styles.groupPosition]}>
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <Image
          style={[styles.bgCafeAwal, styles.groupChildLayout]}
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
        style={[styles.icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/icon7.png")}
      />
      <View style={[styles.groupWrapper, styles.groupLayout]}>
        <View style={[styles.groupContainer, styles.groupLayout]}>
          <View style={[styles.groupContainer, styles.groupLayout]}>
            <Image
              style={styles.logoKuon21}
              contentFit="cover"
              source={require("../assets/logo-kuon2-1.png")}
            />
            <Image
              style={[styles.groupItem, styles.groupLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-1.png")}
            />
            <Image
              style={styles.logoKuon1}
              contentFit="cover"
              source={require("../assets/logo-kuon-1.png")}
            />
          </View>
        </View>
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
      <Image
        style={styles.searchIcon}
        contentFit="cover"
        source={require("../assets/search1.png")}
      />
      <Text style={styles.silahkanPilihNegara}>Silahkan pilih negara kamu</Text>
      <View style={[styles.groupFrame, styles.iconPosition]}>
        <FormContainer1
          profileImageUrl={require("../assets/download-1-11.png")}
          displayName="Adjie"
          itemId="ID 664851"
          propTop={0}
          propLeft={0}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentLayout: {
    height: 214,
    width: 415,
    position: "absolute",
  },
  groupPosition: {
    left: 0,
    top: 0,
  },
  groupChildLayout: {
    height: 213,
    width: 414,
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  iconPosition: {
    top: 87,
    position: "absolute",
  },
  groupLayout: {
    height: 35,
    position: "absolute",
  },
  groupChild: {
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
    left: 360,
    borderRadius: Border.br_xs,
    width: 40,
    height: 40,
    overflow: "hidden",
  },
  logoKuon21: {
    top: 10,
    left: 40,
    width: 69,
    height: 23,
    position: "absolute",
  },
  groupItem: {
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
  groupContainer: {
    width: 109,
    height: 35,
    left: 0,
    top: 0,
  },
  groupWrapper: {
    top: 171,
    left: 133,
    width: 109,
    height: 35,
  },
  searchIcon: {
    top: 97,
    left: 275,
    width: 29,
    height: 30,
    position: "absolute",
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
  groupFrame: {
    left: 16,
    width: 127,
    height: 50,
  },
  groupParent: {
    top: -18,
    left: -1,
  },
});

export default SectionCard;
