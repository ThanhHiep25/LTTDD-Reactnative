import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import Header from "../components/na/hearder";
import Footer from "../components/na/footer";

const Name = () => {
  return (
    <LinearGradient
      colors={["#D1FFFA", "#E8FFFC", "#F6FFFE", "#FFF"]}
      style={styles.container}
    >
      <View style={styles.container}>
        <Header />
        <Footer/>
      </View>
    </LinearGradient>
  );
};
const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
  },
});
export default Name;
