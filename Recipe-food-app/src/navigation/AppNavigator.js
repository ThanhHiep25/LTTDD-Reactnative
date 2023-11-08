import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "../screens/welcome";
import NameScreen from "../screens/name";

import Home from "../screens/homeScreen";
import Setting from "../screens/setting";
import Thongtincanhan from "../screens/Thongtincanhan";
<<<<<<< HEAD
import GD_CT from "../screens/Screen_GDCT/gd_Monan";
=======
>>>>>>> 4f492fa7e757ec3aa6de1f87106f1f912fa69310

import dmBanh from "../screens/dmBanh";
import dmSup from "../screens/dmSup";
import dmNuong from "../screens/dmNuong";
import dmLau from "../screens/dmLau";
import dmNuoctraicay from "../screens/dmNuoctraicay";
import dmMonAnVat from "../screens/dmMonAnVat";
import dmSalad from "../screens/dmSalad";
import dmNuocCham from "../screens/dmNuocCham";

import Lauca from "../screens/Lau/Lauca"

import ctdmbanh from "../screens/ctdmbanh";
import Chitietdmbanh2 from "../components/chitietcacdm/chitietdmbanh2";
const Stack = createNativeStackNavigator();
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
<<<<<<< HEAD
      <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="welcome" component={WelcomeScreen} />
        <Stack.Screen name="dmbanh" component={DmBanh} />
       
        <Stack.Screen name="gdct" component={GD_CT} />
        <Stack.Screen name="name" component={NameScreen} />
        <Stack.Screen name="setting" component={Setting} />
        <Stack.Screen name="thongtincanhan" component={Thongtincanhan} />
=======
      
        {/* <Stack.Screen name="welcome" component={WelcomeScreen} />
        
        <Stack.Screen name="name" component={NameScreen} /> */}
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="setting" component={Setting} />

        <Stack.Screen name="dmbanh" component={dmBanh} />
        {/* <Stack.Screen name="Chitietdmbanh2" component={Chitietdmbanh2} /> */}
        {/* <Stack.Screen name="Lauca" component={Lauca} /> */}
        <Stack.Screen name="ctdmbanh" component={ctdmbanh} />
        <Stack.Screen name="dmsup" component={dmSup} />
        <Stack.Screen name="dmnuong" component={dmNuong} />
        <Stack.Screen name="dmlau" component={dmLau} />
        <Stack.Screen name="dmnuoctraicay" component={dmNuoctraicay} />
        <Stack.Screen name="dmmonanvat" component={dmMonAnVat} />
        <Stack.Screen name="dmsalad" component={dmSalad} />
        <Stack.Screen name="dmnuoccham" component={dmNuocCham} />

        {/* <Stack.Screen name="thongtin" component={Thongtincanhan} /> */}
>>>>>>> 4f492fa7e757ec3aa6de1f87106f1f912fa69310
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default AppNavigator;
