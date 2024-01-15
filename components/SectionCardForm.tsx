import React, { useMemo } from "react";
import { StyleSheet, View, Text, ImageSourcePropType } from "react-native";
import { Image } from "expo-image";
import Property1default from "./Property1default";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

type SectionCardFormType = {
  profileImageUrl?: ImageSourcePropType;
  displayName?: string;
  itemId?: string;

  /** Style props */
  textTop?: number | string;
  textLeft?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const SectionCardForm = ({
  profileImageUrl,
  displayName,
  itemId,
  textTop,
  textLeft,
}: SectionCardFormType) => {
  const frameViewStyle = useMemo(() => {
    return {
      ...getStyleValue("top", textTop),
      ...getStyleValue("left", textLeft),
    };
  }, [textTop, textLeft]);

  return (
    <View style={[styles.frameParent, styles.parentPosition, frameViewStyle]}>
      <View style={[styles.rectangleParent, styles.parentPosition]}>
        <View style={[styles.frameChild, styles.frameChildLayout]} />
        <Image
          style={[styles.bgCafeAwal, styles.frameChildLayout]}
          contentFit="cover"
          source={require("../assets/bg-cafe-awal.png")}
        />
        <Image
          style={styles.notifIcon}
          contentFit="cover"
          source={require("../assets/notif.png")}
        />
      </View>
      <Image
        style={styles.icon}
        contentFit="cover"
        source={require("../assets/icon.png")}
      />
      <View style={[styles.logoKuon21Parent, styles.frameItemLayout]}>
        <Image
          style={styles.logoKuon21}
          contentFit="cover"
          source={require("../assets/logo-kuon2-1.png")}
        />
        <Image
          style={[styles.frameItem, styles.frameItemLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-1.png")}
        />
        <Image
          style={styles.logoKuon1}
          contentFit="cover"
          source={require("../assets/logo-kuon-1.png")}
        />
      </View>
      <Property1default
        mobileSignal={require("../assets/mobile-signal1.png")}
        wifi={require("../assets/wifi1.png")}
        battery={require("../assets/battery1.png")}
        property1defaultPosition="absolute"
        property1defaultTop={18}
        property1defaultLeft={1}
        property1defaultWidth={375}
        textColor="#000"
      />
      <Image
        style={styles.searchIcon}
        contentFit="cover"
        source={require("../assets/search1.png")}
      />
      <Text style={styles.silahkanPilihNegara}>Silahkan pilih negara kamu</Text>
      <View style={styles.avatarParent}>
        <Image
          style={styles.avatarIconPosition}
          contentFit="cover"
          source={require("../assets/avatar.png")}
        />
        <Image
          style={[styles.download11, styles.avatarIconPosition]}
          contentFit="cover"
          source={profileImageUrl}
        />
        <Text style={[styles.anton, styles.antonFlexBox]}>{displayName}</Text>
        <Text style={[styles.id554490, styles.antonFlexBox]}>{itemId}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentPosition: {
    height: 214,
    left: 0,
    top: 0,
    position: "absolute",
  },
  frameChildLayout: {
    height: 213,
    width: 375,
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  frameItemLayout: {
    height: 35,
    position: "absolute",
  },
  avatarIconPosition: {
    width: 50,
    height: 50,
    left: 0,
    top: 0,
    position: "absolute",
  },
  antonFlexBox: {
    height: 24,
    justifyContent: "center",
    textAlign: "center",
    color: Color.white,
    fontWeight: "700",
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.bodyLargeSemibold,
    letterSpacing: 0,
    position: "absolute",
  },
  frameChild: {
    left: 1,
    backgroundColor: Color.colorSteelblue,
    top: 1,
  },
  bgCafeAwal: {
    left: 0,
    top: 0,
  },
  notifIcon: {
    top: 101,
    left: 289,
    width: 23,
    height: 22,
    position: "absolute",
  },
  rectangleParent: {
    width: 376,
  },
  icon: {
    top: 91,
    left: 318,
    borderRadius: Border.br_xs,
    width: 40,
    height: 40,
    overflow: "hidden",
    position: "absolute",
  },
  logoKuon21: {
    top: 10,
    left: 40,
    width: 69,
    height: 23,
    position: "absolute",
  },
  frameItem: {
    width: 35,
    left: 0,
    top: 0,
  },
  logoKuon1: {
    left: 4,
    width: 28,
    height: 29,
    top: 1,
    position: "absolute",
  },
  logoKuon21Parent: {
    top: 171,
    left: 133,
    width: 109,
  },
  searchIcon: {
    top: 97,
    left: 256,
    width: 29,
    height: 30,
    position: "absolute",
  },
  silahkanPilihNegara: {
    top: 122,
    left: 100,
    color: "transparent",
    textAlign: "left",
    width: 289,
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.bodyLargeSemibold,
    letterSpacing: 0,
    lineHeight: 24,
    fontSize: FontSize.bodyLargeSemibold_size,
    position: "absolute",
  },
  download11: {
    borderRadius: Border.br_5xl_5,
  },
  anton: {
    top: 9,
    left: 49,
    width: 68,
    lineHeight: 24,
    fontSize: FontSize.bodyLargeSemibold_size,
    height: 24,
    justifyContent: "center",
    textAlign: "center",
    color: Color.white,
    fontWeight: "700",
  },
  id554490: {
    top: 24,
    left: 39,
    fontSize: FontSize.size_3xs,
    lineHeight: 15,
    width: 88,
  },
  avatarParent: {
    top: 87,
    left: 16,
    width: 127,
    height: 50,
    position: "absolute",
  },
  frameParent: {
    width: 389,
  },
});

export default SectionCardForm;
