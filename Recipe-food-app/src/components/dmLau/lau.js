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

const Lau = () => {
  const navigation = useNavigation();
  const foodIems = [
    {
      image: require("./../../../assets/IMG/Lau/Laucachepgion.png"),
      Name: "Lẩu cá chép giòn",
      details: "Món lẩu cá chép giòn là một món ăn độc đáo với hương vị hấp dẫn. Cá chép chiên giòn bên ngoài, mềm mịn bên trong, kết hợp với nước dùng đậm đà và rau sống tươi mát.",
    },
    {
        image: require("./../../../assets/IMG/Lau/Lauthai.png"),
        Name: "Lẩu Thái",
        details: "Lẩu Thái là một món lẩu đậm đà với gia vị đặc trưng của Thái Lan, hương vị hấp dẫn của nước dùng và hỗn hợp gia vị.",
    },
    {
        image: require("./../../../assets/IMG/Lau/Lauhaisan.png"),
        Name: "Lẩu hải sản",
        details: "Lẩu hải sản là món ăn phong phú với các loại hải sản tươi ngon ngâm trong nước dùng đậm đà và gia vị.",
    },
    {
        image: require("./../../../assets/IMG/Lau/Launam.png"),
        Name: "Lẩu nấm",
        details: "Lẩu nấm là món lẩu ngon miệng với hương vị thơm ngon và đa dạng từ các loại nấm.",
    },
    {
      image: require("./../../../assets/IMG/Lau/Laubo.jpg"),
      Name: "Lẩu bò",
      details: "Lẩu bò hấp dẫn với thịt bò tươi ngon và nước dùng đậm đà, tạo hương vị thơm ngon và ngon miệng.",
    },
    {
        image: require("./../../../assets/IMG/Lau/Laude.jpg"),
        Name: "Lẩu dê",
        details: "Lẩu dê với thịt dê thơm ngon và nước dùng đậm đà, tạo sự kết hợp độc đáo và ngon miệng.",
    },
    {
        image: require("./../../../assets/IMG/Lau/Laugalagiang.jpg"),
        Name: "Lẩu gà lá giang",
        details: "Lẩu gà lá giang với hương vị độc đáo từ lá giang và thịt gà tươi ngon.",
    },
    {
      image: require("./../../../assets/IMG/Lau/Laumam.png"),
      Name: "Lẩu mắm",
      details: "Lẩu mắm với hương vị cay nồng và đậm đà từ mắm tươi, thường được kết hợp với nhiều loại thực phẩm để tạo nên một bữa ăn thú vị.",
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
              source={require("./../../../assets/IMG/Lau/back.png")}
              style={style.backLogo}
            ></Image>
          </Pressable>
        </View>
        <View style={style.container2}>
          <Image
            source={require("./../../../assets/IMG/Lau/lau.png")}
            style={style.lauLogo}
          ></Image>
          <Text style={style.text}> Lẩu </Text>
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
  lauLogo: {
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
export default Lau;
