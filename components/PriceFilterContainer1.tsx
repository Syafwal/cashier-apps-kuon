import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const PriceFilterContainer1 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <Pressable
      style={styles.button}
      onPress={() => navigation.navigate("TampilanPesanan")}
    >
      <Text style={[styles.bayarDisini, styles.harga25000Typo]}>
        Bayar Disini :
      </Text>
      <Text style={[styles.harga25000, styles.harga25000Typo]}>
        Harga: 25.000
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  harga25000Typo: {
    textAlign: "center",
    color: Color.colorGray_200,
    fontFamily: FontFamily.bodyLargeSemibold,
    fontWeight: "500",
    fontStyle: "italic",
    letterSpacing: 0,
  },
  bayarDisini: {
    fontSize: FontSize.size_2xs,
    lineHeight: 17,
  },
  harga25000: {
    fontSize: FontSize.headingH6_size,
    lineHeight: 30,
    marginLeft: 10,
  },
  button: {
    position: "absolute",
    top: 930,
    left: 62,
    borderRadius: Border.br_base,
    backgroundColor: Color.colorSteelblue,
    width: 239,
    height: 56,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Padding.p_5xs,
    paddingRight: Padding.p_5xs,
    paddingBottom: Padding.p_5xs,
  },
});

export default PriceFilterContainer1;
