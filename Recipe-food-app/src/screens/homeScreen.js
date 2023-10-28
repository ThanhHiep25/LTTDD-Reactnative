import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const Home = () => {
  return (
    <View style={styles.container}>
       
      <View style={styles.view}>
        <Image
          source={require("../../assets/IMG/home/setting.png")}
          style={styles.img}
        ></Image>
        <Image
          source={require("../../assets/IMG/home/User.png")}
          style={styles.img1}
        />
      </View>


      <View>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
  },
  view: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  img: {
    width: 30,
    height: 30,
    resizeMode: "contain",
  },
  img1: {
    width: 70,
    height: 70,
    resizeMode: "contain",
  },
});

export default Home;
