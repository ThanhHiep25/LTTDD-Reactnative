import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
//import Chitietdmbanh from "../components/chitietcacdm/chitietdmbanh";
import Chitietdmbanh from "../components/chitietcacdm/chitietdmbanh2";
const ctdmbanh = ({navigation}) => {
  return (
      <View style={style.container}>
        <ScrollView style={style.container}>
        
          <Chitietdmbanh />
        </ScrollView>
      </View>
  );
};

const style = StyleSheet.create({
  container: {
    display: "flex",
    flex: "1",
  },
});
export default ctdmbanh;
