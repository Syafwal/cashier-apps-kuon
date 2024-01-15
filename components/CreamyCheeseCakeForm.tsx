import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const CreamyCheeseCakeForm = () => {
  return (
    <View style={styles.menuGrup}>
      <View style={[styles.menuGrupChild, styles.iconChildLayout]} />
      <View style={[styles.menuGrupItem, styles.menuGrupItemPosition]} />
      <View style={[styles.menuGrupInner, styles.iconChildLayout]} />
      <View style={[styles.rectangleView, styles.iconChildLayout]} />
      <View style={[styles.menuGrupChild1, styles.iconChildLayout]} />
      <View style={[styles.menuGrupChild2, styles.iconChildLayout]} />
      <View style={styles.menuGrupChild3} />
      <Text style={[styles.creamyCheeseCake, styles.kemerdekaanTypo]}>
        Creamy Cheese Cake
      </Text>
      <Text style={[styles.danilo, styles.kemerdekaanTypo]}>Danilo</Text>
      <Text style={[styles.flaminggo, styles.kemerdekaanTypo]}>Flaminggo</Text>
      <Text style={[styles.kopiKuon, styles.kemerdekaanTypo]}>Kopi Kuon</Text>
      <Text style={[styles.kemerdekaan1, styles.kemerdekaanTypo]}>
        Kemerdekaan 1
      </Text>
      <Text style={[styles.kemerdekaan2, styles.kemerdekaanTypo]}>
        Kemerdekaan 2
      </Text>
      <Image
        style={[styles.cheeseCakeIcon, styles.iconChildLayout]}
        contentFit="cover"
        source={require("../assets/cheese-cake.png")}
      />
      <Image
        style={[styles.daniloIcon, styles.iconChildLayout]}
        contentFit="cover"
        source={require("../assets/danilo.png")}
      />
      <Image
        style={[styles.flaminggoIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/flaminggo.png")}
      />
      <Image
        style={styles.kemerdekaan1Icon}
        contentFit="cover"
        source={require("../assets/kemerdekaan-1.png")}
      />
      <Image
        style={[styles.kemerdekaan2Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/kemerdekaan-2.png")}
      />
      <Image
        style={[styles.kopiKuonIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/kopi-kuon.png")}
      />
      <Image
        style={[styles.simbolPlusIcon, styles.simbolIconLayout]}
        contentFit="cover"
        source={require("../assets/simbol-plus1.png")}
      />
      <Image
        style={[styles.simbolPlusIcon1, styles.simbolIconPosition1]}
        contentFit="cover"
        source={require("../assets/simbol-plus1.png")}
      />
      <Image
        style={[styles.simbolPlusIcon2, styles.simbolIconPosition1]}
        contentFit="cover"
        source={require("../assets/simbol-plus1.png")}
      />
      <Image
        style={[styles.simbolPlusIcon3, styles.simbolIconLayout]}
        contentFit="cover"
        source={require("../assets/simbol-plus1.png")}
      />
      <Image
        style={[styles.simbolPlusIcon4, styles.simbolIconPosition]}
        contentFit="cover"
        source={require("../assets/simbol-plus1.png")}
      />
      <Image
        style={[styles.simbolPlusIcon5, styles.simbolIconPosition]}
        contentFit="cover"
        source={require("../assets/simbol-plus1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconChildLayout: {
    height: 104,
    position: "absolute",
  },
  menuGrupItemPosition: {
    top: 155,
    width: 160,
  },
  kemerdekaanTypo: {
    textAlign: "center",
    color: Color.primary400,
    fontFamily: FontFamily.bodyLargeSemibold,
    fontWeight: "500",
    fontStyle: "italic",
    lineHeight: 24,
    letterSpacing: 0,
    fontSize: FontSize.bodyLargeSemibold_size,
    position: "absolute",
  },
  iconLayout: {
    height: 103,
    position: "absolute",
  },
  simbolIconLayout: {
    height: 13,
    width: 13,
    position: "absolute",
  },
  simbolIconPosition1: {
    top: 409,
    height: 13,
    width: 13,
    position: "absolute",
  },
  simbolIconPosition: {
    top: 113,
    height: 13,
    width: 13,
    position: "absolute",
  },
  menuGrupChild: {
    width: 160,
    backgroundColor: Color.colorGainsboro_200,
    height: 104,
    left: 1,
    top: 0,
  },
  menuGrupItem: {
    left: 182,
    height: 104,
    position: "absolute",
    backgroundColor: Color.colorGainsboro_200,
  },
  menuGrupInner: {
    top: 154,
    width: 160,
    backgroundColor: Color.colorGainsboro_200,
    height: 104,
    left: 1,
  },
  rectangleView: {
    top: 300,
    width: 160,
    backgroundColor: Color.colorGainsboro_200,
    height: 104,
    left: 1,
  },
  menuGrupChild1: {
    top: 301,
    left: 182,
    width: 160,
    backgroundColor: Color.colorGainsboro_200,
    height: 104,
  },
  menuGrupChild2: {
    left: 183,
    width: 160,
    backgroundColor: Color.colorGainsboro_200,
    height: 104,
    top: 0,
  },
  menuGrupChild3: {
    marginLeft: 173.5,
    bottom: 21,
    left: "50%",
    borderRadius: Border.br_81xl,
    backgroundColor: Color.primary400,
    width: 34,
    height: 5,
    transform: [
      {
        rotate: "-90deg",
      },
    ],
    position: "absolute",
  },
  creamyCheeseCake: {
    left: 0,
    color: Color.primary400,
    fontFamily: FontFamily.bodyLargeSemibold,
    fontWeight: "500",
    fontStyle: "italic",
    lineHeight: 24,
    letterSpacing: 0,
    fontSize: FontSize.bodyLargeSemibold_size,
    top: 109,
  },
  danilo: {
    top: 109,
    left: 183,
  },
  flaminggo: {
    top: 263,
    left: 9,
  },
  kopiKuon: {
    top: 404,
    left: 183,
  },
  kemerdekaan1: {
    top: 261,
    left: 182,
  },
  kemerdekaan2: {
    top: 405,
    left: 0,
    color: Color.primary400,
    fontFamily: FontFamily.bodyLargeSemibold,
    fontWeight: "500",
    fontStyle: "italic",
    lineHeight: 24,
    letterSpacing: 0,
    fontSize: FontSize.bodyLargeSemibold_size,
  },
  cheeseCakeIcon: {
    width: 160,
    left: 1,
    top: 0,
  },
  daniloIcon: {
    left: 183,
    width: 160,
    top: 0,
  },
  flaminggoIcon: {
    top: 155,
    width: 160,
    left: 1,
  },
  kemerdekaan1Icon: {
    top: 156,
    height: 102,
    left: 182,
    width: 160,
    position: "absolute",
  },
  kemerdekaan2Icon: {
    top: 301,
    width: 160,
    left: 1,
  },
  kopiKuonIcon: {
    width: 159,
    left: 183,
    top: 301,
  },
  simbolPlusIcon: {
    top: 267,
    left: 148,
  },
  simbolPlusIcon1: {
    left: 329,
  },
  simbolPlusIcon2: {
    left: 148,
  },
  simbolPlusIcon3: {
    top: 268,
    left: 329,
  },
  simbolPlusIcon4: {
    left: 329,
  },
  simbolPlusIcon5: {
    left: 148,
  },
  menuGrup: {
    top: 11,
    left: 6,
    width: 357,
    height: 429,
    position: "absolute",
  },
});

export default CreamyCheeseCakeForm;
