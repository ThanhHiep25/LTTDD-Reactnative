import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

const Header = () => {
  return (
    <View>
      <Image
        source={require("./../../../assets/Setting.png")}
        style={styles.logosetting}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  logosetting: {
    width: 30,
    height: 30,
    margin:15,
  },
});

export default Header;
