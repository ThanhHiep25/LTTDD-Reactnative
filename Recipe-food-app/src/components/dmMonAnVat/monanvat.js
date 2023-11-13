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

const MonAnVat = () => {
  const navigation = useNavigation();
  const foodIems = [
    {
      image: require("./../../../assets/IMG/MonAnVat/Trasuakemtrung.png"),
      Name: "Trà sữa kem trứng",
      details: "Trà sữa kem trứng là một thức uống trà sữa ngon mắt với lớp kem trứng béo ngậy, tạo sự kết hợp hoàn hảo giữa ngọt ngào và béo ngậy.",
    },
    {
        image: require("./../../../assets/IMG/MonAnVat/Trungcutlonxaome.png"),
        Name: "Trứng cút lộn xào me",
        details: "Trứng cút lộn xào me với hương vị cay nồng và độ ngọt đặc trưng, tạo một món ăn hấp dẫn.",
    },
    {
        image: require("./../../../assets/IMG/MonAnVat/Khoaitaynghien.png"),
        Name: "Khoai tây nghiền",
        details: "Khoai tây nghiền béo ngậy, thường được kết hợp với gia vị để tạo ra một món ăn thơm ngon.",
    },
    {
        image: require("./../../../assets/IMG/MonAnVat/Bapxaomohanh.png"),
        Name: "Bắp xào mỡ hành",
        details: "Bắp xào mỡ hành với hương vị thơm ngon của mỡ hành và bắp tươi ngon.",
    },
    {
      image: require("./../../../assets/IMG/MonAnVat/Chagiohaisanphomai.png"),
      Name: "Chả giò hải sản phô mai",
      details: "Chả giò hải sản phô mai giòn và ngon mắt với lớp vỏ giòn, hải sản ngon và phô mai bên trong.",
    },
    {
        image: require("./../../../assets/IMG/MonAnVat/Xoailac.png"),
        Name: "Xoài lắc",
        details: "Xoài lắc ngọt ngào với hương vị tươi mát và ngọt ngào.",
    },
    {
        image: require("./../../../assets/IMG/MonAnVat/Changangamxatac.png"),
        Name: "Chân gà ngâm sả tắc",
        details: "Chân gà ngâm sả tắc với hương vị độc đáo của sả tắc và thịt gà, tạo sự hấp dẫn.",
    },
    {
      image: require("./../../../assets/IMG/MonAnVat/Goicuon.png"),
      Name: "Gỏi cuốn",
      details: "Gỏi cuốn tươi ngon với các loại nguyên liệu cuốn trong lá bánh tráng, thường ăn kèm với nước mắm pha ngon đậm đà.",
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
              source={require("./../../../assets/IMG/MonAnVat/back.png")}
              style={style.backLogo}
            ></Image>
          </Pressable>
        </View>
        <View style={style.container2}>
          <Image
            source={require("./../../../assets/IMG/MonAnVat/snack.png")}
            style={style.mavLogo}
          ></Image>
          <Text style={style.text}> Món Ăn Vặt</Text>
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
  mavLogo: {
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
export default MonAnVat;
