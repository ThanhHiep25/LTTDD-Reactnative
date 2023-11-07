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

const Banh = () => {
  const navigation = useNavigation();
  const foodIems = [
    {
      image: require("./../../../assets/IMG/Banh/Banhbonglan.png"),
      Name: "Bánh bông lan",
      details: "Bánh bông lan mềm mịn, thơm ngon với lớp kem và mứt tạo nên hương vị ngọt ngào.",
    },
    {
        image: require("./../../../assets/IMG/Banh/Banhsukem.jpg"),
        Name: "Bánh su kem",
        details: "Bánh su kem với lớp vỏ giòn và nhân kem béo ngậy, hòa quyện trong một hương vị tinh tế.",
    },
    {
        image: require("./../../../assets/IMG/Banh/Banhflan.jpg"),
        Name: "Bánh flan",
        details: "Bánh flan ngon mắt với lớp caramel ngọt và bánh kem mịn màng, tạo sự hòa quyện và thơm ngon.",
    },
    {
        image: require("./../../../assets/IMG/Banh/Banhdongxu.png"),
        Name: "Bánh đồng xu",
        details: "Bánh đồng xu với hình dáng và hương vị độc đáo, thường được làm trong các dịp lễ kỷ niệm.",
    },
    {
      image: require("./../../../assets/IMG/Banh/Banhcupcake.png"),
      Name: "Bánh cupcake",
      details: "Bánh cupcake nhỏ xinh với lớp kem và trang trí đa dạng, thường là món tráng miệng lý tưởng.",
    },
    {
        image: require("./../../../assets/IMG/Banh/Banhdonut.png"),
        Name: "Bánh donut",
        details: "Bánh donut giòn mặn, ngọt hoặc nhân như sô cô la, hấp dẫn với hình dáng tròn và lớp đường mịn.",
    },
    {
        image: require("./../../../assets/IMG/Banh/Banhkhoaimochien.jpg"),
        Name: "Bánh khoai mỡ chiên",
        details: "Bánh khoai mỡ chiên giòn, ngon với lớp vỏ ngoài và khoai mỡ bên trong.",
    },
    {
      image: require("./../../../assets/IMG/Banh/Banhmuffinvietquat.png"),
      Name: "Bánh muffin việt quất",
      details: "Bánh muffin việt quất ngon mắt với hương vị thơm ngon và việt quất tươi ngon bên trong.",
    },
   
  ];
  // thêm
  const handleItemPress = () => {
    // navigation.navigate('ctdmbanh', { selectedItem: item }); 
    navigation.navigate('ctdmbanh'); 
  };
  ///
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
              source={require("./../../../assets/IMG/Banh/back.png")}
              style={style.backLogo}
            ></Image>
          </Pressable>
        </View>
        <View style={style.container2}>
          <Image
            source={require("./../../../assets/IMG/Banh/iconLamBanh.png")}
            style={style.lambanhLogo}
          ></Image>
          <Text style={style.text}> Làm Bánh</Text>
        </View>
      </View>
          <View style={style.body}>{foodIems.map((item, index) => (
            // // thêm
            <Pressable key={index} onPress={() => handleItemPress()}> 
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
        </Pressable> // thêm
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
  lambanhLogo: {
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
export default Banh;
