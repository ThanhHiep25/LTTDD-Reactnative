import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.subcontainer}>
        <Image
          source={require("../../../assets/IMG/home/setting.png")}
          style={styles.imgSet}
        ></Image>
        <Image
          source={require("../../../assets/IMG/home/User.png")}
          style={styles.imgUser}
        ></Image>
      </View>
      <View style={styles.view}>
        <Text style={styles.text}>Wellcome, Hiep !</Text>
        <Image
          source={require("../../../assets/IMG/home/hi.png")}
          style={styles.imghi}
        ></Image>
      </View>
      <Text style={styles.text1}>Bắt đầu nấu ăn thôi nào...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
  },
  subcontainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 40,
  },
  view: {
    flexDirection: "row",
    justifyContent:'flex-start',
    alignItems:'center',
  },
  text:{
    fontSize:30,
    fontWeight: 500,
  },
  text1:{
    fontSize:16,
    paddingTop:20,
  },
  imgSet: {
    width: 30,
    height: 30,
  },
  imgUser: {
    width: 78,
    height: 78,
  },
  imghi: {
    width: 30,
    height: 30,
  },
});

export default Header;
