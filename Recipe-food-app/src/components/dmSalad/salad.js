import { useNavigation } from "@react-navigation/native";
import React from "react";
import { useState } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  Image,
  Pressable,
} from "react-native";

const colors = ["#FCE5A9", "#E8CA7B", "#FBCCA5", "#FCE5A9", "#E8CA7B", "#FBCCA5", "#FCE5A9", "#E8CA7B"];

const Salad = () => {
  const navigation = useNavigation();
  const foodIems = [
    {
      image: require("./../../../assets/IMG/Salad/Saladga.png"),
      Name: "Salad gà",
      details: "Salad gà với hương vị thơm ngon và ngon miệng, thường kết hợp với các loại rau sống.",
    },
    {
        image: require("./../../../assets/IMG/Salad/Saladhoaqua.png"),
        Name: "Salad hoa quả",
        details: "Salad hoa quả tươi mát với hương vị ngọt ngào và đa dạng của hoa quả.",
    },
    {
        image: require("./../../../assets/IMG/Salad/Saladmuc.png"),
        Name: "Salad mực",
        details: "Salad mực ngon mắt với thịt mực tươi ngon và nhiều loại rau sống.",
    },
    {
        image: require("./../../../assets/IMG/Salad/Saladtrungcahoi.png"),
        Name: "Salad trứng cá hồi",
        details: "Salad trứng cá hồi với hương vị độc đáo của cá hồi và các loại rau sống.",
    },
    {
      image: require("./../../../assets/IMG/Salad/Saladdaugiam.png"),
      Name: "Salad dầu giấm",
      details: "Salad dầu giấm với hương vị đậm đà của dầu giấm và các loại rau sống.",
    },
    {
        image: require("./../../../assets/IMG/Salad/Saladbapcaitim.png"),
        Name: "Salad bắp cải tím",
        details: "Salad bắp cải tím với sốt mayonnaise béo ngậy và hương vị độc đáo.",
    },
    {
        image: require("./../../../assets/IMG/Salad/Saladrongnhothanhcua.png"),
        Name: "Salad rong nho",
        details: "Salad rong nho thanh cua với hương vị độc đáo của thanh cua và nho.",
    },
    {
      image: require("./../../../assets/IMG/Salad/Saladkiwi.png"),
      Name: "Salad kiwi",
      details: "Salad kiwi với hương vị tươi mát và ngọt ngào của kiwi.",
    },
   
  ];
  return (
    <View style={style.container}>
      <View style={style.header}>
        <View style={style.container1}>
          <Pressable
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Image
              source={require("./../../../assets/IMG/Salad/back.png")}
              style={style.backLogo}
            ></Image>
          </Pressable>
        </View>
        <View style={style.container2}>
          <Image
            source={require("./../../../assets/IMG/Salad/salad.png")}
            style={style.saladLogo}
          ></Image>
          <Text style={style.text}> Salad </Text>
        </View>
      </View>
            <View style={style.body}>{foodIems.map((item, index) => (
        <View
          style={{
            ...style.subcontainer,
            backgroundColor: colors[index % colors.length],
          }}
          key={index}
        >
          <Image source={item.image} style={style.images} />
          <Text style={style.nameFood}>{item.Name}</Text>
          <Text style={style.mt}>Mô tả</Text>
          <Text style={style.detailsFood}>{item.details}</Text>
        </View>
      ))}</View>
      
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
    flex: "2",
    flexDirection: "row",
    marginHorizontal: 10,
    marginVertical: 5,
    flexWrap: "wrap",

    justifyContent: "space-between",
  },
  header: {
    flexDirection: "row",
    marginBottom: 10,
   
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
  saladLogo: {
    marginTop: "10px",
    height: "100px",
    width: "100px",
  },
  container2: {
    alignItems: "center",
    marginLeft:'80px',
    marginTop:80
  },
  text: {
    marginTop: "10px",
    fontSize: 24,
    fontWeight: "bold",
    fontFamily: "Segoe UI",
  },
  subcontainer: {
    margin: "10px",
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
  mt:{
    fontSize: "13px",
  },
  detailsFood: {
    fontSize: "12px",
    textAlign: 'center',
  },
});
export default Salad;
