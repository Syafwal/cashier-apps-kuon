import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Border, FontFamily, FontSize, Color } from "../GlobalStyles";

const FormContainer2 = () => {
  return (
    <View style={styles.orderList}>
      <View style={[styles.orderListChild, styles.orderPosition]} />
      <Image
        style={[styles.minus2Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/minus-2.png")}
      />
      <Image
        style={[styles.minus1Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/minus-2.png")}
      />
      <Image
        style={[styles.simbolPlusIcon, styles.simbolIconLayout]}
        contentFit="cover"
        source={require("../assets/simbol-plus.png")}
      />
      <Image
        style={[styles.simbolPlusIcon1, styles.simbolIconLayout]}
        contentFit="cover"
        source={require("../assets/simbol-plus.png")}
      />
      <Text style={[styles.harga25000, styles.hargaTypo]}>Harga: 25.000</Text>
      <Text style={[styles.creamyCheeseCake, styles.kopiKuonTypo]}>
        Creamy Cheese Cake
      </Text>
      <View style={[styles.orderListItem, styles.orderPosition]} />
      <Text style={[styles.catatan, styles.textTypo1]}>Catatan</Text>
      <Text style={styles.masukkanCatatan}>Masukkan Catatan</Text>
      <Text style={[styles.text, styles.textTypo1]}>...</Text>
      <Text style={[styles.kopiKuon, styles.kopiKuonTypo]}>Kopi Kuon</Text>
      <Text style={[styles.text1, styles.textTypo]}>1</Text>
      <Text style={[styles.text2, styles.textTypo]}>1</Text>
      <Text style={[styles.harga20000, styles.hargaTypo]}>Harga: 20.000</Text>
      <Image
        style={[styles.orderListInner, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/line-32.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  orderPosition: {
    borderRadius: Border.br_6xl,
    left: "1.79%",
    bottom: "0%",
    right: "0%",
    width: "98.21%",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  simbolIconLayout: {
    width: "2.99%",
    height: "2.21%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  hargaTypo: {
    textAlign: "center",
    fontFamily: FontFamily.bodyLargeSemibold,
    fontWeight: "500",
    fontStyle: "italic",
    lineHeight: 24,
    letterSpacing: 0,
    fontSize: FontSize.bodyLargeSemibold_size,
    color: Color.primary400,
    position: "absolute",
  },
  kopiKuonTypo: {
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
  textTypo1: {
    width: "20.9%",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    height: "8.41%",
    textAlign: "center",
    fontFamily: FontFamily.bodyLargeSemibold,
    fontWeight: "500",
    fontStyle: "italic",
    lineHeight: 24,
    letterSpacing: 0,
    fontSize: FontSize.bodyLargeSemibold_size,
    position: "absolute",
  },
  textTypo: {
    left: "47.46%",
    width: "8.36%",
    height: "3.1%",
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
  orderListChild: {
    height: "100%",
    top: "0%",
    backgroundColor: Color.colorSteelblue,
  },
  minus2Icon: {
    right: "52.84%",
    bottom: "75.22%",
    left: "43.88%",
    top: "22.35%",
    width: "3.28%",
    height: "2.43%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  minus1Icon: {
    right: "53.13%",
    bottom: "91.59%",
    left: "43.58%",
    top: "5.97%",
    width: "3.28%",
    height: "2.43%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  simbolPlusIcon: {
    right: "40.6%",
    bottom: "91.81%",
    left: "56.42%",
    top: "5.97%",
  },
  simbolPlusIcon1: {
    top: "22.12%",
    right: "40.3%",
    bottom: "75.66%",
    left: "56.72%",
  },
  harga25000: {
    left: "68.06%",
    top: "4.42%",
    textAlign: "center",
    fontFamily: FontFamily.bodyLargeSemibold,
    fontWeight: "500",
    fontStyle: "italic",
    lineHeight: 24,
    letterSpacing: 0,
    fontSize: FontSize.bodyLargeSemibold_size,
  },
  creamyCheeseCake: {
    width: "38.51%",
    left: "3.88%",
    height: "8.41%",
    justifyContent: "center",
    top: "4.42%",
  },
  orderListItem: {
    height: "37.83%",
    top: "62.17%",
    backgroundColor: Color.colorGray_300,
  },
  catatan: {
    top: "62.61%",
    left: "4.78%",
    color: Color.colorSteelblue,
  },
  masukkanCatatan: {
    width: "45.67%",
    top: "69.03%",
    left: "7.46%",
    textAlign: "left",
    alignItems: "center",
    display: "flex",
    height: "8.41%",
    color: Color.primary400,
    fontFamily: FontFamily.bodyLargeSemibold,
    fontWeight: "500",
    fontStyle: "italic",
    lineHeight: 24,
    letterSpacing: 0,
    fontSize: FontSize.bodyLargeSemibold_size,
    position: "absolute",
  },
  text: {
    top: "77.43%",
    left: "0%",
    color: Color.primary400,
    width: "20.9%",
  },
  kopiKuon: {
    height: "2.65%",
    width: "34.63%",
    left: "5.67%",
    top: "22.35%",
  },
  text1: {
    top: "5.75%",
  },
  text2: {
    top: "21.68%",
  },
  harga20000: {
    top: "21.02%",
    left: "68.36%",
  },
  orderListInner: {
    height: "0.22%",
    width: "91.04%",
    top: "84.73%",
    right: "2.69%",
    bottom: "15.04%",
    left: "6.27%",
  },
  orderList: {
    top: 0,
    left: 17,
    width: 335,
    height: 452,
    position: "absolute",
  },
});

export default FormContainer2;
