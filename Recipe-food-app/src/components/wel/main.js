import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

const Main = () => {
  return (
    <View style={styles.container}>
      <View style={styles.group1}>
        <Text style={styles.tittle}>Chào mừng bạn !! </Text>
        <Image
          source={require("./../../../assets/IMG/well/chef.png")}
          style={styles.imgChef}
        />
      </View>
      <Text style={styles.textH}>Hôm nay bạn muốn nấu gì đây</Text>
      <Text style={styles.textC}>
        Chúng tôi cung cấp các công thức nấu ăn dành cho bạn.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  group1: {
    flexDirection: "row",
    marginTop: 100,
    marginLeft: 30,
  },
  tittle: {
    fontSize: 20,
    fontWeight: 400,
    paddingTop: 20,
  },
  imgChef: {
    width: 50,
    height: 50,
    marginLeft: 10,
  },
  textH: {
    fontSize: 24,

    fontWeight: 700,
    marginLeft: 30,
  },
  textC: {
    fontSize: 16,

    marginLeft: 20,
    padding: 10,
  },
});

export default Main;
