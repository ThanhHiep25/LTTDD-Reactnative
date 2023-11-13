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

const Nuong = () => {
  const navigation = useNavigation();
  const foodIems = [
    {
      image: require("./../../../assets/IMG/DoNuong/Thitbachinuongsate.png"),
      Name: "Thịt ba chỉ nướng sa tế",
      details: "Thịt ba chỉ nướng sa tế là một món thịt ba chỉ mỏng được nướng giòn và thấm đẫm hương vị cay nồng và đậm đà.",
    },
    {
        image: require("./../../../assets/IMG/DoNuong/Bachtuocnuongsate.png"),
        Name: "Bạch tuộc nướng sa tế",
        details: "Bạch tuộc nướng sa tế là món hải sản thơm ngon với vị cay nồng và vị ngọt của bạch tuộc.",
    },
    {
        image: require("./../../../assets/IMG/DoNuong/Ganuongmatong.png"),
        Name: "Gà nướng mật ong",
        details: "Gà nướng mật ong là món thịt gà ngon mắt với lớp mật ong bóng loáng tạo hương vị hấp dẫn.",
    },
    {
        image: require("./../../../assets/IMG/DoNuong/Thitxiennuongraucu.png"),
        Name: "Thịt xiên nướng rau củ",
        details: "Thịt xiên nướng rau củ là món thịt xiên giòn và thơm phôi pha với rau củ tươi ngon.",
    },
    {
      image: require("./../../../assets/IMG/DoNuong/Sohuyetnuongmohanh.png"),
      Name: "Sò huyết nướng mỡ hành",
      details: "Sò huyết nướng mỡ hành là món hấp dẫn với hương vị độc đáo của sò huyết và hành mỡ.",
    },
    {
        image: require("./../../../assets/IMG/DoNuong/Tomnuongmuoiot.jpg"),
        Name: "Tôm nướng muối ớt",
        details: "Tôm nướng muối ớt ngon mắt với hương vị muối ớt cay nồng và tôm tươi ngon.",
    },
    {
        image: require("./../../../assets/IMG/DoNuong/Suonsunnuong.png"),
        Name: "Sườn sụn nướng",
        details: "Sườn sụn nướng giòn với hương vị đậm đà, tạo sự kết hợp hấp dẫn giữa cay nồng và ngon miệng.",
    },
    {
      image: require("./../../../assets/IMG/DoNuong/Bonuonglalot.png"),
      Name: "Bò nướng lá lốt",
      details: "Bò nướng lá lốt với hương vị độc đáo từ lá lốt và thịt bò tươi ngon.",
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
              source={require("./../../../assets/IMG/DoNuong/back.png")}
              style={style.backLogo}
            ></Image>
          </Pressable>
        </View>
        <View style={style.container2}>
          <Image
            source={require("./../../../assets/IMG/DoNuong/donuong.png")}
            style={style.nuongLogo}
          ></Image>
          <Text style={style.text}> Đồ Nướng</Text>
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
  nuongLogo: {
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
export default Nuong;
