import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

const Header = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("./../../../assets/IMG/well/sald.gif")}
        style={styles.imgSald}
      />
      <View style={styles.group1}>
        <Image
          source={require("./../../../assets/IMG/well/salad.png")}
          style={styles.imgSalad}
        />
        <Image
          source={require("./../../../assets/IMG/well/salad3.gif")}
          style={styles.imgSalad3}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent:'center',
    alignItems:'center',
    marginTop:40,
  },
  imgSald: {
    width: 400,
    height: 400,
    left: -60,
  },
  group1: {
    flexDirection: "row",
    position: "absolute",
    marginTop:150,
  },
  imgSalad: {
    width: 300,
    height: 300,
  },
  imgSalad3:{
    width:100,
    height:100,
  }
});

export default Header;
