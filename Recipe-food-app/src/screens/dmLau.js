import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import Lau from "../components/dmLau/lau";
import { LinearGradient } from "expo-linear-gradient";
const dmLau = ({navigation}) => {
  return (
    <LinearGradient
      colors={["#FADB8A", "#FBE6AF", "#FCEFCD", "#FDF3DA"]}
      style={style.container}
    >
      <View style={style.container}>
        <ScrollView style={style.container}>
        
          <Lau />
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
export default dmLau;
