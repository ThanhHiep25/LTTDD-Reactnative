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

const Main = () => {
  const navigation = useNavigation();
  const foodIems = [
    {
      image: require("./../../../assets/IMG/NuocCham/Nuocmamchuangot.png"),
      Name: "Nước mắm chua ngọt",
      details: "Nước mắm chua ngọt với sự kết hợp độc đáo giữa hương vị chua và ngọt, là nguyên liệu quen thuộc trong nhiều món ăn Á Đông.",
    },
    {
        image: require("./../../../assets/IMG/NuocCham/Muoitieuchanh.png"),
        Name: "Muối tiêu chanh",
        details: "Muối tiêu chanh với hương vị cay và chua tạo điểm nhấn trong nhiều món ăn.",
    },
    {
        image: require("./../../../assets/IMG/NuocCham/Mamtom.png"),
        Name: "Mắm tôm",
        details: "Mắm tôm là một loại mắm đặc trưng trong ẩm thực Á Đông, tạo hương vị đậm đà và độc đáo.",
    },
    {
        image: require("./../../../assets/IMG/NuocCham/Nuocmamgung.png"),
        Name: "Nước mắm gừng",
        details: "Nước mắm gừng kết hợp vị cay của gừng với hương vị đặc trưng của mắm, tạo một nước mắm độc đáo.",
    },
    {
      image: require("./../../../assets/IMG/NuocCham/Muoiotchanh.png"),
      Name: "Muối ớt chanh",
      details: "Muối ớt chanh với sự kết hợp của muối, ớt cay, và chanh tạo nên hương vị cay và chua độc đáo.",
    },
    {
        image: require("./../../../assets/IMG/NuocCham/Nuocmamme.png"),
        Name: "Nước mắm me",
        details: "Nước mắm me với hương vị cay ngọt độc đáo của me và mắm.",
    },
    {
        image: require("./../../../assets/IMG/NuocCham/Nuocchamchao.png"),
        Name: "Nước chấm chao",
        details: "Nước chấm chao với hương vị đậm đà và độc đáo, thường ăn kèm với các món ăn xào và nướng.",
    },
    {
      image: require("./../../../assets/IMG/NuocCham/Mamnem.png"),
      Name: "Mắm nêm",
      details: "Mắm nêm với hương vị đậm đà và cay nồng, thường được ăn kèm với các món ăn Việt Nam truyền thống.",
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
              source={require("./../../../assets/IMG/NuocCham/back.png")}
              style={style.backLogo}
            ></Image>
          </Pressable>
        </View>
        <View style={style.container2}>
          <Image
            source={require("./../../../assets/IMG/NuocCham/nuoccham.png")}
            style={style.nuocchamLogo}
          ></Image>
          <Text style={style.text}> Nước Chấm</Text>
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
  nuocchamLogo: {
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
export default Main;
