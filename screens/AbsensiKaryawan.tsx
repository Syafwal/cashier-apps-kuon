import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import SectionForm from "../components/SectionForm";
import HomeIndicator from "../components/HomeIndicator";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const AbsensiKaryawan = () => {
  return (
    <View style={styles.absensiKaryawan}>
      <View style={styles.homeIndicator}>
        <View style={styles.homeIndicatorChild} />
      </View>
      <View style={[styles.absensiKaryawanChild, styles.rectangleViewLayout]} />
      <View style={[styles.absensiKaryawanItem, styles.absensiLayout]} />
      <View style={styles.absensiKaryawanInner} />
      <Image
        style={styles.searchIcon}
        contentFit="cover"
        source={require("../assets/search1.png")}
      />
      <SectionForm />
      <Text style={[styles.absensiKaryawan1, styles.sitiTypo]}>
        Absensi Karyawan
      </Text>
      <Text style={[styles.id554490, styles.jamTypo]}>ID: 554490</Text>
      <Text style={[styles.keteranganHadir, styles.keteranganTypo]}>
        Keterangan: Hadir
      </Text>
      <Text style={[styles.jamKerja0800, styles.jamTypo]}>
        Jam Kerja: 08.00 - 17.00
      </Text>
      <Text style={[styles.tanggal24November, styles.tanggal24Typo]}>
        Tanggal: 24 November 2023
      </Text>
      <Text style={[styles.anton, styles.sitiTypo]}>Anton</Text>
      <Image
        style={[styles.download11, styles.downloadLayout]}
        contentFit="cover"
        source={require("../assets/download-1-12.png")}
      />
      <View style={[styles.rectangleView, styles.rectangleViewPosition]} />
      <View
        style={[styles.absensiKaryawanChild1, styles.rectangleViewPosition]}
      />
      <Text style={[styles.id554564, styles.jamTypo]}>ID: 554564</Text>
      <Text style={[styles.keteranganHadir1, styles.keteranganTypo]}>
        Keterangan: Hadir
      </Text>
      <Text style={[styles.jamKerja08001, styles.jamTypo]}>
        Jam Kerja: 08.00 - 17.00
      </Text>
      <Text style={[styles.tanggal24November1, styles.tanggal24Typo]}>
        Tanggal: 24 November 2023
      </Text>
      <Text style={[styles.siti, styles.sitiTypo]}>Siti</Text>
      <Image
        style={[styles.download12, styles.downloadLayout]}
        contentFit="cover"
        source={require("../assets/download-1-2.png")}
      />
      <HomeIndicator
        homeIndicatorPosition="absolute"
        homeIndicatorTop={862}
        homeIndicatorLeft={10}
        homeIndicatorWidth={375}
        homeIndicatorHeight={34}
        rectangleViewBackgroundColor="#000"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleViewLayout: {
    height: 158,
    backgroundColor: Color.colorDarkgray,
  },
  absensiLayout: {
    height: 35,
    backgroundColor: Color.colorSteelblue,
  },
  sitiTypo: {
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
  jamTypo: {
    left: 118,
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
  keteranganTypo: {
    left: 121,
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
  tanggal24Typo: {
    left: 116,
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
  downloadLayout: {
    height: 123,
    width: 86,
    left: 25,
    position: "absolute",
  },
  rectangleViewPosition: {
    top: 509,
    width: 327,
    left: 24,
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
    left: -9,
    width: 375,
    height: 34,
    position: "absolute",
  },
  absensiKaryawanChild: {
    width: 327,
    left: 24,
    top: 311,
    position: "absolute",
  },
  absensiKaryawanItem: {
    width: 327,
    left: 24,
    top: 311,
    position: "absolute",
  },
  absensiKaryawanInner: {
    top: 215,
    left: 17,
    borderRadius: Border.br_6xl,
    backgroundColor: Color.colorGainsboro_200,
    width: 347,
    height: 48,
    position: "absolute",
  },
  searchIcon: {
    top: 224,
    left: 325,
    width: 29,
    height: 30,
    position: "absolute",
  },
  absensiKaryawan1: {
    top: 227,
    left: 32,
  },
  id554490: {
    top: 350,
  },
  keteranganHadir: {
    top: 434,
  },
  jamKerja0800: {
    top: 406,
  },
  tanggal24November: {
    top: 378,
  },
  anton: {
    top: 317,
    left: 35,
  },
  download11: {
    top: 346,
  },
  rectangleView: {
    height: 158,
    backgroundColor: Color.colorDarkgray,
  },
  absensiKaryawanChild1: {
    height: 35,
    backgroundColor: Color.colorSteelblue,
  },
  id554564: {
    top: 548,
  },
  keteranganHadir1: {
    top: 632,
  },
  jamKerja08001: {
    top: 604,
  },
  tanggal24November1: {
    top: 576,
  },
  siti: {
    top: 515,
    left: 43,
  },
  download12: {
    top: 544,
  },
  absensiKaryawan: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 896,
    overflow: "hidden",
  },
});

export default AbsensiKaryawan;
