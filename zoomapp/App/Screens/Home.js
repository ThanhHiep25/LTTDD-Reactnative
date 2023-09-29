import React, { Component } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Header from "../Components/Home/header";
import HomeScreens from "../Components/Home/home";
import BodyIMG from "../Components/Home/bodyimg";
import BodyIMG2 from "../Components/Home/bodyimg2";

const Home = () => {
  return (
    <View style={styles.container}>
      <Header/>
      <HomeScreens/>
      <BodyIMG/>
      <BodyIMG2/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
  },
});
export default Home;
