import * as React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import Property1default from "./Property1default";
import FormContainer1 from "./FormContainer1";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const SectionFilter = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={[styles.frameParent, styles.parentLayout]}>
      <View style={[styles.rectangleParent, styles.frameItemPosition]}>
        <View style={[styles.frameChild, styles.frameChildLayout]} />
        <Image
          style={[styles.bgCafeAwal, styles.frameChildLayout]}
          contentFit="cover"
          source={require("../assets/bg-cafe-awal.png")}
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
      </View>
      <Image
        style={styles.notifIcon}
        contentFit="cover"
        source={require("../assets/notif.png")}
      />
      <Pressable
        style={styles.icon}
        onPress={() => navigation.navigate("TampilanTitik3")}
      >
        <Image
          style={styles.icon1}
          contentFit="cover"
          source={require("../assets/icon.png")}
        />
      </Pressable>
      <Property1default
        mobileSignal={require("../assets/mobile-signal1.png")}
        wifi={require("../assets/wifi1.png")}
        battery={require("../assets/battery1.png")}
        property1defaultPosition="absolute"
        property1defaultTop={18}
        property1defaultLeft={1}
        property1defaultWidth={375}
        textColor="#000"
      />
      <Image
        style={styles.searchIcon}
        contentFit="cover"
        source={require("../assets/search1.png")}
      />
      <Text style={styles.silahkanPilihNegara}>Silahkan pilih negara kamu</Text>
      <FormContainer1
        profileImageUrl={require("../assets/download-1-1.png")}
        displayName="Anton"
        itemId="ID 554490"
        propTop={87}
        propLeft={16}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  parentLayout: {
    height: 214,
    position: "absolute",
  },
  frameItemPosition: {
    left: 0,
    top: 0,
  },
  frameChildLayout: {
    height: 213,
    width: 375,
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
  rectangleParent: {
    width: 376,
    height: 214,
    position: "absolute",
  },
  notifIcon: {
    top: 101,
    left: 284,
    width: 23,
    height: 22,
    position: "absolute",
  },
  icon1: {
    borderRadius: Border.br_xs,
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },
  icon: {
    left: 318,
    top: 91,
    width: 40,
    height: 40,
    position: "absolute",
  },
  searchIcon: {
    top: 96,
    left: 253,
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
  frameParent: {
    top: -18,
    left: -1,
    width: 389,
  },
});

export default SectionFilter;
