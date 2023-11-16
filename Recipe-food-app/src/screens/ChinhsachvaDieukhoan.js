import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, View, Text, Image, Pressable, FlatList } from "react-native";

const CS_DK = ({navigation}) => {
    return(
        <View style={styles.container}>
            <View style={styles.v1}>
                <View style={styles.view}>
                    <Pressable onPress={()=> {navigation.goBack()}}>
                        <Image
                            source={require("../../assets/IMG/setting/Groupback.png")}
                            style={styles.back}
                        />
                    </Pressable>
                    <Image
                        source={require("../../assets/IMG/setting/chinhsach.gif")}
                        style={styles.img}
                    />
                </View>

                <Text style={styles.test}>Chính sách và điều khoản</Text>

                <Text style={styles.t1}>Chính sách bản quyền:</Text>
                <Text style={styles.t2}>
                    Quyền sở hữu trí tuệ: Mọi công thức nấu ăn được chia sẻ
                    trên trang web hoặc ứng dụng này là tài sản của người đăng tải. 
                    Bất kỳ sao chép, sửa đổi hoặc sử dụng mà không có sự cho phép của tác giả đều bị cấm.
                </Text>

                <Text style={styles.t1}>Chính sách an toàn thực phẩm:</Text>
                <Text style={styles.t2}>
                    Hướng dẫn an toàn: Người đăng tải đảm bảo rằng mọi công thức được chia sẻ tuân thủ
                    các hướng dẫn an toàn thực phẩm. Các nguyên liệu và quy trình nấu ăn được mô tả
                    một cách rõ ràng để đảm bảo người sử dụng không gặp rủi ro sức khỏe.
                </Text>

                <Text style={styles.t1}>Điều khoản sử dụng:</Text>
                <Text style={styles.t2}>
                    Sự chấp nhận: Người sử dụng phải đồng ý với các điều khoản sử dụng trước khi 
                    truy cập và sử dụng bất kỳ nội dung nào trên trang web hoặc ứng dụng. 
                    Sự chấp nhận này bao gồm việc tuân thủ các quy định bản quyền và cam kết 
                    không sử dụng thông tin cá nhân của người dùng một cách phi pháp.
                </Text>

                <Text style={styles.t1}>Quy định về đánh giá và phản hồi:</Text>
                <Text style={styles.t2}>
                    Chính sách đánh giá: Người sử dụng được khuyến khích đóng góp ý kiến và đánh giá, 
                    nhưng nó cũng phải tuân thủ các quy tắc về ngôn ngữ và không gian quảng cáo 
                    không phù hợp.
                </Text>

                <Text style={styles.t1}>Quyền riêng tư:</Text>
                <Text style={styles.t2}>
                    Bảo vệ thông tin cá nhân: Người đăng tải và người sử dụng đều có quyền riêng tư. 
                    Bất kỳ thông tin cá nhân nào được thu thập thông qua trang web hoặc ứng dụng này 
                    sẽ được bảo vệ và không được chia sẻ với bên thứ ba mà không có sự đồng ý.
                </Text>

            </View>
            
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: "1",
        backgroundColor: '#fff',
    },
    view:{
        flexDirection: 'row',
        
    },
    img: {
        width: 60,
        height: 60,
        resizeMode: "contain",
        marginLeft: 95,
    },
    back: {
        width: 50,
        height: 50,
        marginTop: 5,
    },
    v1:{
        flexDirection: 'column',
        marginHorizontal: 10,
        paddingHorizontal: 10,
        margin: 30
    },
    test:{
        fontFamily:'Arial',
        marginTop: 10,
        fontSize: 24,
        fontWeight: '700',
        marginLeft: 20,
        marginTop: 10,
        color: "#ff4757",
    },
    t1:{
        fontFamily: 'Arial',
        fontSize: 20,
        fontWeight: 600,
        marginTop: 15,
        textAlign: 'justify',
        textDecorationLine: 'underline',
        fontStyle: 'italic',
    },
    t2:{
        fontFamily: 'Arial',
        fontSize: 16,
        fontWeight: 400,
        marginTop: 10,
    }
});

export default CS_DK;