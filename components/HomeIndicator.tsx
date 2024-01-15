import React, { useMemo } from "react";
import { StyleSheet, View } from "react-native";
import { Border, Color } from "../GlobalStyles";

type HomeIndicatorType = {
  /** Style props */
  homeIndicatorPosition?: string;
  homeIndicatorTop?: number | string;
  homeIndicatorLeft?: number | string;
  homeIndicatorWidth?: number | string;
  homeIndicatorHeight?: number | string;
  rectangleViewBackgroundColor?: string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const HomeIndicator = ({
  homeIndicatorPosition,
  homeIndicatorTop,
  homeIndicatorLeft,
  homeIndicatorWidth,
  homeIndicatorHeight,
  rectangleViewBackgroundColor,
}: HomeIndicatorType) => {
  const homeIndicatorStyle = useMemo(() => {
    return {
      ...getStyleValue("position", homeIndicatorPosition),
      ...getStyleValue("top", homeIndicatorTop),
      ...getStyleValue("left", homeIndicatorLeft),
      ...getStyleValue("width", homeIndicatorWidth),
      ...getStyleValue("height", homeIndicatorHeight),
    };
  }, [
    homeIndicatorPosition,
    homeIndicatorTop,
    homeIndicatorLeft,
    homeIndicatorWidth,
    homeIndicatorHeight,
  ]);

  const rectangleViewStyle = useMemo(() => {
    return {
      ...getStyleValue("backgroundColor", rectangleViewBackgroundColor),
    };
  }, [rectangleViewBackgroundColor]);

  return (
    <View style={[styles.homeIndicator, homeIndicatorStyle]}>
      <View style={[styles.homeIndicatorChild, rectangleViewStyle]} />
    </View>
  );
};

const styles = StyleSheet.create({
  homeIndicatorChild: {
    position: "absolute",
    marginLeft: -66.5,
    bottom: 9,
    left: "50%",
    borderRadius: Border.br_81xl,
    backgroundColor: Color.greyscale900,
    width: 134,
    height: 5,
  },
  homeIndicator: {
    width: 375,
    height: 34,
  },
});

export default HomeIndicator;
