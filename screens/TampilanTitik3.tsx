import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import Property1default from "../components/Property1default";
import FormContainer1 from "../components/FormContainer1";
import NeonForm from "../components/NeonForm";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const TampilanTitik3 = () => {
  return (
    <View style={styles.tampilanTitik3}>
      <View style={[styles.homeIndicator, styles.overlayIconLayout]}>
        <View style={[styles.homeIndicatorChild, styles.childLayout]} />
      </View>
      <View style={styles.rectangleParent}>
        <View style={[styles.frameChild, styles.frameChildLayout]} />
        <Image
          style={[styles.bgCafeAwal, styles.frameItemPosition]}
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
        style={[styles.notifIcon, styles.notifIconLayout]}
        contentFit="cover"
        source={require("../assets/notif.png")}
      />
      <Image
        style={styles.tampilanTitik3Child}
        contentFit="cover"
        source={require("../assets/rectangle-4232.png")}
      />
      <View style={[styles.tampilanTitik3Item, styles.iconChildLayout]} />
      <View
        style={[styles.tampilanTitik3Inner, styles.flaminggoIconPosition]}
      />
      <View style={[styles.rectangleView, styles.iconChildLayout]} />
      <View style={[styles.tampilanTitik3Child1, styles.iconChildLayout]} />
      <View style={[styles.tampilanTitik3Child2, styles.iconChildLayout]} />
      <View style={[styles.tampilanTitik3Child3, styles.iconChildLayout]} />
      <View style={[styles.tampilanTitik3Child4, styles.childLayout]} />
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
      <Text style={[styles.harga25000, styles.kemerdekaanTypo]}>
        Harga: 25.000
      </Text>
      <Image
        style={styles.icon}
        contentFit="cover"
        source={require("../assets/icon.png")}
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
      <Image
        style={styles.searchIcon}
        contentFit="cover"
        source={require("../assets/search1.png")}
      />
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
      <Text style={styles.silahkanPilihNegara}>Silahkan pilih negara kamu</Text>
      <FormContainer1
        profileImageUrl={require("../assets/download-1-1.png")}
        displayName="Anton"
        itemId="ID 554490"
        propTop={69}
        propLeft={15}
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
      <Image
        style={styles.bill11}
        contentFit="cover"
        source={require("../assets/bill-1-11.png")}
      />
      <Image
        style={[styles.shoppingCart11, styles.notifIconLayout]}
        contentFit="cover"
        source={require("../assets/shoppingcart-1-1.png")}
      />
      <Image
        style={[styles.overlayIcon, styles.frameItemPosition]}
        contentFit="cover"
        source={require("../assets/overlay.png")}
      />
      <NeonForm />
    </View>
  );
};

