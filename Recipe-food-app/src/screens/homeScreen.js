import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "../components/home/header";
import Main from "../components/home/main";

const Home = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Main />
    </View>
  );
};

const styles = StyleSheet.create({
    container:{
      justifyContent:'center',
      margin: 20,
    }
});

export default Home;
