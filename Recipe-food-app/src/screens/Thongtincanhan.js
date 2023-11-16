import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";

const Thongtincanhan = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const user = route.params;
  return (
    <View style={styles.contrainer}>
      <Pressable
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Image
          source={require("../../assets/IMG/Banh/back.png")}
          style={styles.backLogo}
        ></Image>
      </Pressable>
      <View style={styles.view}>
        <Image style={styles.img} source={{ uri: user.img }} />
        <Text style={styles.text}>{user.name}</Text>
      </View>

      <View style={styles.view1}>
        <View style={styles.view1_1}>
          <Text style={styles.text1}>Thông tin :</Text>
          <Text style={styles.text1_1}>Email : {user.email}</Text>
          <Text style={styles.text1_1}>Ngày bắt đầu :{user.date}</Text>
        </View>
      </View>

      <View style={styles.view1}>
        <View style={styles.view1_1}>
          <Text style={styles.text1}>Sở thích :</Text>
          <Text style={styles.text1_1}>Món ăn yêu thích : {user.sothich}</Text>
          <Text style={styles.text1_1}>
            Những món ăn đã nấu : {user.yeuthich}
          </Text>
        </View>
      </View>

      <View style={styles.view2}>
        <Pressable
          style={styles.Pre}
          onPress={() => {
            navigation.navigate("welcome");
          }}
        >
          <Text style={styles.textPre}>Đăng xuất</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contrainer: {
    flex: 1,
    backgroundColor: "#D0F4DE9C",
  },
  view: {
    alignItems: "center",
    marginTop: 40,
  },
  view1: {
    marginTop: 40,
    alignItems: "center",
  },
  view1_1: {
    height: "auto",
    width: 380,
    backgroundColor: "#ffffff94",
    borderRadius: 20,
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    padding: 20,
  },
  view2: {
    marginTop: 60,
    margin: 20,
    alignItems: "flex-end",
  },
  img: {
    width: 80,
    height: 80,
    resizeMode: "contain",
    borderRadius: 50,
  },
  text: {
    fontSize: 20,
    fontWeight: 600,
  },
  text1: {
    fontSize: 18,
    fontWeight: 500,
  },
  text1_1: {
    fontSize: 16,
    marginTop: 10,
  },
  Pre: {
    height: 50,
    width: 150,
    backgroundColor: "#f04933c5",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  textPre: {
    color: "#fff",
    fontSize: 16,
    fontWeight: 700,
  },
  backLogo: {
    margin:30,
    width: 50,
    height: 50,
  },
});

export default Thongtincanhan;