const styles = StyleSheet.create({
  overlayIconLayout: {
    width: 375,
    position: "absolute",
  },
  childLayout: {
    height: 5,
    backgroundColor: Color.primary400,
    borderRadius: Border.br_81xl,
    left: "50%",
    position: "absolute",
  },
  frameChildLayout: {
    height: 213,
    borderRadius: Border.br_xl,
    width: 375,
    position: "absolute",
  },
  frameItemPosition: {
    top: 0,
    left: 0,
  },
  frameItemLayout: {
    height: 35,
    position: "absolute",
  },
  notifIconLayout: {
    width: 23,
    position: "absolute",
  },
  iconChildLayout: {
    height: 104,
    position: "absolute",
  },
  flaminggoIconPosition: {
    top: 370,
    width: 160,
  },
  kemerdekaanTypo: {
    textAlign: "center",
    color: Color.primary400,
    fontWeight: "500",
    fontStyle: "italic",
    fontFamily: FontFamily.bodyLargeSemibold,
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
    top: 624,
    height: 13,
    width: 13,
    position: "absolute",
  },
  simbolIconPosition: {
    top: 328,
    height: 13,
    width: 13,
    position: "absolute",
  },
  homeIndicatorChild: {
    marginLeft: -66.5,
    bottom: 9,
    width: 134,
  },
  homeIndicator: {
    top: 778,
    height: 34,
    left: 0,
    width: 375,
  },
  frameChild: {
    left: 1,
    backgroundColor: Color.colorSteelblue,
    top: 1,
  },
  bgCafeAwal: {
    height: 213,
    borderRadius: Border.br_xl,
    width: 375,
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
    top: 0,
    left: 0,
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
    top: -18,
    left: -1,
    width: 376,
    height: 214,
    position: "absolute",
  },
  notifIcon: {
    top: 83,
    left: 283,
    height: 22,
  },
  tampilanTitik3Child: {
    top: 695,
    left: 315,
    borderRadius: 200,
    width: 38,
    height: 36,
    position: "absolute",
  },
  tampilanTitik3Item: {
    width: 160,
    backgroundColor: Color.colorGainsboro_200,
    height: 104,
    left: 16,
    top: 215,
  },
  tampilanTitik3Inner: {
    left: 197,
    height: 104,
    position: "absolute",
    backgroundColor: Color.colorGainsboro_200,
  },
  rectangleView: {
    top: 369,
    width: 160,
    backgroundColor: Color.colorGainsboro_200,
    height: 104,
    left: 16,
  },
  tampilanTitik3Child1: {
    top: 515,
    width: 160,
    backgroundColor: Color.colorGainsboro_200,
    height: 104,
    left: 16,
  },
  tampilanTitik3Child2: {
    top: 516,
    left: 197,
    width: 160,
    backgroundColor: Color.colorGainsboro_200,
    height: 104,
  },
  tampilanTitik3Child3: {
    left: 198,
    width: 160,
    backgroundColor: Color.colorGainsboro_200,
    height: 104,
    top: 215,
  },
  tampilanTitik3Child4: {
    marginLeft: 179.5,
    bottom: 397,
    width: 34,
    transform: [
      {
        rotate: "-90deg",
      },
    ],
  },
  creamyCheeseCake: {
    left: 15,
    color: Color.primary400,
    fontWeight: "500",
    fontStyle: "italic",
    top: 324,
  },
  danilo: {
    top: 324,
    left: 198,
  },
  flaminggo: {
    top: 478,
    left: 24,
  },
  kopiKuon: {
    top: 619,
    left: 198,
  },
  kemerdekaan1: {
    top: 476,
    left: 197,
  },
  kemerdekaan2: {
    top: 620,
    left: 15,
    color: Color.primary400,
    fontWeight: "500",
    fontStyle: "italic",
  },
  harga25000: {
    top: 678,
    left: 35,
  },
  icon: {
    top: 73,
    left: 317,
    borderRadius: Border.br_xs,
    width: 40,
    height: 40,
    position: "absolute",
    overflow: "hidden",
  },
  searchIcon: {
    top: 78,
    left: 252,
    width: 29,
    height: 30,
    position: "absolute",
  },
  cheeseCakeIcon: {
    width: 160,
    left: 16,
    top: 215,
  },
  daniloIcon: {
    left: 198,
    width: 160,
    top: 215,
  },
  flaminggoIcon: {
    top: 370,
    width: 160,
    left: 16,
  },
  silahkanPilihNegara: {
    top: 104,
    left: 99,
    color: "transparent",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 289,
    fontFamily: FontFamily.bodyLargeSemibold,
    lineHeight: 24,
    letterSpacing: 0,
    fontSize: FontSize.bodyLargeSemibold_size,
    position: "absolute",
  },
  kemerdekaan1Icon: {
    top: 371,
    height: 102,
    left: 197,
    width: 160,
    position: "absolute",
  },
  kemerdekaan2Icon: {
    top: 516,
    width: 160,
    left: 16,
  },
  kopiKuonIcon: {
    width: 159,
    left: 198,
    top: 516,
  },
  simbolPlusIcon: {
    top: 482,
    left: 163,
  },
  simbolPlusIcon1: {
    left: 344,
  },
  simbolPlusIcon2: {
    left: 163,
  },
  simbolPlusIcon3: {
    top: 483,
    left: 344,
  },
  simbolPlusIcon4: {
    left: 344,
  },
  simbolPlusIcon5: {
    left: 163,
  },
  bill11: {
    top: 719,
    left: 39,
    width: 26,
    height: 26,
    position: "absolute",
  },
  shoppingCart11: {
    top: 701,
    left: 323,
    height: 24,
  },
  overlayIcon: {
    width: 375,
    position: "absolute",
    height: 812,
  },
  tampilanTitik3: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 812,
  },
});

export default TampilanTitik3;
