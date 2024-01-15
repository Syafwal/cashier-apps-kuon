import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import HomeIndicator from "../components/HomeIndicator";
import ContainerFrame from "../components/ContainerFrame";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Karyawan = () => {
  return (
    <View style={styles.karyawan}>
      <View style={styles.homeIndicator}>
        <View style={styles.homeIndicatorChild} />
      </View>
      <HomeIndicator
        homeIndicatorPosition="absolute"
        homeIndicatorTop={864}
        homeIndicatorLeft={18}
        homeIndicatorWidth={375}
        homeIndicatorHeight={34}
        rectangleViewBackgroundColor="#000"
      />
      <ContainerFrame />
      <View style={styles.frame}>
        <Image
          style={styles.searchIcon}
          contentFit="cover"
          source={require("../assets/search1.png")}
        />
        <Text style={[styles.karyawan1, styles.karyawan1Typo]}>Karyawan</Text>
      </View>
      <View style={[styles.frame1, styles.frameLayout]}>
        <View style={styles.frameChild} />
        <Text style={[styles.id554490, styles.id554490Typo]}>ID: 554490</Text>
        <Text style={[styles.alamatJlkarya1, styles.id554490Typo]}>
          Alamat: JL.Karya 1
        </Text>
        <Text style={[styles.shifPagi, styles.id554490Typo]}>Shif: Pagi</Text>
        <Text style={[styles.noHp081256474458, styles.shifPagi1Typo]}>
          No Hp: 081256474458
        </Text>
        <Text style={[styles.anton, styles.sitiTypo]}>Anton</Text>
        <Image
          style={styles.download11}
          contentFit="cover"
          source={require("../assets/download-1-12.png")}
        />
      </View>
      <View style={[styles.frame2, styles.frameLayout]}>
        <View style={styles.frameChild} />
        <Text style={[styles.id554490, styles.id554490Typo]}>ID: 554564</Text>
        <Text style={[styles.noHp081256474458, styles.shifPagi1Typo]}>
          No Hp: 085215463954
        </Text>
        <Text style={[styles.alamatJlkarya11, styles.karyawan1Typo]}>
          Alamat: JL.Karya 1
        </Text>
        <Text style={[styles.shifPagi1, styles.shifPagi1Typo]}>Shif: Pagi</Text>
        <Text style={[styles.siti, styles.sitiTypo]}>Siti</Text>
        <Image
          style={styles.download11}
          contentFit="cover"
          source={require("../assets/download-1-2.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  karyawan1Typo: {
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
  frameLayout: {
    height: 158,
    backgroundColor: Color.colorDarkgray,
    width: 327,
    position: "absolute",
    overflow: "hidden",
  },
  id554490Typo: {
    left: 94,
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
  shifPagi1Typo: {
    left: 93,
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
  sitiTypo: {
    top: 6,
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
    top: 1086,
    left: -7,
    width: 375,
    height: 34,
    position: "absolute",
  },
  searchIcon: {
    top: 9,
    left: 308,
    width: 29,
    height: 30,
    position: "absolute",
  },
  karyawan1: {
    top: 12,
    left: 16,
  },
  frame: {
    top: 215,
    left: 17,
    borderRadius: Border.br_6xl,
    backgroundColor: Color.colorGainsboro_200,
    width: 347,
    height: 48,
    position: "absolute",
    overflow: "hidden",
  },
  frameChild: {
    top: 0,
    left: 0,
    backgroundColor: Color.colorSteelblue,
    height: 35,
    width: 327,
    position: "absolute",
  },
  id554490: {
    top: 39,
  },
  alamatJlkarya1: {
    top: 124,
  },
  shifPagi: {
    top: 95,
  },
  noHp081256474458: {
    top: 67,
  },
  anton: {
    left: 11,
  },
  download11: {
    top: 35,
    left: 1,
    width: 86,
    height: 123,
    position: "absolute",
  },
  frame1: {
    top: 311,
    left: 24,
  },
  alamatJlkarya11: {
    top: 127,
    left: 95,
  },
  shifPagi1: {
    top: 97,
  },
  siti: {
    left: 19,
  },
  frame2: {
    top: 517,
    left: 27,
  },
  karyawan: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 896,
    overflow: "hidden",
  },
});

export default Karyawan;
