import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  Image,
  TextInput,
} from "react-native";

const HeaderName = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textTen}>Mời nhập tên của bạn :</Text>
      <TextInput style={styles.textInTen}></TextInput>
      <Text style={styles.textEmail}>Email :</Text>
      <TextInput style={styles.textInEmail}></TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
  },

  textTen: {
    fontSize: 20,
    margin:20,
    left:-70,
  },
  textInTen: {
    width: 280,
    height: 40,
    backgroundColor: "#FFFFFF",
    borderRadius:10,
    shadowRadius:5,
  },
  textEmail: {
    fontSize: 20,
    margin:20,
    left:-140,
  },
  textInEmail: {
    width: 280,
    height: 40,
    backgroundColor: "#FFFFFF",
    borderRadius:10,
    shadowRadius:5,
  },
});

export default HeaderName;
