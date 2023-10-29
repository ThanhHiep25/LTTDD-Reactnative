import React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
const header = ({ navigation }) => {
  return (
    <View style={style.container}>
      <View style={style.container1}>
        <Pressable
          onPress={() => {
            navigation.navigate('home');
          }}
        >
          <Image
            source={require("./../../../assets/IMG/dmBanh/back.png")}
            style={style.backLogo}
          ></Image>
        </Pressable>
      </View>
      <View style={style.container2}>
        <Image
          source={require("./../../../assets/IMG/dmBanh/iconLamBanh.png")}
          style={style.lambanhLogo}
        ></Image>
        <Text style={style.text}> Làm Bánh</Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    display: "flex",
    flex: "1",
  },
  container1: {
    marginTop: "50px",
  },
  backLogo: {
    marginLeft: "10px",
    width: "50px",
    height: "50px",
  },
  lambanhLogo: {
    marginTop: "10px",
    height: "100px",
    width: "100px",
  },
  container2: {
    alignItems: "center",
  },
  text: {
    marginTop: "10px",
    fontSize: 24,
    fontWeight: "bold",
    fontFamily: "Segoe UI",
  },
});

export default header;
