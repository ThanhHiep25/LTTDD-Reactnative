import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
const HomeScreens = () => {
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={require("./../../../assets/Zoomlogo.png")}
          style={styles.logo}
        ></Image>
      </View>

      <Text style={styles.text}>Bắt đầu cuộc họp</Text>
      <Text style={styles.tittle1}>
        Bắt đầy hoặc tham gia một cuộc họp video đang diễn ra
      </Text>
      <Image
        source={require("./../../../assets/Monitor.png")}
        style={styles.imgMonitor}
      ></Image>
      <div style={styles.imggroup}>
        <Image
          source={require("./../../../assets/Monitor.png")}
          style={styles.imgMonitor}
          
        ></Image>
        <Image
          source={require("./../../../assets/Monitor.png")}
          style={styles.imgMonitor}
        ></Image>
      </div>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 220,
    height: 50,
    margin: 20,
  },
  text: {
    color: "rgba(0, 0, 0, 1)",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "34px",
    marginTop: 50,
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
