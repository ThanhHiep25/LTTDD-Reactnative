import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "../screens/welcome";
import NameScreen from "../screens/name";
import DmBanh from "../screens/dmBanh"

const Stack = createNativeStackNavigator();
const AppNavigator = () => {
  return (
    <NavigationContainer>

      <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
         name="dmBanh"
         component={DmBanh}
         options={{ title: "DanhMucBanh" }}
      />
        

      {/* <Stack.Navigator screenOptions={{ headerShown: true }}> */}
        <Stack.Screen
          name="welcome"
          component={WelcomeScreen}
          options={{ title: "Welcome" }}
        />
        <Stack.Screen
          name="name"
          component={NameScreen}
          options={{ title: "NameScreen" }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default AppNavigator;


