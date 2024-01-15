import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import SectionCardForm from "../components/SectionCardForm";
import PriceFilterContainer from "../components/PriceFilterContainer";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const TampilanPesanan = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.tampilanPesanan}>
      <View style={styles.frame}>
        <View style={styles.homeIndicator}>
          <View style={styles.homeIndicatorChild} />
        </View>
      </View>
      <View style={styles.frame1}>
        <View style={styles.frame2}>
          <Pressable
            style={styles.button}
            onPress={() => navigation.navigate("OrderBerhasil")}
          >
            <Image
              style={styles.bill11}
              contentFit="cover"
              source={require("../assets/bill-1-1.png")}
            />
            <Text style={[styles.total45000, styles.bayarTypo]}>
              Total: 45.000
            </Text>
            <Text style={[styles.bayar, styles.bayarTypo]}>Bayar</Text>
          </Pressable>
        </View>
        <View style={styles.frame3}>
          <SectionCardForm
            profileImageUrl={require("../assets/download-1-1.png")}
            displayName="Anton"
            itemId="ID 554490"
            textTop={0}
            textLeft={0}
          />
          <PriceFilterContainer />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bayarTypo: {
    marginLeft: 10,
    display: "flex",
    textAlign: "center",
    color: Color.colorGray_200,
    fontFamily: FontFamily.bodyLargeSemibold,
    fontWeight: "500",
    fontStyle: "italic",
    lineHeight: 24,
    letterSpacing: 0,
    fontSize: FontSize.bodyLargeSemibold_size,
    justifyContent: "center",
    alignItems: "center",
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
    left: 1,
    width: 375,
    top: 0,
    height: 34,
    position: "absolute",
  },
  frame: {
    top: 778,
    width: 376,
    height: 34,
    left: -1,
    position: "absolute",
    overflow: "hidden",
  },
  bill11: {
    width: 26,
    height: 26,
  },
  total45000: {
    width: 86,
    height: 20,
  },
  bayar: {
    width: 68,
    height: 22,
  },
  button: {
    left: 73,
    borderRadius: Border.br_base,
    backgroundColor: Color.colorSteelblue,
    width: 239,
    flexDirection: "row",
    padding: Padding.p_5xs,
    justifyContent: "center",
    alignItems: "center",
    height: 56,
    top: 0,
    position: "absolute",
  },
  frame2: {
    top: 732,
    width: 312,
    height: 56,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  frame3: {
    height: 683,
    left: 0,
    width: 389,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  frame1: {
    top: -18,
    height: 788,
    width: 389,
    left: -1,
    position: "absolute",
    overflow: "hidden",
  },
  tampilanPesanan: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default TampilanPesanan;
