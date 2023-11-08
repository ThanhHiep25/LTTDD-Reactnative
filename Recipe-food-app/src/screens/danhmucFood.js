import React from "react";

import { useState, useEffect } from "react";
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
import datamonan from "../../dataMonan";

const dmBanh = ({ navigation, route }) => {
  const colors = route.params.colorItem;
  const id = route.params.id;
  var [dsmonan, setDsmonan] = useState([]);

  //chạy lại setDsmonan nếu id thay đổi
  useEffect(() => {
    if (id == 1) setDsmonan(datamonan.Banh);
    else if (id == 2) setDsmonan(datamonan.foodIemsSoup);
    else if (id == 3) setDsmonan(datamonan.nuong);
    else if (id == 4) setDsmonan(datamonan.Lau);
    else if (id == 5) setDsmonan(datamonan.Nuoctraicay);
    else if (id == 6) setDsmonan(datamonan.Anvat);
    else if (id == 7) setDsmonan(datamonan.Salad);
    else if (id == 8) setDsmonan(datamonan.NuocCham);
  }, [id]);
  return (
    <LinearGradient colors={route.params.bgcl} style={style.container}>
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
                  source={route.params.img}
                  style={style.lambanhLogo}
                ></Image>
                <Text style={style.Titletext}> {route.params.title}</Text>
              </View>
              <FlatList
                numColumns={2}
                data={dsmonan}
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
                        <Text
                          ellipsizeMode="tail"
                          numberOfLines={4}
                          style={style.detailsFood && { marginLeft: 20 }}
                        >
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
