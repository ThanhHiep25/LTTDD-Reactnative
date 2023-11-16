import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import Toast from "react-native-toast-message";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  Image,
  TextInput,
} from "react-native";
//import User from "../../../datauser";
var url = "https://65557a0784b36e3a431dc70d.mockapi.io/login";

const HeaderName = () => {
  const navigation = useNavigation();
  const [name, setName] = useState();
  const [pass, setPass] = useState();
  const [state, setState] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log("====================================");
        console.log(data);
        console.log("====================================");
        setState(data);
      });
  }, []);

  const handleCheck = () => {
    const user = state.find((user) => user.email == name && user.pass == pass);
    if (user) {
      navigation.navigate("home", user);
    } else {
      showToast();
      setPass("");
    }
  };
  const showToast = (message) => {
    Toast.show({
      type: "error",
      position: "top",
      text1: message || "Mật khẩu hoặc email sai!",
      text2: message || "Có thể bạn chưa đăng ký tài khoản!",
      visibilityTime: 3000,
      autoHide: true,
      fontFamily: "Arial",
    });
  };
  return (
    <View style={styles.container}>
      <Toast ref={(ref) => Toast.setRef(ref)} />
      <Image
        source={require("../../../assets/IMG/namell/lacai.png")}
        style={styles.img}
      ></Image>
      <Text style={styles.textEmail}>Email :</Text>
      <TextInput
        style={styles.textInEmail}
        value={name}
        onChangeText={(text) => {
          setName(text);
        }}
      ></TextInput>
      <Text style={styles.texPass}>Mật khẩu</Text>
      <View style={styles.group1}>
        <TextInput
          style={[
            styles.texInPass,
            isVisible && {
              secureTextEntry: true,
            },
          ]}
          value={pass}
          onChangeText={(text) => setPass(text)}
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

      <Pressable
        onPress={() => {
          navigation.navigate("dangky");
        }}
      >
        <Text style={styles.textdk}>Đăng ký tài khoản ?</Text>
      </Pressable>

      <Pressable style={styles.Pre} onPress={() => handleCheck()}>
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
  textdk: {
    fontSize: 18,
    color: "#2c2ce0",
    textDecorationLine: "underline",
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
  text1: {
    fontSize: 16,
    margin: 40,
    textAlign: "center",
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
    marginTop: 60,
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
