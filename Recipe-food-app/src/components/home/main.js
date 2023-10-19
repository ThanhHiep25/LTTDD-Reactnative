import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Main = () => {
  return (
    <View style = {styles.container}>
      <Text style={styles.text}>Công thức nấu mới : </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
   marginTop:40,
  },
  text:{
    fontSize:18,
    fontWeight:500,
  }
});

export default Main;
