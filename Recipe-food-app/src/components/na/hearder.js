import { useNavigation } from "@react-navigation/native";
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
  const navigation = useNavigation();
  var [email, setEmail] = useState("");
  var [pass, setPass] = useState("");
  var [isVisible, setIsVisible] = useState(false);
  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/IMG/namell/lacai.png")}
        style={styles.img}
      ></Image>
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
      </View>

      <Text style={styles.text1}>
        ** Chúng tôi có thể gửi gợi ý về các công thức nấu ăn của bạn qua email.
      </Text>

      <Pressable style={styles.Pre} onPress={()=>navigation.navigate('home')}>
        <Text style={styles.textLogin}>Đăng nhập</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 4,
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
  text1:{
    fontSize:16,
    margin:40,
    textAlign:'center',
  },
  imgEye: {
    width: 30,
    height: 30,
    position: "absolute",
    marginLeft: -40,
    marginTop: 5,
  },
  img: {
    width: 100,
    height: 100,
  },
  imgRa: {
    width: 200,
    height: 200,
    margin: 20,
  },
  textLogin: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#ffff",
    textAlign: "center",
  },
  Pre: {
    margin: 40,
    backgroundColor: "#9ED2BE",
    height: 50,
    width: 230,
    borderRadius: 20,
    padding: 10,
  },
});

export default HeaderName;
