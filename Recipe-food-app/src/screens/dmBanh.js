import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import Header from "../components/dmBanh/header";
import Main from "../components/dmBanh/main";
import { LinearGradient } from "expo-linear-gradient";
const dmBanh = () => {
  return (
    <LinearGradient
      colors={["#FADB8A", "#FBE6AF", "#FCEFCD", "#FDF3DA"]}
      style={style.container}
    >
      <View style={style.container}>
        <ScrollView style={style.container}>
          <Header></Header>
          <Main />
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