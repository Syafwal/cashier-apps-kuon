import * as React from "react";
import { StyleSheet, View } from "react-native";
import FormContainer2 from "./FormContainer2";

const PriceFilterContainer = () => {
  return (
    <View style={styles.frame}>
      <FormContainer2 />
    </View>
  );
};

const styles = StyleSheet.create({
  frame: {
    position: "absolute",
    top: 231,
    left: 0,
    width: 352,
    height: 452,
    overflow: "hidden",
  },
});

export default PriceFilterContainer;
