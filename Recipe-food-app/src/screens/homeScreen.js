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
//import foodIems from "../../dataMonan";


const Home = ({ navigation }) => {
  const route = useRoute();
  const user = route.params;

  //var [dsmonan, setDsmonan] = useState([]);
 
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState([]);
  var dmMonan = (item) => {
    if (item.id == 1) setDsmonan(foodIems.Banh);
    else if (item.id == 2) setDsmonan(foodIems.foodIemsSoup);
    else if (item.id == 3) setDsmonan(foodIems.nuong);
    else if (item.id == 4) setDsmonan(foodIems.Lau);
    else if (item.id == 5) setDsmonan(foodIems.Nuoctraicay);
    else if (item.id == 6) setDsmonan(foodIems.Anvat);
    else if (item.id == 7) setDsmonan(foodIems.Salad);
    else if (item.id == 8) setDsmonan(foodIems.NuocCham);
    navigation.navigate("dmbanh", {
      bgcl: item.bgcl,
      title: item.name,
      img: item.imgLocal,
      dsmon: dsmonan,
    });
  };

  const onDeletePress = (index) => {
    setSelected(selected.slice(index, -1));
    setSearch("");
  };

  // useEffect(()=>{
  //  dmMonan
  // },[])
 

  useEffect(() => {
    dmMonan;
  }, []);


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
          <Image
            source={require("../../assets/IMG/home/User.png")}
            style={styles.img1}
          />
        </Pressable>
      </View>

      <View style={styles.view1}>
        <Text style={styles.text}>Chào mừng,</Text>
        <Text style={styles.text1}>Nay chúng ta bắt đầu nấu gì đây !!</Text>
      </View>

      <View style={styles.view2_1}>
        <TextInput
          style={styles.textIn}
          placeholder="Search Recipe Food"
          value={search}
          onChangeText={(text) => {
            setSearch(text);
          }}
        ></TextInput>
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

      <View style={styles.view2}>
        <FlatList
          data={selected}
          horizontal={true}
          scrollToOverflowEnabled={true}
          renderItem={({ item }) => (
            <View style={styles.view3}>
              <View style={styles.PreSe}>
                <Text style={styles.textPreSe}>{item.name}</Text>
                <Pressable onPress={onDeletePress}>
                  <Image
                    source={require("../../assets/IMG/setting/delete1.png")}
                    style={styles.imgDelete}
                  />
                </Pressable>
              </View>
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
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

                  // <Pressable
                  // style={styles.Pre1}
                  // onPress={() => {
                  //   dmMonan(item);
                  // }}>  

                <Pressable
                  style={styles.Pre1}
                  onPress={() => {
                    navigation.navigate("dmbanh", {
                      bgcl: item.bgcl,
                      title: item.name,
                      img: item.imgLocal,
                      colorItem: item.colorItem,
                      id: item.id,
                    });

                    dmMonan(item);

                  }}
                >
                  <Pressable
                    style={styles.Pre1}
                    onPress={() => {
                      if (item.id == 1) navigation.navigate("dmbanh");
                      if (item.id == 2) navigation.navigate("dmsup");
                      if (item.id == 3) navigation.navigate("dmnuong");
                      if (item.id == 4) navigation.navigate("dmlau");
                      if (item.id == 5) navigation.navigate("dmnuoctraicay");
                      if (item.id == 6) navigation.navigate("dmmonanvat");
                      if (item.id == 7) navigation.navigate("dmsalad");
                      if (item.id == 8) navigation.navigate("dmnuoccham");
                    }}
                  />
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
  },
  view2: {
    marginTop: 20,
    margin: 20,
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
});

export default Home;
