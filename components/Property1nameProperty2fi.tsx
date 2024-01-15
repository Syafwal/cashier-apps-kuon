import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, ImageSourcePropType } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

type Property1nameProperty2fiType = {
  useroutline?: ImageSourcePropType;
  anabellaAngela?: string;

  /** Style props */
  property1nameProperty2fiPosition?: string;
  property1nameProperty2fiBackgroundColor?: string;
  property1nameProperty2fiHeight?: number | string;
  property1nameProperty2fiWidth?: number | string;
  property1nameProperty2fiTop?: number | string;
  property1nameProperty2fiRight?: number | string;
  property1nameProperty2fiBottom?: number | string;
  property1nameProperty2fiLeft?: number | string;
  anabellaAngelaColor?: string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Property1nameProperty2fi = ({
  useroutline,
  anabellaAngela,
  property1nameProperty2fiPosition,
  property1nameProperty2fiBackgroundColor,
  property1nameProperty2fiHeight,
  property1nameProperty2fiWidth,
  property1nameProperty2fiTop,
  property1nameProperty2fiRight,
  property1nameProperty2fiBottom,
  property1nameProperty2fiLeft,
  anabellaAngelaColor,
}: Property1nameProperty2fiType) => {
  const property1nameProperty2fiStyle = useMemo(() => {
    return {
      ...getStyleValue("position", property1nameProperty2fiPosition),
      ...getStyleValue(
        "backgroundColor",
        property1nameProperty2fiBackgroundColor
      ),
      ...getStyleValue("height", property1nameProperty2fiHeight),
      ...getStyleValue("width", property1nameProperty2fiWidth),
      ...getStyleValue("top", property1nameProperty2fiTop),
      ...getStyleValue("right", property1nameProperty2fiRight),
      ...getStyleValue("bottom", property1nameProperty2fiBottom),
      ...getStyleValue("left", property1nameProperty2fiLeft),
    };
  }, [
    property1nameProperty2fiPosition,
    property1nameProperty2fiBackgroundColor,
    property1nameProperty2fiHeight,
    property1nameProperty2fiWidth,
    property1nameProperty2fiTop,
    property1nameProperty2fiRight,
    property1nameProperty2fiBottom,
    property1nameProperty2fiLeft,
  ]);

  const anabellaAngelaStyle = useMemo(() => {
    return {
      ...getStyleValue("color", anabellaAngelaColor),
    };
  }, [anabellaAngelaColor]);

  return (
    <View
      style={[styles.property1nameProperty2fi, property1nameProperty2fiStyle]}
    >
      <Image
        style={styles.useroutlineIcon}
        contentFit="cover"
        source={useroutline}
      />
      <Text style={[styles.anabellaAngela, anabellaAngelaStyle]}>
        {anabellaAngela}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  useroutlineIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
    display: "none",
  },
  anabellaAngela: {
    fontSize: FontSize.bodyLargeSemibold_size,
    letterSpacing: 0,
    lineHeight: 24,
    fontWeight: "600",
    fontFamily: FontFamily.bodyLargeSemibold,
    color: Color.greyscale900,
    textAlign: "left",
    marginLeft: 12,
  },
  property1nameProperty2fi: {
    borderRadius: Border.br_base,
    backgroundColor: Color.greyscale50,
    width: 327,
    flexDirection: "row",
    alignItems: "center",
    padding: Padding.p_base,
  },
});

export default Property1nameProperty2fi;
