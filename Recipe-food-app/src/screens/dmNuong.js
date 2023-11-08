import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import Nuong from "../components/dmNuong/nuong";
import { LinearGradient } from "expo-linear-gradient";
const dmNuong = ({navigation}) => {
  return (
    <LinearGradient
      colors={["#FADB8A", "#FBE6AF", "#FCEFCD", "#FDF3DA"]}
      style={style.container}
    >
      <View style={style.container}>
        <ScrollView style={style.container}>
        
          <Nuong />
        </ScrollView>
      </View>
    </LinearGradient>
  );
};

const style = StyleSheet.create({
  container: {
    display: "flex",
    flex: "1",
  },
});
export default dmNuong;
