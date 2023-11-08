import React, { useState, useEffect } from "react";
import { StyleSheet, View, ScrollView, Text, Image, Pressable, FlatList } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const dmctFood = ({ navigation, route }) => {
    const { item } = route.params;
    console.log(item);
    return(
        <View style={styles.container}>
            <View style={styles.view12}>
                <Pressable
                onPress={() => {
                    navigation.goBack();
                }}
                >
                <Image
                    source={require("../../assets/IMG/Banh/back.png")}
                    style={styles.backLogo}
                ></Image>
                </Pressable>

                <Image 
                    source={require("../../assets/IMG/Lau/lau2.gif")}
                    style={styles.img}
                ></Image>
            </View>
            
            <View>
                <Image source={item.image} style={styles.img2}></Image>
            </View>

            <View style={styles.v2}>
                <Text style={styles.t1}>{item.Name}</Text>
                <Text style={styles.text1}>Nguyên liệu</Text>
                <Text style={styles.text11}>{item.des1}</Text>
                <Text style={styles.text2}>Cách nấu món ăn</Text>
                <Text style={styles.text11}>{item.des2}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flex: "1",
    },
    t1:{
        marginTop: 10,
        marginLeft: 20,
        fontSize: 22,
        fontWeight: 700,
        color: "#E87104",
    },
    backLogo: {
        marginLeft: "10px",
        width: "50px",
        height: "50px",
    },
    view12: {
        flexDirection: 'row',
    },
    img: {
        width: 60,
        height: 60,
        resizeMode: "contain",
        marginLeft: 100,
    },
    img2:{
        width: 380,
        height: 200,
        resizeMode: "contain",
        borderRadius: 15, 
        alignItems: 'center',    
    },
    v2:{
        margin: 20,
    },
    text1:{
        fontSize: 18,
        fontWeight: 700,
        color: "#FF9900",
        marginLeft: 45,
    },
    test11:{
        fontSize: 16,
        marginLeft: 15,
    },
    text2:{
        fontSize: 18,
        fontWeight: 700,
        color:'#64CA25',
        marginLeft: 45,
    },
});
export default dmctFood;