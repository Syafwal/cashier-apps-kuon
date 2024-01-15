import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import TransactionListContainer from "./TransactionListContainer";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const TransactionFilterContainer = () => {
  return (
    <View style={styles.component1}>
      <Text style={[styles.tittle, styles.tittleTypo]}>All Transactions</Text>
      <Image
        style={[styles.searchIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/search2.png")}
      />
      <TransactionListContainer
        itemImageUrl={require("../assets/icon5.png")}
        productImageUrl="Kemerdekaan 1"
        priceText="Rp. 25,000;"
        dateLabel="December 28"
        propTop="10.9%"
        propBottom="73.84%"
      />
      <View style={[styles.line, styles.linePosition]} />
      <TransactionListContainer
        itemImageUrl={require("../assets/icon6.png")}
        productImageUrl="Kopi Kuon"
        priceText="Rp. 20,000;"
        dateLabel="November 28"
        propTop="32.7%"
        propBottom="52.04%"
      />
      <View style={[styles.line1, styles.linePosition]} />
      <View style={[styles.line2, styles.linePosition]} />
      <View style={[styles.name, styles.nameFlexBox]}>
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/icon6.png")}
        />
        <View style={styles.textName}>
          <Text style={[styles.kopiKuon, styles.rp20000Typo1]}>Kopi Kuon</Text>
          <Text style={[styles.payment, styles.paymentTypo]}>Payment</Text>
        </View>
      </View>
      <View style={[styles.textName1, styles.textLayout]}>
        <Text style={[styles.rp20000, styles.rp20000Typo]}>Rp. 20,000;</Text>
        <Text style={[styles.november28, styles.rp20000Typo]}>November 28</Text>
      </View>
      <View style={[styles.name1, styles.nameFlexBox]}>
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/icon6.png")}
        />
        <View style={styles.textName}>
          <Text style={[styles.kopiKuon, styles.rp20000Typo1]}>Kopi Kuon</Text>
          <Text style={[styles.payment, styles.paymentTypo]}>Payment</Text>
        </View>
      </View>
      <View style={[styles.textName3, styles.textLayout]}>
        <Text style={[styles.rp20000, styles.rp20000Typo]}>Rp. 20,000;</Text>
        <Text style={[styles.november28, styles.rp20000Typo]}>November 28</Text>
      </View>
      <Image
        style={[styles.gradientIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/gradient.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  tittleTypo: {
    textAlign: "left",
    fontFamily: FontFamily.bodyLargeSemibold,
    letterSpacing: 0,
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  linePosition: {
    borderTopWidth: 1,
    borderColor: Color.colorWhitesmoke_100,
    borderStyle: "solid",
    left: "5.47%",
    right: "7.07%",
    width: "87.47%",
    height: "0.27%",
    position: "absolute",
  },
  nameFlexBox: {
    alignItems: "center",
    flexDirection: "row",
    width: "34.93%",
    height: "13.08%",
    position: "absolute",
  },
  rp20000Typo1: {
    lineHeight: 21,
    fontSize: FontSize.bodyMediumBold_size,
    color: Color.colorSteelblue,
    fontWeight: "700",
  },
  paymentTypo: {
    marginTop: 4,
    color: Color.greyscale500,
    fontWeight: "500",
    lineHeight: 18,
    fontSize: FontSize.bodySmallMedium_size,
  },
  textLayout: {
    alignItems: "flex-end",
    width: "20.27%",
    height: "11.72%",
    position: "absolute",
  },
  rp20000Typo: {
    textAlign: "right",
    fontFamily: FontFamily.bodyLargeSemibold,
    letterSpacing: 0,
  },
  tittle: {
    fontSize: FontSize.headingH6_size,
    lineHeight: 24,
    color: Color.colorSteelblue,
    fontWeight: "700",
    textAlign: "left",
    fontFamily: FontFamily.bodyLargeSemibold,
    letterSpacing: 0,
    left: "5.6%",
    top: "0%",
    position: "absolute",
  },
  searchIcon: {
    height: "6.54%",
    width: "6.4%",
    bottom: "93.46%",
    left: "86.4%",
    right: "7.2%",
    top: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  line: {
    top: "29.29%",
    bottom: "70.44%",
  },
  line1: {
    top: "51.09%",
    bottom: "48.64%",
  },
  line2: {
    top: "54.36%",
    bottom: "45.37%",
  },
  icon: {
    borderRadius: Border.br_xs,
    width: 48,
    height: 48,
    overflow: "hidden",
  },
  kopiKuon: {
    textAlign: "left",
    fontFamily: FontFamily.bodyLargeSemibold,
    letterSpacing: 0,
  },
  payment: {
    textAlign: "left",
    fontFamily: FontFamily.bodyLargeSemibold,
    letterSpacing: 0,
  },
  textName: {
    marginLeft: 16,
  },
  name: {
    top: "55.59%",
    right: "59.47%",
    bottom: "31.34%",
    left: "5.6%",
    alignItems: "center",
    flexDirection: "row",
    width: "34.93%",
    height: "13.08%",
  },
  rp20000: {
    lineHeight: 21,
    fontSize: FontSize.bodyMediumBold_size,
    color: Color.colorSteelblue,
    fontWeight: "700",
  },
  november28: {
    marginTop: 4,
    color: Color.greyscale500,
    fontWeight: "500",
    lineHeight: 18,
    fontSize: FontSize.bodySmallMedium_size,
  },
  textName1: {
    top: "56.27%",
    bottom: "32.02%",
    left: "72.53%",
    right: "7.2%",
  },
  name1: {
    top: "76.57%",
    right: "58.93%",
    bottom: "10.35%",
    left: "6.13%",
  },
  textName3: {
    top: "77.25%",
    right: "6.67%",
    bottom: "11.04%",
    left: "73.07%",
  },
  gradientIcon: {
    height: "26.98%",
    width: "100%",
    top: "73.02%",
    right: "0%",
    bottom: "0%",
    left: "0%",
  },
  component1: {
    top: 445,
    left: 3,
    width: 375,
    height: 367,
    position: "absolute",
  },
});

export default TransactionFilterContainer;
