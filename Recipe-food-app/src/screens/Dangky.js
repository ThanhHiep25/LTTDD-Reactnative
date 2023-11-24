import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Pressable,
  Image,
} from "react-native";
import User from "../../datauser";
import Toast from "react-native-toast-message";
import { useNavigation } from "@react-navigation/native";
var url = "https://65557a0784b36e3a431dc70d.mockapi.io/login";

const Dangky = () => {
  const navigation = useNavigation();
  const [mail, setMail] = useState();
  const [ngay, setNgay] = useState();
  const [pass, setPass] = useState();
  const [name, setName] = useState();
  const [img, setImg] = useState();

  const handleCheck = async () => {
  const user = User.find((user) => user.email == mail);
  if (user) {
    showToast("Email đã được sử dụng. Vui lòng sử dụng email khác.");
  } else {
    // Kiểm tra dữ liệu đầu vào
    if (!name || !pass || !mail  || !ngay) {
      showToast("Vui lòng điền đầy đủ thông tin");
      return;
    }

    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
          name: name,
          pass: pass,
          email: mail,
          img: img,
          date: ngay,
          sothich: "",
          yeuthich: "",
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });

      // Kiểm tra phản hồi từ yêu cầu fetch
      if (response.ok) {
        showToast("Đăng ký thành công");
        setMail("");
        setImg("");
        setName("");
        setNgay("");
        setPass("");
      } else {
        showToast("Đăng ký thất bại, vui lòng thử lại");
      }
    } catch (error) {
      showToast("Có lỗi xảy ra, vui lòng thử lại");
    }
  }
};
  const showToast = (message) => {
    Toast.show({
      type: "error",
      position: "top",
      text1: message || "Email đã được đăng ký!",
      visibilityTime: 3000,
      autoHide: true,
      fontFamily: "Arial",
    });
  };
  return (
    <View style={styles.container}>
      <Toast ref={(ref) => Toast.setRef(ref)} />

      <View style={styles.view}>
        <Text style={styles.text}>Đăng ký tài khoản: </Text>
      </View>

      <View>
        <View>
          <Pressable style={styles.Pre1} onPress={() => navigation.goBack()}>
            <Image
              source={require("../../assets/IMG/namell/Group 6.png")}
              style={styles.img}
            ></Image>
          </Pressable>
        </View>
        <Text style={styles.text1}>Email</Text>
        <TextInput
          style={styles.textIn}
          value={mail}
          onChangeText={(text) => {
            setMail(text);
          }}
          placeholder="..."
        ></TextInput>

        <Text style={styles.text1}>Name</Text>
        <TextInput
          style={styles.textIn}
          value={name}
          onChangeText={(text) => {
            setName(text);
          }}
          placeholder="..."
        ></TextInput>
        <Text style={styles.text1}>Img: lấy link hình ảnh</Text>
        <TextInput
          style={styles.textIn}
          value={img}
          onChangeText={(text) => {
            setImg(text);
          }}
          placeholder="..."
        ></TextInput>
        <Text style={styles.text1}>Ngày bắt đầu: dd/mm/yy</Text>
        <TextInput
          style={styles.textIn}
          value={ngay}
          onChangeText={(text) => {
            setNgay(text);
          }}
          placeholder="..."
        ></TextInput>
        <Text style={styles.text1}>Password</Text>
        <TextInput
          style={styles.textIn}
          value={pass}
          onChangeText={(text) => {
            setPass(text);
          }}
          placeholder="..."
        ></TextInput>
      </View>

      <View style={styles.view1}>
        <Pressable
          style={styles.Pre}
          onPress={() => {
            handleCheck();
          }}
        >
          <Text style={styles.text2}>Đăng ký</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Dangky;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  view: {
    marginTop: 100,
  },
  view1: {
    marginTop: 40,
  },
  text: {
    fontSize: 20,
    fontFamily: "Arial",
    fontWeight: 600,
  },
  text1: {
    fontSize: 16,
    fontFamily: "Arial",
    fontWeight: 600,
    marginTop: 30,
  },
  textIn: {
    fontSize: 16,
    fontFamily: "Arial",
    padding: 10,
    backgroundColor: "#979191ad",
    borderRadius: 10,
    width: 380,
    height: 50,
    marginTop: 10,
  },
  text2: {
    fontSize: 20,
    fontFamily: "Arial",
    fontWeight: 700,
    color: "#ffff",
  },
  img: {
    width: 50,
    height: 50,
  },
  Pre: {
    height: 50,
    width: 330,
    backgroundColor: "#46ac46",
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
});
