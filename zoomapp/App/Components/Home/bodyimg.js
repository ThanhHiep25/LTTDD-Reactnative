import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

const BodyIMG = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("./../../../assets/Application windows.png")}
        style ={styles.imgbody}
      ></Image>
      <Image
        source={require("./../../../assets/User.png")}
        style ={styles.imgbody}
      ></Image>
      <Image
        source={require("./../../../assets/Smartphone.png")}
        style ={styles.imgbody}
      ></Image>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection:'row',
    justifyContent: "space-around",
    alignItems: "center",
    margin:40,
  },
  imgbody: {
    width: 60,
    height: 60,
  },
});

export default BodyIMG;
