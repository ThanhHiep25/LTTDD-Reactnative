import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";

const GD_CT = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const item = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.view}>
        <Image
          source={require("../../../assets/IMG/Lau/lau2.gif")}
          style={styles.img}
        />
      </View>

      <View style={styles.view1}>
        <Pressable
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Image
            source={require("../../../assets/IMG/Lau/back.png")}
            style={styles.img1}
          />
        </Pressable>
      </View>

      <View style={styles.view}>
        <Image source={item.img} style={styles.img2} />
      </View>

      <View style={styles.view2}>
        <Text style={styles.text}>{item.name}</Text>
      </View>

      <View style={styles.view2}>
        <Text style={styles.text1}>Nguyên liệu :</Text>
        <Text style={styles.text2}>{item.nguyenlieu}</Text>

        <Text style={styles.text1}>Các bước thực hiện. </Text>
        <Text style={styles.text1}>Bước 1: Sơ chế nguyên liệu. </Text>
        <Text style={styles.text2}>{item.buoc1}</Text>

        <Text style={styles.text1}>Bước 2: Nấu {item.name}. </Text>
        <Text style={styles.text2}>{item.buoc2}</Text>

        <Text style={styles.text1}>Bước 3: Hoàn thành. </Text>
        <Text style={styles.text2}>{item.buoc3}</Text>

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
    alignItems: "center",
    margin: 20,
    marginBottom: 0,
  },
  view1: {
    marginLeft: 20,
  },
  view2: {
    margin: 20,
  },
  img: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  img1: {
    width: 50,
    height: 50,
    resizeMode: "contain",
  },
  img2: {
    width: 380,
    height: 240,
    resizeMode: "contain",
    borderRadius: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: 700,
    color: "#E87104",
  },
  text1: {
    fontSize: 20,
    fontWeight: 700,
    color: "#64CA2",
  },
  text2: {
    fontSize: 16,
    fontWeight: 600,
    color: "#64CA2",
    margin: 30,
    textAlign: "justify",
  },
});

export default GD_CT;
