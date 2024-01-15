import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Linking } from "react-native";
import Property1nameProperty2fi from "./Property1nameProperty2fi";
import { Padding, Border, FontFamily, FontSize, Color } from "../GlobalStyles";

const Container1 = () => {
  return (
    <View style={styles.nameParent}>
      <Property1nameProperty2fi
        useroutline={require("../assets/useroutline1.png")}
        anabellaAngela="Adjie"
        property1nameProperty2fiPosition="absolute"
        property1nameProperty2fiBackgroundColor="#01789a"
        property1nameProperty2fiHeight="20%"
        property1nameProperty2fiWidth="100%"
        property1nameProperty2fiTop="0%"
        property1nameProperty2fiRight="0%"
        property1nameProperty2fiBottom="80%"
        property1nameProperty2fiLeft="0%"
        anabellaAngelaColor="rgba(255, 255, 255, 0.9)"
      />
      <View style={[styles.email, styles.emailLayout]}>
        <Image
          style={[styles.mailIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/mail.png")}
        />
        <Text style={[styles.admin1gmailcom, styles.buttonTypo]}>
          Admin1
          <Text style={styles.gmailcom}>@gmail.com</Text>
        </Text>
      </View>
      <View style={[styles.password, styles.emailLayout]}>
        <View style={styles.parentFlexBox}>
          <Image
            style={[styles.mailIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/lock.png")}
          />
          <View style={[styles.ellipseParent, styles.parentFlexBox]}>
            <Image
              style={styles.frameLayout}
              contentFit="cover"
              source={require("../assets/ellipse-415.png")}
            />
            <Image
              style={[styles.frameItem, styles.frameLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-415.png")}
            />
            <Image
              style={[styles.frameItem, styles.frameLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-415.png")}
            />
            <Image
              style={[styles.frameItem, styles.frameLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-415.png")}
            />
            <View style={styles.lineView} />
          </View>
        </View>
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/eyeoff1.png")}
        />
      </View>
      <View style={[styles.buttonSignUp, styles.parentFlexBox]}>
        <Text style={[styles.button, styles.buttonTypo]}>Sign Up</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  emailLayout: {
    padding: Padding.p_base,
    alignItems: "center",
    flexDirection: "row",
    borderRadius: Border.br_base,
    left: "0%",
    right: "0%",
    width: "100%",
    height: "20%",
    position: "absolute",
  },
  iconLayout: {
    overflow: "hidden",
    height: 24,
    width: 24,
  },
  buttonTypo: {
    fontFamily: FontFamily.bodyLargeSemibold,
    lineHeight: 24,
    letterSpacing: 0,
    fontSize: FontSize.bodyLargeSemibold_size,
  },
  parentFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  frameLayout: {
    height: 10,
    width: 10,
  },
  mailIcon: {
    display: "none",
  },
  gmailcom: {
    textDecoration: "underline",
  },
  admin1gmailcom: {
    fontWeight: "600",
    color: Color.colorGray_200,
    textAlign: "left",
    marginLeft: 12,
  },
  email: {
    top: "25.71%",
    bottom: "54.29%",
    backgroundColor: Color.colorSteelblue,
  },
  frameItem: {
    marginLeft: 6,
  },
  lineView: {
    borderColor: Color.greyscale900,
    borderRightWidth: 1,
    width: 1,
    height: 21,
    marginLeft: 6,
    borderStyle: "solid",
  },
  ellipseParent: {
    marginLeft: 12,
  },
  password: {
    top: "51.43%",
    bottom: "28.57%",
    backgroundColor: Color.greyscale50,
    borderColor: Color.primary400,
    borderWidth: 1,
    justifyContent: "space-between",
    borderStyle: "solid",
  },
  button: {
    fontWeight: "700",
    color: Color.white,
    textAlign: "center",
  },
  buttonSignUp: {
    top: "80%",
    bottom: "0%",
    justifyContent: "center",
    padding: Padding.p_5xs,
    backgroundColor: Color.colorSteelblue,
    borderRadius: Border.br_base,
    left: "0%",
    right: "0%",
    width: "100%",
    height: "20%",
    flexDirection: "row",
    position: "absolute",
  },
  nameParent: {
    top: 216,
    left: 24,
    width: 327,
    height: 280,
    position: "absolute",
  },
});

export default Container1;
