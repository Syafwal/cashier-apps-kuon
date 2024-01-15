const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import TampilanKasirTampilanAwal from "./screens/TampilanKasirTampilanAwal";
import Property1nameProperty2fi from "./components/Property1nameProperty2fi";
import HomeIndicator from "./components/HomeIndicator";
import Property1default from "./components/Property1default";
import TampilanPesanan from "./screens/TampilanPesanan";
import LoginKaryawan from "./screens/LoginKaryawan";
import DetailPenjualanUntukKaryawa from "./screens/DetailPenjualanUntukKaryawa";
import OrderBerhasil from "./screens/OrderBerhasil";
import TampilanTitik3 from "./screens/TampilanTitik3";
import TampilanAwal from "./components/TampilanAwal";
import Portal from "./screens/Portal";
import LoginAdmin from "./screens/LoginAdmin";
import RegisterAdmin from "./screens/RegisterAdmin";
import Inventaris from "./screens/Inventaris";
import TampilanHomeAdmin from "./screens/TampilanHomeAdmin";
import AbsensiKaryawan from "./screens/AbsensiKaryawan";
import Karyawan from "./screens/Karyawan";
import RegisterBarcode from "./screens/RegisterBarcode";
import Barcode from "./screens/Barcode";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.otf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="TampilanKasirTampilanAwal"
              component={TampilanKasirTampilanAwal}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TampilanPesanan"
              component={TampilanPesanan}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LoginKaryawan"
              component={LoginKaryawan}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DetailPenjualanUntukKaryawa"
              component={DetailPenjualanUntukKaryawa}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="OrderBerhasil"
              component={OrderBerhasil}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TampilanTitik3"
              component={TampilanTitik3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Portal"
              component={Portal}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LoginAdmin"
              component={LoginAdmin}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="RegisterAdmin"
              component={RegisterAdmin}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Inventaris"
              component={Inventaris}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TampilanHomeAdmin"
              component={TampilanHomeAdmin}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AbsensiKaryawan"
              component={AbsensiKaryawan}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Karyawan"
              component={Karyawan}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="RegisterBarcode"
              component={RegisterBarcode}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Barcode"
              component={Barcode}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
