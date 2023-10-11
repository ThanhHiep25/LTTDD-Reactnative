import React from "react";
import { useState } from "react";
import { StyleSheet, View, ScrollView, Text, Image } from "react-native";
const Main = () => {
  const [foodIems, setFoodItems] = useState([
    {
      imageFood: require("./../../../assets/IMG/dmBanh/muttinVietQuoc.png"),
      Name: "Bánh muffin việt quất",
      details: "Trứng gà 1 quả\n Bột mì 150 gr\n Sữa tươi không\n . . .",
    },
    {
      image: require("./../../../assets/IMG/dmBanh/banh-su-kem-singapore.png"),
      Name: "Bánh su kem Singapo",
      details: "Trứng gà 1 quả\n Bột mì 150 gr\n Sữa tươi không\n . . .",
    },
    {
      image: require("./../../../assets/IMG/dmBanh/banh-su-kem-singapore.png"),
      Name: "Bánh su kem Singapo",
      details: "Trứng gà 1 quả\n Bột mì 150 gr\n Sữa tươi không\n . . .",
    },
    {
      image: require("./../../../assets/IMG/dmBanh/banh-su-kem-singapore.png"),
      Name: "Bánh su kem Singapo",
      details: "Trứng gà 1 quả\n Bột mì 150 gr\n Sữa tươi không\n . . .",
    },
  ]);
  return (
    <View style={style.container} >
      {foodIems.map((item) => (
        <View style={style.subcontainer} >
         <Image source={item.imageFood} style={style.images}/>
          <Text style={style.nameFood}>{item.Name}</Text>
          <Text>Nguyên liệu</Text>
          <Text style={style.detailsFood}>{item.details}</Text>
        </View>
      ))}
    </View>
  );
};
const style = StyleSheet.create({
  container: {
    display: "flex",
    flex: "2",
    flexDirection: "row",
    marginHorizontal: 10,
    marginVertical: 5,
    flexWrap: "wrap",

    justifyContent: "space-between",
  },

  images: {
    borderRadius: 15,
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
    backgroundColor: "white",
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
   
  },
  nameFood: {
    fontWeight: "bold",
    fontSize: "14px",
  },
  detailsFood: {
    fontSize: "12px",
  },
});
export default Main;
