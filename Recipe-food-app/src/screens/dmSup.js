import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import Sup from "../components/dmSup/sup";
import { LinearGradient } from "expo-linear-gradient";
const dmSup = ({navigation}) => {
  return (
    <LinearGradient
      colors={["#FADB8A", "#FBE6AF", "#FCEFCD", "#FDF3DA"]}
      style={style.container}
    >
      <View style={style.container}>
        <ScrollView style={style.container}>
        
          <Sup />
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
export default dmSup;
