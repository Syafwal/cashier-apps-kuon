import * as React from "react";
import { StyleSheet, View } from "react-native";
import SectionFilter from "../components/SectionFilter";
import CreamyCheeseCakeForm from "../components/CreamyCheeseCakeForm";
import PriceFilterContainer1 from "../components/PriceFilterContainer1";
import { Border, Color } from "../GlobalStyles";

const TampilanKasirTampilanAwal = () => {
  return (
    <View style={styles.tampilanKasirTampilanAwal}>
      <View style={styles.homeIndicator}>
        <View style={styles.homeIndicatorChild} />
      </View>
      <SectionFilter />
      <View style={[styles.rectangleParent, styles.frameChildLayout]}>
        <View style={[styles.frameChild, styles.frameChildLayout]} />
        <CreamyCheeseCakeForm />
      </View>
      <PriceFilterContainer1 />
    </View>
  );
};

const styles = StyleSheet.create({
  frameChildLayout: {
    height: 452,
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
    top: 986,
    left: -6,
    width: 375,
    height: 34,
    position: "absolute",
  },
  frameChild: {
    top: 0,
    left: 0,
    borderRadius: 18,
    backgroundColor: Color.colorGainsboro_200,
    width: 358,
  },
  rectangleParent: {
    top: 204,
    left: 9,
    width: 363,
  },
  tampilanKasirTampilanAwal: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 1020,
    overflow: "hidden",
  },
});

export default TampilanKasirTampilanAwal;
