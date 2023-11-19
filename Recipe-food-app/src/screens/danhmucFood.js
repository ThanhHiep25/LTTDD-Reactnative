import React from "react";

import { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  Image,
  Pressable,
  FlatList,
  SafeAreaView,
  TextInput,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "react-native-vector-icons/Ionicons";

import datamonan from "../../dataMonan";
import * as Animatable from "react-native-animatable";

const dmBanh = ({ navigation, route }) => {
  const colors = route.params.colorItem;
  const id = route.params.id;
  var [dsmonan, setDsmonan] = useState([]);
  var [dsmonanNew, setDsmonanNew] = useState([]);
  const foodItems = route.params.dsmon;
  var [selectedFilter, setSelectedFilter] = useState(null);
  //chạy lại setDsmonan nếu id thay đổi
  useEffect(() => {
    if (id == 1) {
      setDsmonan(datamonan.Banh);
      setDsmonanNew(datamonan.Banh);
    } else if (id == 2) {
      setDsmonan(datamonan.foodIemsSoup);
      setDsmonanNew(datamonan.foodIemsSoup);
    } else if (id == 3) {
      setDsmonan(datamonan.nuong);
      setDsmonanNew(datamonan.nuong);
    } else if (id == 4) {
      setDsmonan(datamonan.Lau);
      setDsmonanNew(datamonan.Lau);
    } else if (id == 5) {
      setDsmonan(datamonan.Nuoctraicay);
      setDsmonanNew(datamonan.Nuoctraicay);
    } else if (id == 6) {
      setDsmonan(datamonan.Anvat);
      setDsmonanNew(datamonan.Anvat);
    } else if (id == 7) {
      setDsmonan(datamonan.Salad);
      setDsmonanNew(datamonan.Salad);
    } else if (id == 8) {
      setDsmonan(datamonan.NuocCham);
      setDsmonanNew(datamonan.NuocCham);
    }
  }, []);

  return (
    <ScrollView>
      <LinearGradient colors={route.params.bgcl} style={style.container}>
        <View style={style.container}>
          <View style={style.header}>
            <View style={style.containerheader1}>
              <Pressable
                onPress={() => {
                  navigation.goBack();
                }}
              >
                <Image
                  source={require("../../assets/IMG/Banh/back.png")}
                  style={style.backLogo}
                />
              </Pressable>
              <View style={style.titlePage}>
                <Image
                  source={route.params.img}
                  style={style.lambanhLogo}
                ></Image>
                <Text style={style.Titletext}> {route.params.title}</Text>
              </View>
            </View>
          </View>
          <View style={style.body}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TextInput
                style={style.searchBar}
                placeholder="Search Recipe Food"
              ></TextInput>
              <Pressable onPress={() => {}}>
                <Image
                  source={require("../../assets/IMG/home/search.png")}
                  style={style.imgSe}
                />
              </Pressable>
            </View>
            <View style={style.filter}>
              {/* all */}
              <Pressable
                style={{
                  ...style.buttonFilter,
                  backgroundColor: selectedFilter === "All" ? "#FCA34D" : null,
                }}
                onPress={() => {
                  setDsmonanNew(dsmonan);
                  console.log(dsmonanNew);
                  setSelectedFilter("All");
                }}
              >
                <Text style={{...style.filterText,color: selectedFilter==="All" ? "#FFFFFF":"#949292"}}>All</Text>
              </Pressable>
              {/* Giảm dần */}

              <Pressable
                style={{
                  ...style.buttonFilter,
                  backgroundColor:
                    selectedFilter === "Giamdan" ? "#FCA34D" : null,
                }}
                onPress={() => {
                  setSelectedFilter("Giamdan");
                  setDsmonanNew(
                    [...dsmonan].sort(
                      (a, b) => parseFloat(b.kcal) - parseFloat(a.kcal)
                    )
                  );
                }}
              >
                <Text style={{...style.filterText,color: selectedFilter==="Giamdan" ? "#FFFFFF":"#949292"}}>Calo &darr;</Text>
              </Pressable>

              {/* Tăng dần */}

              <Pressable
                style={{
                  ...style.buttonFilter,
                  backgroundColor:
                    selectedFilter === "tangdan" ? "#FCA34D" : null,
                }}
                onPress={() => {
                  setSelectedFilter("tangdan");
                  setDsmonanNew(
                    [...dsmonan].sort(
                      (a, b) => parseFloat(a.kcal) - parseFloat(b.kcal)
                    )
                  );
                }}
              >
                <Text style={{...style.filterText,color: selectedFilter==="tangdan" ? "#FFFFFF":"#949292"}}>Calo &uarr;</Text>
              </Pressable>

              {/* <Image
                style={{ resizeMode: "contain", width: 25, height: 25 }}
                source={require("../../assets/IMG/icon _filter_.png")}
              /> */}
              <Pressable
                style={{
                  ...style.buttonFilter,
                  backgroundColor: selectedFilter === "like" ? "#FCA34D" : null,
                }}
                onPress={() => {
                  setSelectedFilter("like");
                  setDsmonanNew(
                    [...dsmonan].sort(
                      (a, b) => parseFloat(b.like) - parseFloat(a.like)
                    )
                  );
                }}
              >
                <Text style={{...style.filterText,color: selectedFilter==="like" ? "#FFFFFF":"#949292"}}>Like &darr;</Text>
              </Pressable>
            </View>
            <View style={style.cangiua}>
              <FlatList
                numColumns={2}
                data={dsmonanNew}
                renderItem={({ item, index }) => {
                  return (
                    <Animatable.View animation="fadeIn" duration={1000}>
                      <SafeAreaView>
                        <Pressable
                          style={{
                            ...style.fooditem,
                            backgroundColor: colors[index % colors.length],
                          }}
                          onPress={() => {
                            navigation.navigate("dmctFood", { item: item });
                          }}
                        >
                          <Image
                            source={item.image}
                            style={style.imagesFooditem}
                          />
                          <Text style={style.nameFood}>{item.Name}</Text>
                          <View style={style.nguyenlieu}>
                            <Text style={style.detailsFood}>Mô tả</Text>
                            <Text
                              ellipsizeMode="tail"
                              numberOfLines={2}
                              style={style.detailsFood && { marginLeft: 20 }}
                            >
                              {item.details}
                            </Text>
                            <View style={{ flexDirection: "row" }}>
                              <View
                                style={{
                                  justifyContent: "flex-start",
                                  alignItems: "center",
                                  flexDirection: "row",
                                }}
                              >
                                <Icon name="flame" size={25} color="red" />
                                <Text style={{}}>{item.kcal} </Text>
                              </View>
                              <View
                                style={{
                                  justifyContent: "flex-end",
                                  alignItems: "center",
                                  flexDirection: "row",
                                }}
                              >
                                <Icon
                                  name="thumbs-up-outline"
                                  size={15}
                                  color="green"
                                />
                                <Text style={{ fontSize: 15 }}>
                                  {item.like}
                                </Text>
                              </View>
                            </View>
                          </View>
                        </Pressable>
                      </SafeAreaView>
                    </Animatable.View>
                  );
                }}
              />
            </View>
          </View>
        </View>
      </LinearGradient>
    </ScrollView>
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
    marginTop: "20px",
  },
  backLogo: {
    marginLeft: "10px",
    width: "50px",
    height: "50px",
  },
  lambanhLogo: {
    marginTop: "10px",
    height: "50px",
    width: "50px",
    resizeMode: "contain",
  },
  titlePage: {
    alignItems: "center",
    justifyContent: "center",

    flex: "1",
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
  searchBar: {
    width: 300,
    height: 50,
    backgroundColor: "#d6d6d684",
    borderRadius: 10,
    padding: 10,
    fontSize: 16,
    fontWeight: 600,
    color: "#949292",
  },
  imgSe: {
    height: 40,
    width: 40,
    resizeMode: "contain",
    marginLeft: 20,
    borderRadius: 5,
  },
  cangiua: {
    justifyContent: "center",
    alignItems: "center",
  },
  filter: {
    flexDirection: "row",
    padding: "10px",
    justifyContent: "flex-start",
    borderBottomWidth: 1,
    borderBottomColor: "black",
    marginVertical: 10,
    alignItems: "center",

    margin: "5%",
  },
  filterText: {
    fontSize: 20,
    fontWeight: 600,
    color: "#949292",
  },
  buttonFilter: {
    width: 70,
    height: 30,
    borderBlockColor: "black",
    borderWidth: 1,
    alignContent: "center",
    justifyContent: "center",
    borderRadius: 10,
    flexDirection: "row",
    marginRight: 10,
    
  },
});

export default dmBanh;
