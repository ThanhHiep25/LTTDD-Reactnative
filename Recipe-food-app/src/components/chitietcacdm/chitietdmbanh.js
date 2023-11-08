import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";

const Chitietdmbanh = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.view1}>
        <Pressable
            onPress={() => {
              navigation.goBack();
            }}>
          <Image
            source={require("../../../assets/IMG/Lau/back.png")}
            style={styles.img1}/>
        </Pressable>

        <View style={styles.view12}>
          <Image
            source={require("../../../assets/IMG/Lau/lau2.gif")}
            style={styles.img}/>
        </View>
      </View>

      <View style={styles.view}>
        <Image
          source={require("../../../assets/IMG/Banh/Banhbonglan.png")}
          style={styles.img2}
        />
      </View>

      <View style={styles.view2}>
       <Text style={styles.text}>Bánh bông lan</Text>
      </View>

      <View style={styles.view3}>
        <Text style={styles.text1}>Nguyên liệu</Text>
      </View>

      <View style={styles.view4}>
        <Text style={styles.test11}>
              - 40g bột mì đa dụng{'\n'}
              - 40g bột bắp{'\n'}
              - 4 quả trứng gà{'\n'}
              - 80g đường xay{'\n'}
              - 30g dầu ăn{'\n'}
              - 15g sữa tươi không đường{'\n'}
              - 1 muỗng cà phê muối{'\n'}
              - 1 lát chanh{'\n'}
              - Dụng cụ: Nồi chiên không dầu, máy đánh trứng, khuôn làm bánh (20cm có lót giấy nến){'\n'}
        </Text>
      </View>
      

      <View style={styles.view3}>
       <Text style={styles.text2}>Cách nấu lẩu cá chép giòn :</Text>
      </View>

      <View style={styles.view5}>
        <Text style={styles.text3}>
        <Text style={styles.boldText}>Bước 1: Sơ chế nguyên liệu{'\n'}</Text>
        - Đầu tiên, bạn rây bột mì và bột bắp để thu được hỗn hợp bột mịn nhất. Sử dụng cây đánh trứng để trộn đều hai loại bột này với nhau.{'\n'}
        - Tách lòng trắng và lòng đỏ trứng ra riêng.{'\n'}
        {'\n'}
        <Text style={styles.boldText}>Bước 2: Đánh bông lòng trứng{'\n'}</Text>
        - Dùng máy đánh trứng, đánh lòng trắng với tốc độ nhỏ. Khi lòng trắng có bọt nổi lên thì cho 1 muỗng cà phê muối và nặn một lát chanh vào. Tiếp tục dùng máy đánh trứng đánh bông lòng trắng lên. Cho 80g đường vào lòng trắng trứng và đánh đều đến khi hỗn hợp bông xốp.{'\n'}
        {'\n'}
        <Text style={styles.boldText}>Bước 3: Làm hỗn hợp bột bánh{'\n'}</Text>
        - Cho từng lòng đỏ vào tô lòng trắng đã đánh bông rồi tiếp tục dùng máy đánh trứng đều lên. Cũng giống như khi cho đường, bạn đừng cho hết lòng đỏ vào mà cho từng quả một để khi đánh, hỗn hợp sẽ mịn và đều hơn nhé!{'\n'}
        - Đổ tiếp 30g dầu ăn và 15g sữa tươi không đường vào. Tiếp tục cho hỗn hợp bột mì và bột bắp vào rồi dùng máy đánh trứng đánh đều lên.{'\n'}
        -- Chú ý: Khi cho bột mì và bột bắp vào, bạn nhớ chia thành 3 lần và không nên đổ vào hết một lần nhé. Khi đánh, bạn không nên đánh lâu quá để tránh tạo bọt khí. Bước này chỉ đánh để các nguyên liệu hòa quyện vào nhau thôi.{'\n'}
        {'\n'}
        <Text style={styles.boldText}>Bước 4: Nướng bánh{'\n'}</Text>
        - Đổ từ từ hỗn hợp bột bánh bông lan vừa làm vào khuôn. Nâng khuôn bánh lên rồi gõ nhẹ xuống bàn nhiều lần để các phần bọt khí vỡ ra.{'\n'}
        - Cho khuôn bánh vào nồi chiên không dầu, chỉnh nhiệt độ 150 độ C và nướng trong vòng 40 phút. Hết thời gian, lấy khuôn bánh ra rồi úp ngược xuống khoảng 3-5 phút để hạn chế tình trạng lõm hoặc xẹp bánh.{'\n'}
        - Dùng dao rọc hình tròn xung quanh mép khuôn để lấy bánh ra. Bóc phần giấy nến ra và cắt thành những miếng nhỏ vừa ăn.{'\n'}
        </Text>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
  },
  view1: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  view11: {
    justifyContent: 'center'
  },
  img1: {
    width: 50,
    height: 50,
    resizeMode: "contain",
  },
  view12: {
    marginLeft: 92,
  },
  img: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },

  view: {
    alignItems: "center",
    margin: 5,
  },
  img2: {
    width: 380,
    height: 240,
    resizeMode: "contain",
    borderRadius: 20,
  },

  view2: {
    margin: 5,
  },
  text:{
    fontSize:24,
    fontWeight: 700,
    color:'#E87104',
  },
  text1:{
    fontSize: 18,
    fontWeight: 700,
  },

  view3:{
    marginLeft: 30,
  },
  view4:{
    marginLeft: 100,
  },
  test11:{
    fontSize: 15,
  },
  text2:{
    fontSize: 18,
    fontWeight: 700,
    color:'#64CA25'
  },

  view5:{
    marginLeft: 50,
  },
  text3:{
    fontSize: 16,
  },
  boldText: {
    fontWeight: 800, 
  },
});

export default Chitietdmbanh;
