import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const NeonForm = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={[styles.barMenu, styles.barMenuPosition]}>
      <Image
        style={[styles.unlockIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/unlock.png")}
      />
      <Pressable
        style={styles.documentCopy}
        onPress={() => navigation.navigate("DetailPenjualanUntukKaryawa")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/documentcopy.png")}
        />
      </Pressable>
      <Pressable
        style={styles.kasir}
        onPress={() => navigation.navigate("TampilanKasirTampilanAwal")}
      >
        <Text style={[styles.kasir1, styles.kasir1Typo]}>Kasir</Text>
      </Pressable>
      <Pressable
        style={styles.penjualan}
        onPress={() => navigation.navigate("DetailPenjualanUntukKaryawa")}
      >
        <Text style={[styles.penjualan1, styles.kasir1Typo]}>Penjualan</Text>
      </Pressable>
      <Pressable
        style={styles.absensi}
        onPress={() => navigation.navigate("AbsensiKaryawan")}
      >
        <Text style={[styles.absensi1, styles.kasir1Typo]}>Absensi</Text>
      </Pressable>
      <Text style={[styles.logutNeon, styles.logutNeonTypo]}>Logut Neon</Text>
      <Text style={[styles.kunciLayar, styles.logutNeonTypo]}>Kunci Layar</Text>
      <View style={[styles.listFilter, styles.barMenuPosition]} />
      <Text style={styles.tittle}>Neon</Text>
      <Pressable
        style={[styles.documentFilter, styles.unlockIconPosition]}
        onPress={() => navigation.navigate("TampilanKasirTampilanAwal")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/documentfilter.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.taskSquare, styles.alarmIconPosition]}
        onPress={() => navigation.navigate("AbsensiKaryawan")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/tasksquare.png")}
        />
      </Pressable>
      <Image
        style={[styles.alarmIcon, styles.alarmIconPosition]}
        contentFit="cover"
        source={require("../assets/alarm.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  barMenuPosition: {
    borderRadius: Border.br_5xl,
    right: "0%",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  kasir1Typo: {
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.primary400,
    fontWeight: "500",
    fontStyle: "italic",
    lineHeight: 24,
    fontSize: FontSize.bodyLargeSemibold_size,
    height: "5.55%",
    fontFamily: FontFamily.bodyLargeSemibold,
    letterSpacing: 0,
  },
  logutNeonTypo: {
    left: "30.13%",
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.primary400,
    fontFamily: FontFamily.bodyLargeSemibold,
    fontWeight: "500",
    fontStyle: "italic",
    lineHeight: 24,
    letterSpacing: 0,
    fontSize: FontSize.bodyLargeSemibold_size,
    height: "5.55%",
    position: "absolute",
  },
  unlockIconPosition: {
    left: "11.79%",
    height: "7.63%",
    position: "absolute",
  },
  alarmIconPosition: {
    right: "74.24%",
    left: "11.35%",
    width: "14.41%",
    height: "7.63%",
    position: "absolute",
  },
  unlockIcon: {
    top: "84.04%",
    right: "73.8%",
    bottom: "8.33%",
    left: "11.79%",
    height: "7.63%",
    position: "absolute",
    width: "14.41%",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  documentCopy: {
    left: "12.66%",
    top: "44.69%",
    right: "72.93%",
    bottom: "47.68%",
    width: "14.41%",
    height: "7.63%",
    position: "absolute",
  },
  kasir1: {
    width: "14.41%",
  },
  kasir: {
    left: "33.19%",
    top: "35.17%",
    position: "absolute",
  },
  penjualan1: {
    width: "27.95%",
  },
  penjualan: {
    left: "31.88%",
    top: "47.22%",
    position: "absolute",
  },
  absensi1: {
    width: "22.71%",
  },
  absensi: {
    left: "31.44%",
    top: "60.42%",
    position: "absolute",
  },
  logutNeon: {
    width: "32.31%",
    top: "74.08%",
  },
  kunciLayar: {
    width: "32.75%",
    top: "86.33%",
  },
  listFilter: {
    height: "24.32%",
    top: "0%",
    bottom: "75.68%",
    left: "0%",
    backgroundColor: Color.colorSteelblue,
    width: "100%",
  },
  tittle: {
    height: "9.72%",
    width: "87.34%",
    top: "6.71%",
    left: "7.42%",
    fontSize: FontSize.size_13xl,
    lineHeight: 42,
    fontWeight: "700",
    color: Color.white,
    textAlign: "center",
    fontFamily: FontFamily.bodyLargeSemibold,
    letterSpacing: 0,
    position: "absolute",
  },
  documentFilter: {
    top: "32.88%",
    right: "71.79%",
    bottom: "59.49%",
    width: "16.42%",
  },
  taskSquare: {
    top: "58.33%",
    bottom: "34.04%",
  },
  alarmIcon: {
    top: "71.3%",
    bottom: "21.07%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  barMenu: {
    height: "53.08%",
    width: "61.07%",
    top: "11.21%",
    bottom: "35.71%",
    left: "38.93%",
    backgroundColor: Color.white,
  },
});

export default NeonForm;
