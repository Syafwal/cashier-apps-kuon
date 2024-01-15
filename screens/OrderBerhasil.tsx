import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const OrderBerhasil = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <Pressable
      style={styles.orderBerhasil}
      onPress={() => navigation.navigate("TampilanKasirTampilanAwal")}
    >
      <Image
        style={[styles.icBottomsheet1Icon, styles.icBottomsheet1IconPosition]}
        contentFit="cover"
        source={require("../assets/ic-bottomsheet-1.png")}
      />
      <Text style={[styles.orderBerhasil1, styles.orderClr]}>
        ORDER BERHASIL
      </Text>
      <Text
        style={[styles.orderBerhasilSilahkan, styles.printInvoiceFlexBox]}
      >{`Order berhasil silahkan cetak
invoice anda di bawah ini`}</Text>
      <View
        style={[styles.orderBerhasilChild, styles.icBottomsheet1IconPosition]}
      />
      <Text style={[styles.printInvoice, styles.printInvoiceFlexBox]}>
        PRINT INVOICE
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  icBottomsheet1IconPosition: {
    left: 96,
    position: "absolute",
  },
  orderClr: {
    color: Color.primary400,
    fontFamily: FontFamily.inter,
  },
  printInvoiceFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  icBottomsheet1Icon: {
    top: 226,
    width: 200,
    height: 200,
  },
  orderBerhasil1: {
    top: 432,
    left: 130,
    fontSize: FontSize.bodyLargeSemibold_size,
    fontWeight: "600",
    textAlign: "left",
    position: "absolute",
    color: Color.primary400,
    fontFamily: FontFamily.inter,
  },
  orderBerhasilSilahkan: {
    top: 459,
    left: 118,
    fontSize: FontSize.bodySmallMedium_size,
    fontWeight: "300",
    color: Color.primary400,
    fontFamily: FontFamily.inter,
  },
  orderBerhasilChild: {
    top: 513,
    borderRadius: 2,
    backgroundColor: Color.colorSteelblue,
    width: 208,
    height: 42,
  },
  printInvoice: {
    top: 525,
    left: 150,
    fontSize: FontSize.bodyMediumBold_size,
    fontFamily: FontFamily.poppins,
    color: Color.white,
  },
  orderBerhasil: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default OrderBerhasil;
