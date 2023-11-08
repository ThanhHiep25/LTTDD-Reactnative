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

const Sup = () => {
  const navigation = useNavigation();
  const foodIems = [
    {
      image: require("./../../../assets/IMG/Sup/Supcuabido.png"),
      Name: "Súp cua bí đỏ",
      details: "Súp cua bí đỏ là một món súp ngọt ngào với hương vị đặc biệt của cua và bí đỏ, tạo nên sự ngon miệng và bổ dưỡng.",
    },
    {
        image: require("./../../../assets/IMG/Sup/Suphotvitlon.png"),
        Name: "Súp hột vịt lộn",
        details: "Súp hột vịt lộn là một món súp độc đáo với hột vịt lộn thơm ngon, thêm vào nước dùng sánh và ngon miệng.",
    },
    {
        image: require("./../../../assets/IMG/Sup/Supluon.png"),
        Name: "Súp lươn",
        details: "Súp lươn hấp dẫn với hương vị lươn thơm ngon và nước dùng đậm đà.",
    },
    {
        image: require("./../../../assets/IMG/Sup/Supga.jpg"),
        Name: "Súp gà",
        details: "Súp gà truyền thống với hương vị thơm ngon và đậm đà của thịt gà và gia vị.",
    },
    {
      image: require("./../../../assets/IMG/Sup/Supcahoi.png"),
      Name: "Súp cá hồi",
      details: "Súp cá hồi với thịt cá hồi tươi ngon và nước dùng đậm đà, tạo hương vị tinh tế và bổ dưỡng.",
    },
    {
        image: require("./../../../assets/IMG/Sup/Supmangtaynammo.jpg"),
        Name: "Súp măng tây nấm mỡ",
        details: "Súp măng tây nấm mỡ ngon với loại nấm mỡ, măng tây tươi ngon và nước dùng thơm ngon.",
    },
    {
        image: require("./../../../assets/IMG/Sup/Suphautrungbachthao.png"),
        Name: "Súp hàu trứng",
        details: "Súp hàu hấp dẫn với hương vị độc đáo của hàu và nước dùng đậm đà.",
    },
    {
      image: require("./../../../assets/IMG/Sup/Supbaongutoyen.jpg"),
      Name: "Súp bào ngư tổ yến",
      details: "Súp bào ngư tổ yến ngon mắt với sợi yến béo ngậy và nước dùng thơm ngon, tạo sự hòa quyện và độc đáo.",
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
              source={require("./../../../assets/IMG/Sup/back.png")}
              style={style.backLogo}
            ></Image>
          </Pressable>
        </View>
        <View style={style.container2}>
          <Image
            source={require("./../../../assets/IMG/Sup/nausoup.png")}
            style={style.supLogo}
          ></Image>
          <Text style={style.text}> Nấu Súp</Text>
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
  supLogo: {
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
export default Sup;
