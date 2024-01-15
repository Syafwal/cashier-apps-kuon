import * as React from "react";
import { StyleSheet, View } from "react-native";
import SectionCardForm from "../components/SectionCardForm";
import StatistikContainer from "../components/StatistikContainer";
import { Border, Color } from "../GlobalStyles";

const TampilanHomeAdmin = () => {
  return (
    <View style={styles.tampilanHomeAdmin}>
      <View style={styles.homeIndicator}>
        <View style={styles.homeIndicatorChild} />
      </View>
      <SectionCardForm
        profileImageUrl={require("../assets/download-1-11.png")}
        displayName="Adjie"
        itemId="ID 664851"
        textTop={-18}
        textLeft={-1}
      />
      <StatistikContainer />
    </View>
  );
};

const styles = StyleSheet.create({
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
    top: 778,
    left: 0,
    width: 375,
    height: 34,
    position: "absolute",
  },
  tampilanHomeAdmin: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default TampilanHomeAdmin;
