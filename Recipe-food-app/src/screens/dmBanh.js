import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Banh from "../components/dmBanh/banh";
const dmBanh = ({navigation}) => {
  return (
    <LinearGradient
      colors={["#FADB8A", "#FBE6AF", "#FCEFCD", "#FDF3DA"]}
      style={style.container}
    >
      <View style={style.container}>
        <ScrollView style={style.container}>
        
          <Banh />
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
export default dmBanh;
