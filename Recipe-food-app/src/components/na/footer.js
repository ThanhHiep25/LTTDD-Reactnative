import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, Pressable, StyleSheet, View } from "react-native";

const Footer = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Pressable style={styles.Pre} onPress={() => navigation.goBack()}>
        <Image
          source={require("../../../assets/IMG/namell/Group 6.png")}
          style={styles.img}
        ></Image>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
  },
  Pre: {
    width: 70,
    height: 70,
  },
  img: {
    width: 70,
    height: 70,
  },
});

export default Footer;
