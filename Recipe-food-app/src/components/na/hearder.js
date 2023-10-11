import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  Image,
  TextInput,
} from "react-native";

const HeaderName = () => {
  var [name, setName] = useState("");
  var [email, setEmail] = useState("");
  var [pass, setPass] = useState("");
  var [isVisible, setIsVisible] = useState(false);
  return (
    <View style={styles.container}>
      <Text style={styles.textTen}>Mời nhập tên của bạn :</Text>
      <TextInput
        style={styles.textInTen}
        onChangeText={(text) => {
          setName(text);
        }}
        value={name}
      ></TextInput>
      <Text style={styles.textEmail}>Email :</Text>
      <TextInput style={styles.textInEmail}></TextInput>
      <Text
        style={styles.texPass}
        onChangeText={(text) => {
          setEmail(text);
        }}
        value={email}
      >
        Mật khẩu
      </Text>
      <View style={styles.group1}>
        <TextInput
          style={[
            styles.texInPass,
            isVisible && {
              secureTextEntry: true,
            },
          ]}
          onChangeText={(text) => setPass(text)}
          value={pass}
          secureTextEntry={true}
        ></TextInput>
        <Pressable onPress={() => setIsVisible(!isVisible)}>
          <Image
            source={require("./../../../assets/IMG/namell/eye.png")}
            style={styles.imgEye}
          ></Image>
        </Pressable>
      </View>{" "}
      <Image
        source={require("./../../../assets/IMG/namell/ramen.gif")}
        style={styles.imgRa}
      ></Image>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  textTen: {
    fontSize: 20,
    margin: 20,
    left: -70,
    fontWeight: 600,
  },
  textInTen: {
    width: 280,
    height: 40,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    shadowRadius: 5,
    padding: 10,
  },
  textEmail: {
    fontSize: 20,
    margin: 20,
    left: -140,
    fontWeight: 600,
  },
  textInEmail: {
    width: 280,
    height: 40,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    shadowRadius: 5,
    padding: 10,
  },
  texPass: {
    fontSize: 20,
    margin: 20,
    left: -130,
    fontWeight: 600,
  },
  group1: {
    flexDirection: "row",
  },
  texInPass: {
    width: 280,
    height: 40,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    shadowRadius: 5,
    padding: 10,
    paddingRight: 50,
  },
  imgEye: {
    width: 30,
    height: 30,
    position: "absolute",
    marginLeft: -40,
    marginTop: 5,
  },
  imgRa: {
    width: 200,
    height: 200,
    margin: 20,
  },
});

export default HeaderName;
