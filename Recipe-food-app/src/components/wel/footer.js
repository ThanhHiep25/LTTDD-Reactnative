import React from "react";
import { StyleSheet, View, Text, Image, Pressable,TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Footer = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View>
        <Pressable
          style={({ pressed }) => [styles.button]}
          onPress={() => navigation.navigate("name")}
        >
          <Image
            source={require("./../../../assets/IMG/well/Group.png")}
            style={styles.imgG}
          ></Image>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    margin: 40,
    marginBottom:80,
  },
  imgG: {
    width: 70,
    height: 70,
  },
});

export default Footer;
