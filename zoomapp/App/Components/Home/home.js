import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
const HomeScreens = () => {
  return (
    <View style={styles.container}>
       <Image
        source={require("./../../../assets/Zoomlogo.png")}
        style={styles.logo}
      ></Image>
      <Text style={styles.text}>Bắt đầu cuộc họp</Text>
      <Text style={styles.tittle1}>
        Bắt đầu hoặc tham gia một cuộc họp video đang diễn ra
      </Text>
      <Image
        source={require("./../../../assets/Monitor.png")}
        style={styles.imgMonitor}
      ></Image>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  logo: {
    width: 200,
    height: 50,
    marginTop: 30,
  },
  text: {
    color: "rgba(0, 0, 0, 1)",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "34px",
    marginTop: 10,
  },
  tittle1: {
    fontSize: "16px",
    margin: "15px",
    textAlign: "center",
  },
  imgMonitor: {
    width: 60,
    height: 60,
  },
});

export default HomeScreens;
