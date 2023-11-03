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

const colors = ["#CDDFFC", "#E8CA7B", "#FBCCA5", "#FCE5A9"];

const Main = () => {
  const foodItems = [
    {
      image: require("./../../../assets/IMG/dmBanh/muttinVietQuoc.png"),
      Name: "Bánh muffin việt quất",
      details: "Trứng gà 1 quả\n Bột mì 150 gr\n Sữa tươi không\n . . .",
    },
    {
      image: require("./../../../assets/IMG/dmBanh/banh-su-kem-singapore.png"),
      Name: "Bánh su kem Singapo",
      details: "Trứng gà 1 quả\n Bột mì 150 gr\n Sữa tươi không\n . . .",
    },
    {
      image: require("./../../../assets/IMG/dmBanh/banh-su-kem-singapore.png"),
      Name: "Bánh su kem Singapo",
      details: "Trứng gà 1 quả\n Bột mì 150 gr\n Sữa tươi không\n . . .",
    },
    {
      image: require("./../../../assets/IMG/dmBanh/banh-su-kem-singapore.png"),
      Name: "Bánh su kem Singapo",
      details: "Trứng gà 1 quả\n Bột mì 150 gr\n Sữa tươi không\n . . .",
    },
    {
      image: require("./../../../assets/IMG/dmBanh/banh-su-kem-singapore.png"),
      Name: "Bánh su kem Singapo",
      details: "Trứng gà 1 quả\n Bột mì 150 gr\n Sữa tươi không\n . . .",
    },
  ];
  return (
    <View style={style.container}>
      <View style={style.header}>
        <View style={style.container1}>
          <Pressable
            onPress={() => {
              navigation.navigate("home");
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
      <View style={style.body}>
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
                <Image source={item.image} style={style.images} />
                <Text style={style.nameFood}>{item.Name}</Text>
                <Text>Nguyên liệu</Text>
                <Text style={style.detailsFood}>{item.details}</Text>
              </SafeAreaView>
            );
          }}
        />
      </View>
    </View>
  );
};
const style = StyleSheet.create({
  container: {
    display: "flex",
    flex: "1",
  },
  body: {
    display: "flex",
    flex: "1",
    flexDirection: "row",
    marginHorizontal: 10,
    marginVertical: 5,
    resizeMode:'contain'
  },
  header: {
    flexDirection: "row",
    marginBottom: 30,
  },

  images: {
    width: "150px",
    height: "100px",
    borderRadius: 15,
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
    marginLeft: "80px",
    marginTop: 80,
  },
  text: {
    marginTop: "10px",
    fontSize: 24,
    fontWeight: "bold",
    fontFamily: "Segoe UI",
  },
  fooditem: {
    margin: "5px",
    borderColor: "black",
    borderWidth: "2",
    justifyContent: "center",
    width: "160px",
    height: "236px",
    borderRadius: "30px",
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    alignItems: "center",
  },
  nameFood: {
    fontWeight: "bold",
    fontSize: "14px",
  },
  detailsFood: {
    fontSize: "12px",
  },
});
export default Main;
