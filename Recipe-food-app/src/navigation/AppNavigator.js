import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "../screens/welcome";
import NameScreen from "../screens/name";
import DmBanh from "../screens/dmBanh";
import Home from "../screens/homeScreen";

const Stack = createNativeStackNavigator();
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
      
        <Stack.Screen name="home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
<Stack.Screen name="welcome" component={WelcomeScreen} />
const styles = StyleSheet.create({});
  
        <Stack.Screen name="name" component={NameScreen} />
export default AppNavigator;
