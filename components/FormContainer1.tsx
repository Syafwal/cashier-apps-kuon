import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, ImageSourcePropType } from "react-native";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

type FormContainer1Type = {
  profileImageUrl?: ImageSourcePropType;
  displayName?: string;
  itemId?: string;

  /** Style props */
  propTop?: number | string;
  propLeft?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const FormContainer1 = ({
  profileImageUrl,
  displayName,
  itemId,
  propTop,
  propLeft,
}: FormContainer1Type) => {
  const frameView1Style = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
      ...getStyleValue("left", propLeft),
    };
  }, [propTop, propLeft]);

  return (
    <View style={[styles.ellipseParent, frameView1Style]}>
      <Image
        style={styles.frameChildPosition}
        contentFit="cover"
        source={require("../assets/avatar.png")}
      />
      <Image
        style={[styles.download11, styles.frameChildPosition]}
        contentFit="cover"
        source={profileImageUrl}
      />
      <Text style={[styles.anton, styles.antonFlexBox]}>{displayName}</Text>
      <Text style={[styles.id554490, styles.antonFlexBox]}>{itemId}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  frameChildPosition: {
    width: 50,
    left: 0,
    top: 0,
    height: 50,
    position: "absolute",
  },
  antonFlexBox: {
    height: 24,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: Color.white,
    fontFamily: FontFamily.bodyLargeSemibold,
    fontWeight: "700",
    letterSpacing: 0,
    position: "absolute",
  },
  download11: {
    borderRadius: Border.br_5xl_5,
  },
  anton: {
    top: 9,
    left: 49,
    fontSize: FontSize.bodyLargeSemibold_size,
    lineHeight: 24,
    width: 68,
  },
  id554490: {
    top: 24,
    left: 39,
    fontSize: FontSize.size_3xs,
    lineHeight: 15,
    width: 88,
  },
  ellipseParent: {
    top: 69,
    left: 15,
    width: 127,
    height: 50,
    position: "absolute",
  },
});

export default FormContainer1;
