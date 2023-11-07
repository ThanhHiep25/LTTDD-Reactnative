import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import MonAnVat from "../components/dmMonAnVat/monanvat";
const dmMonAnVat = ({navigation}) => {
  return (
    <LinearGradient
      colors={["#FADB8A", "#FBE6AF", "#FCEFCD", "#FDF3DA"]}
      style={style.container}
    >
      <View style={style.container}>
        <ScrollView style={style.container}>
        
          <MonAnVat />
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
export default dmMonAnVat;
