import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { Comment } from "./Comment";
import ReactPlayer from "react-player/youtube";

const GD_CT = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const item = route.params;
  const user = route.params;

  // Thêm
  const [isPlaying, setPlaying] = useState(false); // Trạng thái phát video
  const playerRef = useRef(null); // Tham chiếu đến ReactPlayer

  // Hàm xử lý sự kiện khi nhấn vào màn hình
  const handlePress = () => {
    // Nếu đang phát thì dừng, ngược lại thì tiếp tục phát
    setPlaying(!isPlaying); // Giá trị ngược của của nó
  };

  // Hàm xử lý sự kiện khi video được sẵn sàng
  const handleReady = () => {
    // Kiểm tra nếu đang phát thì tạm dừng
    if (isPlaying) {
      playerRef.current.seekTo(0); // Di chuyển đến thời điểm 0 để tạm dừng
      setPlaying(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.view}>
        <Image
          source={require("../../../assets/IMG/Lau/lau2.gif")}
          style={styles.img}
        />
      </View>

      <View style={styles.view1}>
        <Pressable
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Image
            source={require("../../../assets/IMG/Lau/back.png")}
            style={styles.img1}
          />
        </Pressable>
      </View>

      <View style={styles.view}>
        <Image source={item.img} style={styles.img2} />
      </View>

      <View style={styles.view2}>
        <Text style={styles.text}>{item.name1}</Text>
      </View>
      <View style={styles.view2}>
        <Text style={styles.text1}>Nguyên liệu :</Text>
        <Text style={styles.text2}>{item.nguyenlieu}</Text>

        <Text style={styles.text1}>Các bước thực hiện. </Text>
        <Text style={styles.text1}>Bước 1: Sơ chế nguyên liệu. </Text>
        <Text style={styles.text2}>{item.buoc1}</Text>

        <Text style={styles.text1}>Bước 2: Nấu {item.name}. </Text>
        <Text style={styles.text2}>{item.buoc2}</Text>

        <Text style={styles.text1}>Bước 3: Hoàn thành. </Text>
        <Text style={styles.text2}>{item.buoc3}</Text>
      </View>

      <View>
        <Text style={styles.text1}>Recipe Video </Text>
        <TouchableOpacity style={styles.videoContainer} onPress={handlePress}>
          <ReactPlayer
            ref={playerRef}
            url={item.linkytb}
            width={"100%"}
            height={220}
            playing={isPlaying}
            controls={true} // thanh điều khiển
            onReady={handleReady}
          />
        </TouchableOpacity>
      </View>

      <View>
        <Comment />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
  },
  view: {
    alignItems: "center",
    margin: 20,
    marginBottom: 0,
  },
  view1: {
    marginLeft: 20,
  },
  view2: {
    margin: 20,
  },
  img: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  img1: {
    width: 50,
    height: 50,
    resizeMode: "contain",
  },
  img2: {
    width: 380,
    height: 240,
    resizeMode: "contain",
    borderRadius: 20,
  },
  text: {
    fontFamily: "Arial",
    fontSize: 24,
    fontWeight: 700,
    color: "#E87104",
  },
  text1: {
    fontFamily: "Arial",
    fontSize: 20,
    fontWeight: 700,
    color: "#64CA2",
  },
  text2: {
    fontFamily: "Arial",
    fontSize: 16,
    color: "#64CA2",
    margin: 30,
    textAlign: "justify",
  },
  videoContainer: {
    marginTop: 10,
    width: "100%",
    height: 220,
  },
});

export default GD_CT;
