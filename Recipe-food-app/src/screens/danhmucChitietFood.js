import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, View, ScrollView, Text, Image, Pressable, FlatList } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Icon from 'react-native-vector-icons/FontAwesome'; // Chọn icon theo thư viện bạn muốn sử dụng
import Toast from 'react-native-toast-message';
//import YoutubePlayer from 'react-native-youtube-iframe';

const dmctFood = ({ navigation, route }) => {
    const { item } = route.params;
    //console.log(item);

    const [heartColor, setHeartColor] = useState("white");

    const handleHeartPress = () => {
        const newHeartColor = heartColor === "white" ? "red" : "white";
        setHeartColor(newHeartColor);
        if (newHeartColor === "red") {
            showToast();  // Show "Cảm ơn!" message
        } else {
            // If heart color is white (second press), show a different message after a delay
            setTimeout(() => {
                showToast("Hãy thử nấu món này nhé!");  // Show message after a delay
            }, 100); // Điều chỉnh thời gian trễ nếu cần
        }
    };

    const showToast = (message) => {
        Toast.show({
            type: 'success',
            position: 'top',
            text1: message || 'Món ăn này thật tuyệt vời!',
            visibilityTime: 2000,
            autoHide: true,
        });
    };

    return(
        <View style={styles.container}>
            <View style={styles.view1}>
                <Pressable
                    onPress={() => {
                        navigation.goBack();
                    }}
                >

                    <View style={styles.iconback}>
                        <Icon name="arrow-left" size={25} color="white"/>
                    </View>
                </Pressable>
                
                <Image 
                    source={require("../../assets/IMG/Lau/lau2.gif")}
                    style={styles.img1}
                />

                <Pressable
                    onPress={() => {
                        navigation.navigate("home");
                    }}
                >
                    <View style={styles.iconhome}>
                        <Icon name="home" size={25} color="white"/>
                    </View>
                </Pressable>
                              
            </View>

            <View style={styles.view2}>
                {/* Wrapper chứa cả hình ảnh và trái tim */}
                <View style={{ position: 'relative' }}>
                    <Image source={item.image} style={styles.img2}></Image>
                    <Pressable onPress={handleHeartPress} style={styles.heartWrapper}>
                        <View style={[styles.heart, { heartColor }]}>
                            <Icon name="heart" size={25} color={heartColor} />
                        </View>
                    </Pressable>
                </View>
            </View>
            <Toast ref={(ref) => Toast.setRef(ref)} />

            <View style={styles.v1}>
                <View style={styles.v11}>
                    <View style={styles.star}>
                        {/* <Text style={styles.t1}>{item.Name}</Text> */}

                        <Icon name="star" size={20} color="yellow" />
                        <Icon name="star" size={20} color="yellow" />
                        <Icon name="star" size={20} color="yellow" />
                        <Icon name="star" size={20} color="yellow" />
                        <Icon name="star" size={20} color="yellow" />                        

                        <Text style={styles.tdg}>{item.đg} đánh giá</Text>                        
                    </View>
                </View>
             
            </View>

            <View style={styles.v2}>
                <Text style={styles.t1}>{item.Name}</Text>
                <Text style={styles.text1}>Nguyên liệu</Text>
                <Text style={styles.textdes1}>{item.des1}</Text>
                <Text style={styles.text2}>Cách nấu món ăn</Text>
                <Text style={styles.textdes2}>{item.des2}</Text>
            </View>
                
            <View style={styles.viewvideo}>
                <Text style={styles.testvideo}>Recipe Video</Text>

            </View>

        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        display: "flex",
        flex: "1",
        backgroundColor: '#fff',
    },
    t1:{
        //marginTop: 10,
        //marginLeft: 20,
        //fontSize: 22,
        fontSize: 20,
        fontWeight: 700,
        color: "#E87104",
    },
    backLogo: {
        marginLeft: "10px",
        width: "50px",
        height: "50px",
    },
    view1: {
        flexDirection: 'row',
    },
    iconback:{
        //flexDirection: 'row',
        marginLeft: 10,
        marginTop: 10,
        alignItems: 'center',
        backgroundColor: 'orange', 
        //borderColor: 'black',
        borderWidth: 1, 
        borderRadius: 50, 
        padding: 5, 
    },
    view2:{        
        justifyContent: 'center',
        alignItems: 'center'
    },
    img1: {
        width: 60,
        height: 60,
        resizeMode: "contain",
        marginLeft: 120,
    },
    iconhome:{
        marginLeft: 100,
        marginTop: 15,
        backgroundColor: 'orange', 
        borderColor: 'orange',
        borderWidth: 5, 
        borderRadius: 50, 
    },
    heart:{
        borderRadius: 30,
        borderColor: 'orange',
        borderWidth: 10,
        backgroundColor: 'orange',
    },
    heartWrapper: {
        position: 'absolute',
        top: 10,
        right: 10,
    },

    img2:{
        width: 350,
        height: 200,
        //resizeMode: "contain",
        borderRadius: 30, 
        alignItems: 'center',  
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,  
    },
    v1:{
        flexDirection: 'row',
        marginHorizontal: 16,
        marginTop: 10,
    },  
    v11:{
        flex: 1,
    },
    star:{
        flexDirection: 'row',
    },
    tdg:{
        paddingLeft: 10,
        fontSize: 15,
        fontWeight: '400',
        textDecorationLine: 'underline',
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
    testdes1:{
        fontSize: 16,
        //marginLeft: 15,
        //paddingHorizontal: 20,
        //marginVertical: 16,
    },
    text2:{
        fontSize: 18,
        fontWeight: 700,
        color:'#64CA25',
        marginLeft: 45,
    },
    testdes2:{
        fontSize: 16,
        marginLeft: 10,
        //paddingHorizontal: 20,
    },
    viewvideo:{
        flex: 1,
    },
    testvideo:{
        height: '100%',
        width: '100%',
    },
});
export default dmctFood;