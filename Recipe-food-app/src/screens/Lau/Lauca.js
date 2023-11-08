import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

const Lauca = () => {
  return (
    <View style={styles.container}>
      <View style={styles.view}>
        <Image
          source={require("../../../assets/IMG/Lau/lau2.gif")}
          style={styles.img}
        />
      </View>

      <View style={styles.view1}>
        <Image
          source={require("../../../assets/IMG/Lau/back.png")}
          style={styles.img1}
        />
      </View>

      <View style={styles.view}>
        <Image
          source={require("../../../assets/IMG/home/lau-thai.png")}
          style={styles.img2}
        />
      </View>

      <View style={styles.view2}>
       <Text style={styles.text}>Lẩu Thái</Text>

      </View>

      <View style={styles.view2}>
       <Text style={styles.text1}>Cách nấu lẩu cá chép giòn :</Text>
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
  },
  view: {
    alignItems: "center",
    margin: 20,
    marginBottom: 0,
  },
  view1: {
    marginLeft: 20,
  },
  view2: {
    margin: 20,
  },
  img: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  img1: {
    width: 50,
    height: 50,
    resizeMode: "contain",
  },
  img2: {
    width: 380,
    height: 240,
    resizeMode: "contain",
    borderRadius: 20,
  },
  text:{
    fontSize:24,
    fontWeight:700,
    color:'#E87104'
  },
  text1:{
    fontSize:20,
    fontWeight:700,
    color:'#64CA2'
  }
});

export default Lauca;
