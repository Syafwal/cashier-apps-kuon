import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const FormContainer = () => {
  return (
    <View style={styles.chart}>
      <View style={[styles.month, styles.monthFlexBox]}>
        <Text style={[styles.jan, styles.janTypo]}>Jan</Text>
        <Text style={[styles.jan, styles.janTypo]}>Feb</Text>
        <Text style={[styles.mar, styles.janTypo]}>Mar</Text>
        <Text style={[styles.apr, styles.aprTypo]}>Apr</Text>
        <Text style={[styles.jan, styles.janTypo]}>May</Text>
        <Text style={[styles.jan, styles.janTypo]}>Jun</Text>
      </View>
      <View style={[styles.amount, styles.monthFlexBox]}>
        <Text style={[styles.jan, styles.janTypo]}>Rp2Jt</Text>
        <Text style={[styles.jan, styles.janTypo]}>Rp1,2Jt</Text>
        <Text style={[styles.jan, styles.janTypo]}>Rp500K</Text>
        <Text style={[styles.jan, styles.janTypo]}>Rp100K</Text>
        <Text style={[styles.jan, styles.janTypo]}>Rp0</Text>
      </View>
      <View style={styles.lineHorizontal}>
        <View style={[styles.line, styles.lineLayout]} />
        <View style={[styles.line1, styles.lineLayout]} />
        <View style={[styles.line2, styles.lineLayout]} />
        <View style={styles.line3} />
        <View style={[styles.line4, styles.lineLayout]} />
      </View>
      <View style={styles.bar}>
        <View style={[styles.bar1, styles.barLayout]} />
        <View style={[styles.bar2, styles.barLayout]} />
        <View style={[styles.bar3, styles.barLayout]} />
        <View style={[styles.bar4, styles.barLayout]} />
        <View style={[styles.bar5, styles.barLayout]} />
        <View style={[styles.bar6, styles.barLayout]} />
        <View style={[styles.amount1, styles.amount1Layout]}>
          <Image
            style={styles.amount1Layout}
            contentFit="cover"
            source={require("../assets/union.png")}
          />
          <Text style={[styles.rp1000000, styles.aprTypo]}>Rp. 1.000.000</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  monthFlexBox: {
    justifyContent: "space-between",
    position: "absolute",
  },
  janTypo: {
    textAlign: "left",
    fontFamily: FontFamily.bodyLargeSemibold,
    letterSpacing: 0,
    lineHeight: 18,
    fontSize: FontSize.bodySmallMedium_size,
  },
  aprTypo: {
    textAlign: "center",
    fontFamily: FontFamily.bodyLargeSemibold,
    letterSpacing: 0,
  },
  lineLayout: {
    height: 1,
    width: 282,
    borderTopWidth: 1,
    borderRadius: 0.001,
    borderColor: Color.colorGainsboro_100,
    borderStyle: "dashed",
    left: 0,
    position: "absolute",
  },
  barLayout: {
    width: 24,
    borderTopRightRadius: Border.br_5xs,
    borderTopLeftRadius: Border.br_5xs,
    position: "absolute",
  },
  amount1Layout: {
    height: 39,
    width: 105,
  },
  jan: {
    color: Color.greyscale500,
  },
  mar: {
    fontWeight: "700",
    color: Color.colorSteelblue,
  },
  apr: {
    fontWeight: "500",
    color: Color.greyscale500,
    lineHeight: 18,
    fontSize: FontSize.bodySmallMedium_size,
    textAlign: "center",
  },
  month: {
    top: 214,
    width: 267,
    flexDirection: "row",
    alignItems: "center",
    left: 0,
  },
  amount: {
    left: 297,
    height: 206,
    top: 0,
  },
  line: {
    top: 188,
  },
  line1: {
    top: 141,
  },
  line2: {
    top: 94,
  },
  line3: {
    top: 47,
    height: 1,
    width: 282,
    borderTopWidth: 1,
    borderRadius: 0.001,
    borderColor: Color.colorGainsboro_100,
    borderStyle: "dashed",
    left: 0,
    position: "absolute",
  },
  line4: {
    top: 0,
  },
  lineHorizontal: {
    top: 9,
    width: 281,
    height: 188,
    left: 0,
    position: "absolute",
  },
  bar1: {
    top: 68,
    height: 106,
    backgroundColor: Color.colorDimgray,
    width: 24,
    borderTopRightRadius: Border.br_5xs,
    borderTopLeftRadius: Border.br_5xs,
    left: 0,
  },
  bar2: {
    left: 45,
    height: 80,
    backgroundColor: Color.colorDimgray,
    width: 24,
    borderTopRightRadius: Border.br_5xs,
    borderTopLeftRadius: Border.br_5xs,
    top: 94,
  },
  bar3: {
    left: 96,
    backgroundColor: Color.colorSteelblue,
    height: 127,
    width: 24,
    borderTopRightRadius: Border.br_5xs,
    borderTopLeftRadius: Border.br_5xs,
    top: 47,
  },
  bar4: {
    top: 63,
    left: 147,
    height: 111,
    backgroundColor: Color.colorDimgray,
    width: 24,
    borderTopRightRadius: Border.br_5xs,
    borderTopLeftRadius: Border.br_5xs,
  },
  bar5: {
    top: 2,
    left: 194,
    height: 172,
    backgroundColor: Color.colorDimgray,
    width: 24,
    borderTopRightRadius: Border.br_5xs,
    borderTopLeftRadius: Border.br_5xs,
  },
  bar6: {
    top: 111,
    left: 245,
    height: 63,
    backgroundColor: Color.colorDimgray,
    width: 24,
    borderTopRightRadius: Border.br_5xs,
    borderTopLeftRadius: Border.br_5xs,
  },
  rp1000000: {
    top: 6,
    left: 6,
    fontSize: FontSize.bodyMediumBold_size,
    lineHeight: 21,
    fontWeight: "600",
    color: Color.white,
    position: "absolute",
  },
  amount1: {
    left: 56,
    top: 0,
    position: "absolute",
  },
  bar: {
    top: 23,
    width: 269,
    height: 174,
    left: 0,
    position: "absolute",
  },
  chart: {
    top: 181,
    left: 24,
    width: 341,
    height: 232,
    position: "absolute",
  },
});

export default FormContainer;
