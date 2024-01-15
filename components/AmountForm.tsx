import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Border, Color } from "../GlobalStyles";

const AmountForm = () => {
  return (
    <View style={[styles.amount, styles.amountFlexBox]}>
      <View>
        <Text style={styles.rp1000000}>Rp. 1.000.000</Text>
        <View style={[styles.percen, styles.amountFlexBox]}>
          <View style={styles.amountFlexBox}>
            <Image
              style={styles.arrowNarrowDownIcon}
              contentFit="cover"
              source={require("../assets/arrownarrowdown1.png")}
            />
            <Text style={[styles.text, styles.textTypo]}>25.6%</Text>
          </View>
          <Text style={[styles.fromLastMonth, styles.textTypo]}>
            from last month
          </Text>
        </View>
      </View>
      <View style={styles.chart}>
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/icon1.png")}
        />
        <Image
          style={[styles.icon1, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/icon2.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  amountFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  textTypo: {
    lineHeight: 18,
    fontSize: FontSize.bodySmallMedium_size,
    textAlign: "left",
    fontFamily: FontFamily.bodyLargeSemibold,
    letterSpacing: 0,
  },
  iconLayout: {
    height: 32,
    width: 32,
    borderRadius: Border.br_5xs,
    overflow: "hidden",
  },
  rp1000000: {
    fontSize: FontSize.headingH4_size,
    lineHeight: 31,
    fontWeight: "700",
    textAlign: "left",
    fontFamily: FontFamily.bodyLargeSemibold,
    letterSpacing: 0,
    color: Color.colorSteelblue,
  },
  arrowNarrowDownIcon: {
    width: 14,
    height: 14,
    overflow: "hidden",
  },
  text: {
    fontWeight: "500",
    marginLeft: 4,
    color: Color.colorSteelblue,
    lineHeight: 18,
    fontSize: FontSize.bodySmallMedium_size,
  },
  fromLastMonth: {
    color: Color.greyscale500,
    marginLeft: 8,
  },
  percen: {
    marginTop: 4,
  },
  icon1: {
    marginLeft: 7,
  },
  chart: {
    flexDirection: "row",
  },
  amount: {
    position: "absolute",
    top: 112,
    left: 24,
    width: 327,
    justifyContent: "space-between",
  },
});

export default AmountForm;
