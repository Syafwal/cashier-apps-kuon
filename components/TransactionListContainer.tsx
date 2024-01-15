import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, ImageSourcePropType } from "react-native";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

type TransactionListContainerType = {
  itemImageUrl?: ImageSourcePropType;
  productImageUrl?: string;
  priceText?: string;
  dateLabel?: string;

  /** Style props */
  propTop?: number | string;
  propBottom?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const TransactionListContainer = ({
  itemImageUrl,
  productImageUrl,
  priceText,
  dateLabel,
  propTop,
  propBottom,
}: TransactionListContainerType) => {
  const itemListStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
      ...getStyleValue("bottom", propBottom),
    };
  }, [propTop, propBottom]);

  return (
    <View style={[styles.itemList, styles.nameFlexBox, itemListStyle]}>
      <View style={styles.nameFlexBox}>
        <Image style={styles.icon} contentFit="cover" source={itemImageUrl} />
        <View style={styles.textName}>
          <Text style={[styles.kemerdekaan1, styles.paymentTypo1]}>
            {productImageUrl}
          </Text>
          <Text style={[styles.payment, styles.paymentTypo]}>Payment</Text>
        </View>
      </View>
      <View style={styles.textName1}>
        <Text style={[styles.rp25000, styles.rp25000Typo]}>{priceText}</Text>
        <Text style={[styles.december28, styles.rp25000Typo]}>{dateLabel}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  nameFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  paymentTypo1: {
    textAlign: "left",
    fontFamily: FontFamily.bodyLargeSemibold,
    letterSpacing: 0,
  },
  paymentTypo: {
    marginTop: 4,
    color: Color.greyscale500,
    fontWeight: "500",
    lineHeight: 18,
    fontSize: FontSize.bodySmallMedium_size,
  },
  rp25000Typo: {
    textAlign: "right",
    fontFamily: FontFamily.bodyLargeSemibold,
    letterSpacing: 0,
  },
  icon: {
    borderRadius: Border.br_xs,
    width: 48,
    height: 48,
    overflow: "hidden",
  },
  kemerdekaan1: {
    color: Color.colorSteelblue,
    fontWeight: "700",
    lineHeight: 21,
    fontSize: FontSize.bodyMediumBold_size,
  },
  payment: {
    textAlign: "left",
    fontFamily: FontFamily.bodyLargeSemibold,
    letterSpacing: 0,
  },
  textName: {
    marginLeft: 16,
  },
  rp25000: {
    color: Color.colorSteelblue,
    fontWeight: "700",
    lineHeight: 21,
    fontSize: FontSize.bodyMediumBold_size,
  },
  december28: {
    marginTop: 4,
    color: Color.greyscale500,
    fontWeight: "500",
    lineHeight: 18,
    fontSize: FontSize.bodySmallMedium_size,
  },
  textName1: {
    alignItems: "flex-end",
  },
  itemList: {
    position: "absolute",
    height: "15.26%",
    width: "87.2%",
    top: "10.9%",
    right: "7.2%",
    bottom: "73.84%",
    left: "5.6%",
    justifyContent: "space-between",
  },
});

export default TransactionListContainer;
