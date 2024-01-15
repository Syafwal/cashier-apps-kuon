import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const StatistikContainer = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.rectangleParent}>
      <View style={[styles.componentChild, styles.componentBg]} />
      <View style={[styles.componentItem, styles.hakPosition]} />
      <View style={[styles.componentInner, styles.componentBg]} />
      <Text style={[styles.statistik, styles.statistikTypo]}>Statistik</Text>
      <Text style={[styles.karyawan, styles.karyawanTypo]}>Karyawan</Text>
      <Text style={[styles.inventaris, styles.karyawanTypo]}>Inventaris</Text>
      <Text style={[styles.absensiKaryawan, styles.statistikTypo]}>
        Absensi Karyawan
      </Text>
      <Pressable
        style={styles.hakPosition}
        onPress={() => navigation.navigate("AbsensiKaryawan")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/6-hakhak-pribadi-yang-wajib-diketahui-karyawan-1.png")}
        />
      </Pressable>
      <Pressable
        style={styles.assetBarang}
        onPress={() => navigation.navigate("Inventaris")}
      >
        <Image
          style={[styles.icon1, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/asset-barang.png")}
        />
      </Pressable>
      <Pressable
        style={styles.removebgPreview1}
        onPress={() => navigation.navigate("DetailPenjualanUntukKaryawa")}
      >
        <Image
          style={[styles.icon1, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/28520removebgpreview-1.png")}
        />
      </Pressable>
      <Image
        style={[styles.diamondGreenCheckMarkSetPIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/diamond-green-check-mark-set-prev-ui-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  componentBg: {
    backgroundColor: Color.colorGainsboro_200,
    borderRadius: Border.br_6xl,
  },
  hakPosition: {
    bottom: "11.78%",
    top: "55.22%",
    left: "1.2%",
    right: "55.42%",
    width: "43.37%",
    height: "33%",
    position: "absolute",
  },
  statistikTypo: {
    textAlign: "center",
    color: Color.primary400,
    fontFamily: FontFamily.bodyLargeSemibold,
    fontWeight: "500",
    fontStyle: "italic",
    lineHeight: 24,
    letterSpacing: 0,
    fontSize: FontSize.bodyLargeSemibold_size,
    top: "38.72%",
    position: "absolute",
  },
  karyawanTypo: {
    top: "91.92%",
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
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  componentChild: {
    left: "1.2%",
    backgroundColor: Color.colorGainsboro_200,
    bottom: "64.98%",
    right: "55.42%",
    top: "2.02%",
    width: "43.37%",
    height: "33%",
    position: "absolute",
  },
  componentItem: {
    backgroundColor: Color.colorGainsboro_200,
    borderRadius: Border.br_6xl,
  },
  componentInner: {
    right: "0%",
    left: "56.63%",
    bottom: "64.98%",
    top: "2.02%",
    width: "43.37%",
    backgroundColor: Color.colorGainsboro_200,
    height: "33%",
    position: "absolute",
  },
  statistik: {
    left: "14.76%",
  },
  karyawan: {
    left: "13.55%",
  },
  inventaris: {
    left: "70.48%",
  },
  absensiKaryawan: {
    left: "61.14%",
  },
  icon: {
    width: "100%",
    height: "100%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    borderRadius: Border.br_6xl,
  },
  icon1: {
    width: "100%",
    height: "100%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  assetBarang: {
    left: "62.05%",
    top: "58.92%",
    right: "3.31%",
    bottom: "10.1%",
    width: "34.64%",
    height: "30.98%",
    position: "absolute",
  },
  removebgPreview1: {
    left: "0%",
    top: "0%",
    bottom: "67%",
    width: "44.58%",
    right: "55.42%",
    height: "33%",
    position: "absolute",
  },
  diamondGreenCheckMarkSetPIcon: {
    height: "25.25%",
    width: "25.3%",
    top: "5.05%",
    right: "9.94%",
    bottom: "69.7%",
    left: "64.76%",
    position: "absolute",
  },
  rectangleParent: {
    top: 231,
    left: 15,
    width: 332,
    height: 297,
    position: "absolute",
  },
});

export default StatistikContainer;
