import React, { useMemo } from "react";
import { Text, StyleSheet, View, ImageSourcePropType } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

type Property1defaultType = {
  mobileSignal?: ImageSourcePropType;
  wifi?: ImageSourcePropType;
  battery?: ImageSourcePropType;

  /** Style props */
  property1defaultPosition?: string;
  property1defaultTop?: number | string;
  property1defaultLeft?: number | string;
  property1defaultWidth?: number | string;
  textColor?: string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Property1default = ({
  mobileSignal,
  wifi,
  battery,
  property1defaultPosition,
  property1defaultTop,
  property1defaultLeft,
  property1defaultWidth,
  textColor,
}: Property1defaultType) => {
  const property1defaultStyle = useMemo(() => {
    return {
      ...getStyleValue("position", property1defaultPosition),
      ...getStyleValue("top", property1defaultTop),
      ...getStyleValue("left", property1defaultLeft),
      ...getStyleValue("width", property1defaultWidth),
    };
  }, [
    property1defaultPosition,
    property1defaultTop,
    property1defaultLeft,
    property1defaultWidth,
  ]);

  const textStyle = useMemo(() => {
    return {
      ...getStyleValue("color", textColor),
    };
  }, [textColor]);

  return (
    <View style={[styles.property1default, property1defaultStyle]}>
      <Text style={[styles.text, styles.iconPosition, textStyle]}>9:41</Text>
      <Image
        style={[styles.mobileSignalIcon, styles.iconPosition]}
        contentFit="cover"
        source={mobileSignal}
      />
      <Image
        style={[styles.wifiIcon, styles.iconPosition]}
        contentFit="cover"
        source={wifi}
      />
      <Image
        style={[styles.batteryIcon, styles.iconPosition]}
        contentFit="cover"
        source={battery}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconPosition: {
    top: "50%",
    position: "absolute",
  },
  text: {
    marginTop: -11,
    left: 23,
    fontSize: FontSize.bodyLargeSemibold_size,
    letterSpacing: 0,
    lineHeight: 22,
    fontWeight: "600",
    fontFamily: FontFamily.bodyLargeSemibold1,
    color: Color.greyscale900,
    textAlign: "left",
  },
  mobileSignalIcon: {
    marginTop: -1.5,
    right: 76,
    width: 18,
    height: 10,
  },
  wifiIcon: {
    marginTop: -3,
    right: 56,
    width: 15,
    height: 11,
  },
  batteryIcon: {
    marginTop: -4,
    right: 23,
    width: 27,
    height: 13,
  },
  property1default: {
    width: 375,
    height: 44,
  },
});

export default Property1default;
