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

const NuocTraiCay = () => {
  const navigation = useNavigation();
  const foodIems = [
    {
      image: require("./../../../assets/IMG/NuocTraiCay/Nuocepcarot.png"),
      Name: "Nước ép cà rốt",
      details: "Nước ép cà rốt là một thức uống tươi mát và bổ dưỡng với hương vị tự nhiên của cà rốt, mang đến sự sảng khoái.",
    },
    {
        image: require("./../../../assets/IMG/NuocTraiCay/Nuocepduahau.png"),
        Name: "Nước ép dưa hấu",
        details: "Nước ép dưa hấu tươi mát với hương vị ngọt và màu sắc tươi tắn.",
    },
    {
        image: require("./../../../assets/IMG/NuocTraiCay/Nuocepthom.png"),
        Name: "Nước ép dứa",
        details: "Nước ép dứa ngon mắt với hương vị tự nhiên của dứa và độ ngọt đặc trưng.",
    },
    {
        image: require("./../../../assets/IMG/NuocTraiCay/Nuocepbidao.png"),
        Name: "Nước ép bí đao",
        details: "Nước ép bí đao với hương vị thơm ngon và tươi mát, mang đến cảm giác sảng khoái.",
    },
    {
      image: require("./../../../assets/IMG/NuocTraiCay/Sinhtodau.png"),
      Name: "Sinh tố dâu",
      details: "Sinh tố dâu tươi ngon với hương vị ngọt và màu sắc tươi tắn, tạo sự kết hợp hoàn hảo giữa ngon và bổ dưỡng.",
    },
    {
        image: require("./../../../assets/IMG/NuocTraiCay/Sinhtobo.png"),
        Name: "Sinh tố bơ",
        details: "Sinh tố bơ béo ngậy với hương vị bơ thơm ngon, mang đến hương vị đặc biệt và độ ngọt mềm mịn.",
    },
    {
        image: require("./../../../assets/IMG/NuocTraiCay/Nuocepluu.png"),
        Name: "Nước ép lựu",
        details: "Nước ép lựu đặc trưng với hương vị chua ngọt độc đáo và màu sắc tươi tắn.",
    },
    {
      image: require("./../../../assets/IMG/NuocTraiCay/Sinhtodua.png"),
      Name: "Sinh tố dừa",
      details: "Sinh tố dừa béo ngậy và mát lạnh, với hương vị độc đáo của dừa tươi.",
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
              source={require("./../../../assets/IMG/NuocTraiCay/back.png")}
              style={style.backLogo}
            ></Image>
          </Pressable>
        </View>
        <View style={style.container2}>
          <Image
            source={require("./../../../assets/IMG/NuocTraiCay/thucuong.png")}
            style={style.ntcLogo}
          ></Image>
          <Text style={style.text}> Thức uống</Text>
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
  ntcLogo: {
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
export default NuocTraiCay;
