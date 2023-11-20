import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
  TextInput,
  Pressable,
  ScrollView,
} from "react-native";

var url = "https://654460405a0b4b04436c4cda.mockapi.io/user";

export const Comment = () => {
  const route = useRoute();
  const [state, setState] = useState([]);
  const [comment, setComment] = useState();
  const navigation = useNavigation();
  const user = route.params;
  console.log('====================================');
  console.log(user);
  console.log('====================================');
  useEffect(() => {
    fetch("https://654460405a0b4b04436c4cda.mockapi.io/user")
      .then((res) => res.json())
      .then((data) => {
        console.log("====================================");
        console.log(data);
        console.log("====================================");
        setState(data);
      });
  }, [state]);

  return (
    <View style={styles.container}>
      <View style={styles.view}>
        <View style={styles.view4}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <FlatList
              data={state}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <View style={styles.view_1}>
                  <View style={styles.view3}>
                    <View style={styles.view1}>
                      <Image
                        source={require("../../../assets/IMG/user.png")}
                        style={styles.img}
                      />
                      <Text style={styles.text}>{item.name}</Text>
                    </View>
                    <Pressable
                      onPress={() => {
                        var link = url + "/" + item.id;
                        fetch(link, {
                          method: "DELETE",
                        });
                        setState(...state);
                      }}
                    >
                      <Image
                        source={require("../../../assets/IMG/remove.png")}
                        style={styles.img1}
                      />
                    </Pressable>
                  </View>

                  <View style={styles.view2}>
                    <Text style={styles.text1}>{item.comment}</Text>
                  </View>
                </View>
              )}
            />
          </ScrollView>
        </View>
        <View style={styles.view_2}>
          <View style={styles.view1}>
            <Image
              source={require("../../../assets/IMG/user.png")}
              style={styles.img}
            />
            <Text style={styles.textcm}>{user.name}</Text>
          </View>

          <View style={styles.view2}>
            <TextInput
              multiline
              numberOfLines={5}
              style={styles.textIn}
              placeholder=". . ."
              value={comment}
              onChangeText={(text) => setComment(text)}
            />
            <Pressable
              onPress={() => {
                fetch("https://654460405a0b4b04436c4cda.mockapi.io/user", {
                  method: "POST",
                  body: JSON.stringify({
                    email: user.mail,
                    name: user.name,
                    comment: comment,
                  }),
                  headers: {
                    "Content-type": "application/json; charset=UTF-8",
                  },
                })
                  .then((res) => res.json())
                  .then((data) => {
                    console.log("====================================");
                    console.log(data);
                    console.log("====================================");
                  });
                setComment("");
                setState(...state);
              }}
            >
              <Image
                source={require("../../../assets/IMG/send.png")}
                style={styles.img}
              />
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  view: {
    margin: 20,
    alignItems: "center",
  },
  viewback: {
    marginLeft: 20,
    marginTop: 20,
  },
  view_1: {
    height: "auto",
    width: 350,
    backgroundColor: "#E5D4FF",
    padding: 20,
    borderRadius: 20,
    marginTop: 20,
  },
  view_2: {
    height: "auto",
    width: 350,
    backgroundColor: "#E5D4FF",
    padding: 20,
    borderRadius: 20,
    marginTop:0,
    marginBottom: 100,
  },
  view1: {
    flexDirection: "row",
    alignItems: "center",
  },
  view2: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  view3: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  view4: {
    margin: 20,
    marginTop:0,
    alignItems: "center",
    height: 250,
    borderRadius: 10,
  },
  img: {
    height: 30,
    width: 30,
    resizeMode: "contain",
  },

  img1: {
    height: 20,
    width: 20,
    resizeMode: "contain",
  },
  text: {
    fontSize: 18,
    fontFamily: "Arial",
    fontWeight: 600,
    marginLeft: 20,
  },
  textcm: {
    fontSize: 18,
    fontFamily: "Arial",
    fontWeight: 500,
    marginLeft: 20,
    color: "#535151",
  },
  text1: {
    fontSize: 16,
    fontFamily: "Arial",
    fontWeight: 500,
  },
  textIn: {
    fontSize: 16,
    fontFamily: "Arial",
    fontWeight: 500,
    padding: 10,
    width: 260,
    backgroundColor: "#fff",
    borderRadius: 20,
  },
});
