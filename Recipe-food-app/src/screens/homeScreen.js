import React, { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  SafeAreaViewComponent,
  SafeAreaView,
} from "react-native";
import datahome from "../../datahome";
import dataDanhMuc from "../../dataDanhmuc";
import { useRoute } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import Fuse from "fuse.js";
import datamonan from "../../dataMonan";
//import foodIems from "../../dataMonan";

const Home = ({ navigation }) => {
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  // Chuyển đối tượng thành mảng các đối tượng để sử dụng Fuse
  const dataArray = Object.values(datamonan).flatMap(items => items);

  const fuse = new Fuse(dataArray, {
    keys: ["Name"],
  });
  const handleSearch = (text) => {
    setSearch(text);
    const result = fuse.search(text).slice(0,4);
    setSearchResult(result);
    console.log(text)
    console.log(dataArray)
    console.log(result)
    console.log(datamonan)
  };

  const route = useRoute();
  const user = route.params;

  //var [dsmonan, setDsmonan] = useState([]);

  const [selected, setSelected] = useState([]);

  const onDeletePress = (index) => {
    setSelected(selected.slice(index, -1));
    setSearch("");
  };

  return (
    <View style={styles.container}>
      <View style={styles.view}>
        <Pressable
          onPress={() => {
            navigation.navigate("setting", user);
          }}
        >
          <Image
            source={require("../../assets/IMG/home/setting.png")}
            style={styles.img}
          ></Image>
        </Pressable>

        <Pressable>
          <Image source={{ uri: user.img }} style={styles.img1} />
        </Pressable>
      </View>

      <View style={styles.view1}>
        <Text style={styles.text}>Chào mừng,{user.name}</Text>
        <Text style={styles.text1}>Nay chúng ta bắt đầu nấu gì đây !!</Text>
      </View>

      <View style={styles.view2_1}>
        <TextInput
          style={styles.textIn}
          placeholder="Search Recipe Food"
          onChangeText={handleSearch}
          value={search}
        />
        <Pressable
          onPress={() => {
            const dataSearch = datahome.filter((item) => {
              return item.type == search;
            });
            setSelected(dataSearch);
          }}
        >
          <Image
            source={require("../../assets/IMG/home/search.png")}
            style={styles.imgSe}
          />
        </Pressable>
      </View>
      {/* search */}
      <View style={styles.cangiua}>
        {search.length > 0 && (
          <ScrollView style={styles.searchTab}>
            {searchResult.map((result) => (
              <Pressable
                onPress={() => {
                  navigation.navigate("dmctFood", { item: result.item });
                }}
                style={styles.khungsearch}
              >
                <Text style={styles.searchResulttext} key={result.item.Name}>
                  {result.item.Name}
                </Text>
                <Image style={styles.imgSearch} source={result.item.image} />
              </Pressable>
            ))}
          </ScrollView>
        )}
      </View>
      <View style={styles.view2}>
        <Text style={styles.text2}>Công thức nấu mới : </Text>
        <FlatList
          data={datahome}
          horizontal={true}
          scrollToOverflowEnabled={true}
          renderItem={({ item }) => (
            <SafeAreaView style={styles.view3}>
              <Pressable
                style={styles.Pre}
                onPress={() => {
                  navigation.navigate("gdct", item);
                  user;
                }}
              >
                <View style={styles.view3_1}>
                  <Image source={item.img} style={styles.img3} />
                </View>
                <Text style={styles.textPre}>{item.name} :</Text>
                <ScrollView showsVerticalScrollIndicator={false}>
                  <Text style={styles.textPre1}>{item.des}</Text>
                </ScrollView>
              </Pressable>
            </SafeAreaView>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>

      <View style={styles.view4}>
        <View style={styles.view4_1}>
          <Image
            source={require("../../assets/IMG/home/menudanhmuc.png")}
            style={styles.img}
          />
          <Text style={styles.text3}>Danh mục công thức : </Text>
        </View>
        <View style={styles.view4_2}>
          <View style={styles.view4_2_1}>
            <FlatList
              data={dataDanhMuc}
              numColumns={4}
              renderItem={({ item }) => (
                <Pressable
                  style={styles.Pre1}
                  onPress={() => {
                    navigation.navigate("danhmucFood", {
                      bgcl: item.bgcl,
                      title: item.name,
                      img: item.imgLocal,
                      colorItem: item.colorItem,
                      id: item.id,
                    });
                  }}
                >
                  <Image source={item.imgLocal} style={styles.img4} />
                  <Text style={styles.textPre2}>{item.name}</Text>
                </Pressable>
              )}
              keyExtractor={(item) => item.id}
            />
          </View>
        </View>
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
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 20,
  },
  view1: {
    margin: 20,
    marginTop:0
  },
  view2: {
    margin: 20,
    marginTop:0
  },
  view2_1: {
    marginTop: 10,
    flexDirection: "row",
    margin: 20,
    alignItems: "center",
  },
  view3: {
    margin: 16,
  },
  view3_1: {
    justifyContent: "center",
    alignItems: "center",
  },
  view4: { margin: 20 },
  view4_1: {
    flexDirection: "row",
    alignItems: "center",
  },
  view4_2: {
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
  },
  view4_2_1: {
    height: 300,
    width: "auto",
    backgroundColor: "#EBFADD",
    borderRadius: 20,
    shadowColor: "#000000",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  img: {
    width: 30,
    height: 30,
    resizeMode: "contain",
  },
  img1: {
    width: 70,
    height: 70,
    borderRadius: 50,
    resizeMode: "contain",
  },
  img3: {
    width: 150,
    height: 100,
    resizeMode: "contain",
    borderRadius: 15,
  },
  img4: {
    width: 50,
    height: 50,
    resizeMode: "contain",
  },
  imgSe: {
    height: 40,
    width: 40,
    resizeMode: "contain",
    marginLeft: 20,
    borderRadius: 5,
  },
  imgDelete: {
    width: 20,
    height: 20,
    resizeMode: "contain",
  },
  text: {
    fontSize: 30,
    fontWeight: 700,
    marginTop: 20,
    color: "#86A789",
  },
  text1: {
    fontSize: 20,
    fontWeight: 500,
    color: "#B2C8BA",
  },
  text2: {
    fontSize: 20,
    fontWeight: 700,
    marginTop: 20,
    color: "#86A789",
  },
  textPre: {
    fontSize: 18,
    fontWeight: 700,
    marginTop: 5,
    height: 100,
  },
  textPre1: {
    fontSize: 16,
    textAlign: "justify",
    marginTop: 10,
  },
  textPre2: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 10,
    fontWeight: "bold",
    color: "#969696ca",
  },
  text3: {
    fontSize: 20,
    fontWeight: 700,
    color: "#86A789",
    marginLeft: 10,
  },
  textIn: {
    width: 300,
    height: 50,
    backgroundColor: "#d6d6d684",
    borderRadius: 10,
    padding: 10,
    fontSize: 16,
    fontWeight: 600,
    color: "#949292",
  },
  Pre: {
    width: 160,
    height: 300,
    backgroundColor: "#EDE389",
    padding: 10,
    borderRadius: 15,
  },
  Pre1: {
    alignItems: "center",
    width: 75,
    height: 120,
    margin: 10,
    marginTop: 20,
    padding: 3,
    borderRadius: 20,
  },
  PreSe: {
    width: "auto",
    height: 50,
    marginTop: 5,
    padding: 10,
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 10,
    shadowColor: "#000000",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    backgroundColor: "#b3b1b17d",
  },
  textPreSe: {
    color: "#eeebebf",
    fontSize: 16,
    fontWeight: 700,
    marginRight: 20,
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

  cangiua: {
    justifyContent: "center",
    alignItems: "center",
  },
  searchTab: {
    flex: "1",
    width: "95%",
    backgroundColor: "white",
  },
  searchResulttext: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    opacity: "200%",
  },
  imgSearch: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  khungsearch: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomColor: "#CBC9D4",
    borderBottomWidth: 1,
  },
});

export default Home;
