import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View } from "react-native";
import AmountForm from "../components/AmountForm";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import FormContainer from "../components/FormContainer";
import TransactionFilterContainer from "../components/TransactionFilterContainer";
import HomeIndicator from "../components/HomeIndicator";
import Property1default from "../components/Property1default";
import { Border, FontSize, FontFamily, Color } from "../GlobalStyles";

const DetailPenjualanUntukKaryawa = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.detailPenjualanUntukKaryawa}>
      <AmountForm />
      <View style={styles.appBar}>
        <Pressable
          style={[styles.icon, styles.iconLayout1]}
          onPress={() => navigation.navigate("TampilanKasirTampilanAwal")}
        >
          <Image
            style={[styles.icon1, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/icon3.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.icon, styles.iconLayout1]}
          onPress={() => navigation.navigate("TampilanKasirTampilanAwal")}
        >
          <Image
            style={[styles.icon1, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/icon3.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.icon, styles.iconLayout1]}
          onPress={() => navigation.navigate("TampilanKasirTampilanAwal")}
        >
          <Image
            style={[styles.icon1, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/icon3.png")}
          />
        </Pressable>
        <Image
          style={[styles.icon6, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/icon4.png")}
        />
        <Text style={styles.penjualan}>Penjualan</Text>
      </View>
      <FormContainer />
      <TransactionFilterContainer />
      <HomeIndicator
        homeIndicatorPosition="absolute"
        homeIndicatorTop={778}
        homeIndicatorLeft={0}
        homeIndicatorWidth={375}
        homeIndicatorHeight={34}
        rectangleViewBackgroundColor="#1d3a70"
      />
      <Property1default
        mobileSignal={require("../assets/mobile-signal1.png")}
        wifi={require("../assets/wifi1.png")}
        battery={require("../assets/battery1.png")}
        property1defaultPosition="absolute"
        property1defaultTop={0}
        property1defaultLeft={0}
        property1defaultWidth={375}
        textColor="#000"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout1: {
    height: 40,
    width: 40,
    top: 8,
    position: "absolute",
  },
  iconLayout: {
    borderRadius: Border.br_xs,
    overflow: "hidden",
  },
  icon1: {
    height: "100%",
    width: "100%",
  },
  icon: {
    left: 24,
  },
  icon6: {
    left: 311,
    height: 40,
    width: 40,
    top: 8,
    position: "absolute",
  },
  penjualan: {
    top: 16,
    left: 142,
    fontSize: FontSize.headingH6_size,
    letterSpacing: 0,
    lineHeight: 24,
    fontWeight: "700",
    fontFamily: FontFamily.bodyLargeSemibold,
    color: Color.colorSteelblue,
    textAlign: "center",
    position: "absolute",
  },
  appBar: {
    top: 32,
    left: 0,
    width: 375,
    height: 56,
    position: "absolute",
    overflow: "hidden",
  },
  detailPenjualanUntukKaryawa: {
    backgroundColor: Color.white,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default DetailPenjualanUntukKaryawa;
