import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import SectionCard from "../components/SectionCard";
import HomeIndicator from "../components/HomeIndicator";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Inventaris = () => {
  return (
    <View style={styles.inventaris}>
      <SectionCard />
      <View style={styles.homeIndicator}>
        <View style={styles.homeIndicatorChild} />
      </View>
      <View style={styles.groupParent}>
        <View style={styles.gula1Parent}>
          <Text style={[styles.gula1, styles.gula1Typo]}>Gula : 1</Text>
          <Text style={[styles.bearBrand, styles.subTotalTypo]}>
            Bear Brand : 4
          </Text>
          <Text style={[styles.sariWangi, styles.gula1Typo]}>
            Sari Wangi : 2
          </Text>
          <Text style={[styles.nescafe9, styles.gula1Typo]}>Nescafe :9</Text>
        </View>
        <View style={styles.indocafe5Parent}>
          <Text style={[styles.indocafe5, styles.gula1Typo]}>Indocafe : 5</Text>
          <Text style={[styles.kopiAceh, styles.cream50Typo]}>
            Kopi Aceh : 10 Kg
          </Text>
          <Text style={[styles.cream50, styles.cream50Typo]}>Cream : 50</Text>
          <Text style={[styles.subTotal, styles.subTotalTypo]}>
            Sub Total : 90
          </Text>
          <Text style={[styles.stokBarang, styles.subTotalTypo]}>
            Stok Barang.
          </Text>
          <Text style={[styles.sirup9, styles.gula1Typo]}>Sirup : 9</Text>
        </View>
        <Image
          style={[
            styles.voiciDesIngrdientsNaturels,
            styles.voiciDesIngrdientsNaturelsLayout,
          ]}
          contentFit="cover"
          source={require("../assets/voici-des-ingrdients-naturels-pour-vincer-le-sucre-blanc-de-vos-desserts--1.png")}
        />
        <Image
          style={styles.nescaf3In1OriginalSolubl}
          contentFit="cover"
          source={require("../assets/nescaf-3-in-1-original-soluble-ground-coffee-beverage30-sachets-bag-1.png")}
        />
        <Image
          style={[styles.bearBrandFraserNeave1, styles.download31Layout]}
          contentFit="cover"
          source={require("../assets/bear-brand--fraser--neave-1.png")}
        />
        <Image
          style={styles.tehAsliBySariWangiRevi}
          contentFit="cover"
          source={require("../assets/teh-asli--by-sari-wangi---review--minuman--alkohol-tryandreview-com-1.png")}
        />
        <Image
          style={styles.promoKopiIndocafeCoffeemix}
          contentFit="cover"
          source={require("../assets/promo-kopi-indocafe-coffeemix-3-in-1-isi-10-saset---1-renceng-1.png")}
        />
        <Image
          style={[
            styles.arabicaCoffeeBeansDriedPro,
            styles.voiciDesIngrdientsNaturelsLayout,
          ]}
          contentFit="cover"
          source={require("../assets/arabica-coffee-beans-dried-process-1.png")}
        />
        <Image
          style={styles.whippedCreamSwirlIsolatedO}
          contentFit="cover"
          source={require("../assets/whipped-cream-swirl-isolated-on-white-stock-photo-571349116---shutterstock-1.png")}
        />
        <Image
          style={[styles.download31, styles.download31Layout]}
          contentFit="cover"
          source={require("../assets/download-3-1.png")}
        />
      </View>
      <HomeIndicator
        homeIndicatorPosition="absolute"
        homeIndicatorTop={862}
        homeIndicatorLeft={13}
        homeIndicatorWidth={375}
        homeIndicatorHeight={34}
        rectangleViewBackgroundColor="#000"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  gula1Typo: {
    height: 21,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
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
  subTotalTypo: {
    width: 122,
    height: 21,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
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
  cream50Typo: {
    top: 100,
    height: 21,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
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
  voiciDesIngrdientsNaturelsLayout: {
    height: 62,
    borderRadius: Border.br_6xl,
    position: "absolute",
  },
  download31Layout: {
    height: 77,
    position: "absolute",
  },
  homeIndicatorChild: {
    marginLeft: -66.5,
    bottom: 11,
    left: "50%",
    borderRadius: Border.br_81xl,
    backgroundColor: Color.primary400,
    width: 134,
    height: 5,
    position: "absolute",
  },
  homeIndicator: {
    top: 990,
    left: -7,
    width: 375,
    height: 30,
    position: "absolute",
  },
  gula1: {
    left: 34,
    width: 78,
    top: 0,
  },
  bearBrand: {
    top: 106,
    left: 0,
  },
  sariWangi: {
    top: 103,
    left: 245,
    width: 117,
  },
  nescafe9: {
    top: 3,
    width: 86,
    left: 257,
  },
  gula1Parent: {
    top: 84,
    left: 4,
    width: 362,
    height: 127,
    position: "absolute",
  },
  indocafe5: {
    left: 18,
    width: 96,
    top: 0,
  },
  kopiAceh: {
    width: 140,
    left: 0,
  },
  cream50: {
    width: 89,
    left: 257,
  },
  subTotal: {
    top: 178,
    left: 122,
  },
  stokBarang: {
    top: 153,
    left: 123,
  },
  sirup9: {
    top: 1,
    left: 264,
    width: 73,
  },
  indocafe5Parent: {
    top: 290,
    width: 346,
    height: 199,
    left: 0,
    position: "absolute",
  },
  voiciDesIngrdientsNaturels: {
    top: 11,
    left: 17,
    width: 115,
  },
  nescaf3In1OriginalSolubl: {
    left: 256,
    width: 93,
    height: 83,
    top: 0,
    position: "absolute",
  },
  bearBrandFraserNeave1: {
    top: 110,
    left: 20,
    width: 99,
  },
  tehAsliBySariWangiRevi: {
    top: 115,
    left: 232,
    width: 142,
    height: 61,
    position: "absolute",
  },
  promoKopiIndocafeCoffeemix: {
    top: 223,
    left: 37,
    width: 70,
    height: 65,
    position: "absolute",
  },
  arabicaCoffeeBeansDriedPro: {
    top: 319,
    left: 8,
    width: 133,
  },
  whippedCreamSwirlIsolatedO: {
    top: 323,
    left: 255,
    width: 92,
    height: 67,
    position: "absolute",
  },
  download31: {
    top: 211,
    width: 91,
    left: 257,
  },
  groupParent: {
    top: 216,
    left: 25,
    width: 374,
    height: 489,
    position: "absolute",
  },
  inventaris: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 896,
    overflow: "hidden",
  },
});

export default Inventaris;
