import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, View, ScrollView, Text, Image, Pressable, FlatList } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
// import Icon from 'react-native-vector-icons/FontAwesome'; // Chọn icon theo thư viện bạn muốn sử dụng
// import Icon2 from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/Ionicons';

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
                        <Icon name="arrow-back" size={25} color="white"/>
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
                    <View style={styles.food}>
                        <Text style={styles.t1}>{item.Name}</Text>
                        <Icon name="share-social" size={25} color="black" />  
                    </View>
                    
                    <View style={styles.star}>
                        <View style={styles.viewdg}>
                            <Icon name="alarm-outline" size={25} color="black"/>
                            <Text style={styles.tdg}>123 min</Text>
                        </View>
                        <View style={styles.viewdg}>
                            <Icon name="flame" size={25} color="red" /> 
                            <Text style={styles.tdg}>124 Kcal</Text>
                        </View>
                        
                        <View style={styles.viewdg}>
                            <Icon name="star" size={25} color="yellow" />                     
                            <Text style={styles.tdg}>{item.đg}</Text>
                        </View>
                    </View>

                    <Text style={styles.tmota}> {item.details}</Text>

                    <View style={styles.v3}>
                        <View style={styles.viewdg}>
                            <Icon name="thumbs-up-outline" size={25} color="black" />
                            <Text style={styles.tdg}>100</Text>
                        </View>

                        <View style={styles.viewdg}>
                            <Icon name="chatbox-outline" size={25} color="black" /> 
                            <Text style={styles.tdg}>20</Text>
                        </View>

                        <View style={styles.viewdg}>
                            <Icon name="bookmark-outline" size={25} color="black" />
                            <Text style={styles.tdg}>5</Text>
                            {/* <Icon name="heart-outline" size={25} color="black" />  */}
                        </View>
                                                                                                
                    </View>
                </View>
            </View>

            <View style={styles.v2}>
                {/* <Text style={styles.t1}>{item.Name}</Text> */}
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
        marginLeft: 15,
        fontSize: 25,
        fontWeight: '700',
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
        borderRadius: 50,  
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
        //flexDirection: 'row',
        marginHorizontal: 16,
        marginTop: 10,
    },  
    v11:{
        //flex: 1,
        flexDirection: 'column',
    },
    food:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    star:{
        flexDirection: 'row',
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'space-around',
        //borderWidth: 1,
        //borderRadius: 20,
        //paddingHorizontal: 1, // điều chỉnh giá trị này để tăng khoảng cách
    },
    viewdg:{
        flexDirection: 'row',
    },
    tdg:{
        fontSize: 15,
        fontWeight: '400', 
        marginTop: 2,       
    },
    v2:{
        margin: 20,
    },
    tmota:{
        fontSize: 15,
        fontWeight: '400',
        marginLeft: 15,
        marginTop: 10,
    },
    v3:{
        marginTop: 25,
        marginRight: 100,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        //paddingHorizontal: 50, // điều chỉnh giá trị này để tăng khoảng cách
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