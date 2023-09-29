import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

const BodyIMG2 = () => {
  return (
    <View>
      <View style={styles.container}>
        <Image
          source={require("./../../../assets/People.png")}
          style={styles.imgPeople}
    
        ></Image>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  imgPeople: {
    width: 60,
    height: 60,
  },
});

export default BodyIMG2;
