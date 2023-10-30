import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "../screens/welcome";
import NameScreen from "../screens/name";
import DmBanh from "../screens/dmBanh";
import Home from "../screens/homeScreen";
import Setting from "../screens/setting";
import Thongtincanhan from "../screens/Thongtincanhan";

const Stack = createNativeStackNavigator();
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="thongtin" component={Thongtincanhan}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});
<Stack.Screen name="welcome" component={WelcomeScreen} />;
{
  ("")
}
<Stack.Screen name="name" component={NameScreen} />;
{
  ("")
}
<Stack.Screen name="home" component={Home} />
{
  ("")
}
        <Stack.Screen name="setting" component={Setting} />
export default AppNavigator;
