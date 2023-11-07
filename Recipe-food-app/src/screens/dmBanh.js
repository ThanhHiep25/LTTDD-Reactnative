import React from "react";

import { useState } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  Image,
  Pressable,
  FlatList,
  SafeAreaView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import dataDM from "./../../dataDanhmuc"
const colors = ["#CDDFFC", "#E8CA7B", "#FBCCA5", "#FCE5A9"];

const dmBanh = ({ navigation,route }) => {
  const foodItems = [
    {
      image: require("./../../assets/IMG/dmBanh/banh-su-kem-singapore.png"),
      Name: "Bánh muffin việt quất",
      details: "Trứng gà 1 quả\n Bột mì 150 gr\n Sữa tươi không\n . . .",
    },
    {
      image: require("./../../assets/IMG/dmBanh/banh-su-kem-singapore.png"),
      Name: "Bánh su kem Singapo",
      details: "Trứng gà 1 quả\n Bột mì 150 gr\n Sữa tươi không\n . . .",
    },
    {
      image: require("./../../assets/IMG/dmBanh/banh-su-kem-singapore.png"),
      Name: "Bánh su kem Singapo",
      details: "Trứng gà 1 quả\n Bột mì 150 gr\n Sữa tươi không\n . . .",
    },
    {
      image: require("./../../assets/IMG/dmBanh/banh-su-kem-singapore.png"),
      Name: "Bánh su kem Singapo",
      details: "Trứng gà 1 quả\n Bột mì 150 gr\n Sữa tươi không\n . . .",
    },
    {
      image: require("./../../assets/IMG/dmBanh/banh-su-kem-singapore.png"),
      Name: "Bánh su kem Singapo",
      details: "Trứng gà 1 quả\n Bột mì 150 gr\n Sữa tươi không\n . . .",
    },
  ];
  return (
    <LinearGradient
      colors={["#FADB8A", "#FBE6AF", "#FCEFCD", "#FDF3DA"]}
      style={style.container}
    >
      <View style={style.container}>
        <ScrollView style={style.container}>
          <View style={style.container}>
            <View style={style.header}>
              <View style={style.containerheader1}>
                <Pressable
                  onPress={() => {
                    navigation.navigate("home");
                  }}
                >
                  <Image
                    source={require("./../../assets/IMG/dmBanh/back.png")}
                    style={style.backLogo}
                  ></Image>
                </Pressable>
              </View>
            </View>
            <View style={style.body}>
              <View style={style.titlePage}>
                <Image
                  source={require("./../../assets/IMG/dmBanh/iconLamBanh.png")}
                  style={style.lambanhLogo}
                ></Image>
                <Text style={style.Titletext}> Làm Bánh</Text>
              </View>
              <FlatList
                numColumns={2}
                data={foodItems}
                renderItem={({ item, index }) => {
                  return (
                    <SafeAreaView
                      style={{
                        ...style.fooditem,
                        backgroundColor: colors[index % colors.length],
                      }}
                    >
                      <Image source={item.image} style={style.imagesFooditem} />
                      <Text style={style.nameFood}>{item.Name}</Text>
                      <View style={style.nguyenlieu}>
                        <Text style={style.detailsFood}>Nguyên liệu</Text>
                        <Text style={style.detailsFood && { marginLeft: 20 }}>
                          {item.details}
                        </Text>
                      </View>
                    </SafeAreaView>
                  );
                }}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    </LinearGradient>
  );
};

const style = StyleSheet.create({
  container: {
    display: "flex",
    flex: "1",
  },
  body: {
    display: "flex",
    flex: "9",

    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    padding: 10,
  },

  imagesFooditem: {
    width: "150px",
    height: "100px",
    borderRadius: 15,
  },
  containerheader1: {
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
  titlePage: {
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: "50px",
  },
  Titletext: {
    marginTop: "10px",
    fontSize: 24,
    fontWeight: "bold",
    fontFamily: "Segoe UI",
  },
  fooditem: {
    borderColor: "black",
    borderWidth: "2",
    justifyContent: "center",
    width: "160px",
    height: "236px",
    borderRadius: "30px",
    shadowColor: "black",
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    alignItems: "center",
    marginHorizontal: 20,
    marginVertical: 20,
  },
  nameFood: {
    fontWeight: "bold",
    fontSize: "14px",
  },
  detailsFood: {
    fontSize: "12px",
  },
  nguyenlieu: {
    width: 130,
  },
});
export default dmBanh;