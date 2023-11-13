import { useNavigation } from "@react-navigation/native";
import React from "react";
import { useState } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  Image,
  Pressable,
  FlatList,
} from "react-native";

const colors = ["#FCE5A9", "#E8CA7B", "#FBCCA5", "#FCE5A9", "#E8CA7B", "#FBCCA5", "#FCE5A9", "#E8CA7B"];
const DatachitietBanh = [
    {
        image: require("./../../../assets/IMG/Banh/Banhbonglan.png"),
        Name: "Bánh bông lan",
        des1: `
            - 40g bột mì đa dụng 
            - 40g bột bắp
            - 4 quả trứng gà
            - 80g đường xay
            - 30g dầu ăn
            - 15g sữa tươi không đường
            - 1 muỗng cà phê muối
            - 1 lát chanh
            - Dụng cụ: Nồi chiên không dầu, máy đánh trứng, khuôn làm bánh (20cm có lót giấy nến)
        `,
        des2: `
            Bước 1: Sơ chế nguyên liệu
            - Đầu tiên, bạn rây bột mì và bột bắp để thu được hỗn hợp bột mịn nhất. Sử dụng cây đánh trứng để trộn đều hai loại bột này với nhau.
            - Tách lòng trắng và lòng đỏ trứng ra riêng.
            
            Bước 2: Đánh bông lòng trứng
            - Dùng máy đánh trứng, đánh lòng trắng với tốc độ nhỏ. Khi lòng trắng có bọt nổi lên thì cho 1 muỗng cà phê muối và nặn một lát chanh vào. Tiếp tục dùng máy đánh trứng đánh bông lòng trắng lên. Cho 80g đường vào lòng trắng trứng và đánh đều đến khi hỗn hợp bông xốp.
            
            Bước 3: Làm hỗn hợp bột bánh
            - Cho từng lòng đỏ vào tô lòng trắng đã đánh bông rồi tiếp tục dùng máy đánh trứng đều lên. Cũng giống như khi cho đường, bạn đừng cho hết lòng đỏ vào mà cho từng quả một để khi đánh, hỗn hợp sẽ mịn và đều hơn nhé!
            - Đổ tiếp 30g dầu ăn và 15g sữa tươi không đường vào. Tiếp tục cho hỗn hợp bột mì và bột bắp vào rồi dùng máy đánh trứng đánh đều lên.
            -- Chú ý: Khi cho bột mì và bột bắp vào, bạn nhớ chia thành 3 lần và không nên đổ vào hết một lần nhé. Khi đánh, bạn không nên đánh lâu quá để tránh tạo bọt khí. Bước này chỉ đánh để các nguyên liệu hòa quyện vào nhau thôi.
            
            Bước 4: Nướng bánh
            - Đổ từ từ hỗn hợp bột bánh bông lan vừa làm vào khuôn. Nâng khuôn bánh lên rồi gõ nhẹ xuống bàn nhiều lần để các phần bọt khí vỡ ra.
            - Cho khuôn bánh vào nồi chiên không dầu, chỉnh nhiệt độ 150 độ C và nướng trong vòng 40 phút. Hết thời gian, lấy khuôn bánh ra rồi úp ngược xuống khoảng 3-5 phút để hạn chế tình trạng lõm hoặc xẹp bánh.
            - Dùng dao rọc hình tròn xung quanh mép khuôn để lấy bánh ra. Bóc phần giấy nến ra và cắt thành những miếng nhỏ vừa ăn.
        `,
    },

    {
        image: require("./../../../assets/IMG/Banh/Banhsukem.jpg"),
        Name: "Bánh su kem",
        des1: `
            - 2 lòng đỏ trứng gà
            - 20g bột ngô
            - 200ml sữa tươi
            - 1 muỗng vanilla
            - 60g bơ
            - 60g bột mì
            - 2 quả trứng
            - Đường, muối
        `,
        des2: `
            Bước 1: Phần nhân kem
            - Đun nóng 200ml sữa tươi.
            - Cho 2 lòng trắng trứng, 40g đường, 20g bột ngô vào tô, đánh đều cho hỗn hợp tan và mịn.
            - Đổ từ từ 200ml sữa tươi đã đun nóng vào đánh đều, không đổ sữa vào 1 lần, vì như vậy sẽ dễ bị vón cục, cho thêm 1 thìa cà phê vanilla và tiếp tục khuấy đều.
            - Cho hỗn hợp vào nồi, đun nhỏ lửa, khuấy đều cho tới khi hỗn hợp bắt đầu đặc lại thì tắt bếp. Tiếp tục khuấy đến khi hỗn hợp đặc thành kem.
            - Đổ phần kem đã nguội ra tô, bọc màng bọc thực phẩm lên miệng tô và cho vào ngăn mát tủ lạnh.
            
            Bước 2: Phần vỏ bánh su
            - Bắc nồi lên bếp đun với 120ml nước, 60g bơ, 1 chút ít muối, ¼ thìa cà phê đường, đun lửa nhỏ để cho bơ tan chảy, nhớ khuấy đều.
            - Đổ 60g bột mì vào, khuấy đều cho đến khi hỗn hợp thành một khối bột dẻo, không bị dính vào nồi thì tắt bếp và cho ra tô.
            - Cho 1 quả trứng gà vào, khuấy đều, sau đó đập thêm 1 quả trứng gà thứ 2 vào, tiếp tục khuấy đến khi hỗn hợp đặc lại và mịn mượt.
            - Cho hỗn hợp vào túi bắt kem tam giác đã gắn đuôi sò để nặn hình bánh.
            - Lót giấy nến xuống khay bánh, nặn hỗn hợp thành hình chóp cao, chú ý nhớ nặn cách xa nhau vì khi nướng, bánh sẽ nở ra và dính vào nhau.
            
            Bước 3: Nướng bánh su
            - Nướng bánh ở nhiệt độ 200 độ C trong khoảng 20-30 phút. Khi bánh nở và có màu vàng nâu là được. Lấy bánh ra khỏi lò, để nguội.
            - Lấy phần kem trong tủ lạnh ra, đánh đều lại thêm 1 lần nữa rồi bỏ vào túi bắt kem.
            - Khi bánh đã nguội, dùng dao hoặc kéo có đầu nhọn rạch 1 đường ở phần đáy bánh rồi bơm kem vào và thưởng thức.
        `,    
    },

    {
        image: require("./../../../assets/IMG/Banh/Banhflan.jpg"),
        Name: "Bánh flan",
        des1: `
            - 6 quả trứng gà
            - 400 ml sữa tươi
            - 100 ml kem tươi
            - Đường, muối
            - 2 ống vani
            - Nước cốt chanh
        `,
        des2: `
            Bước 1: Phần nhân kem
            - Đun nóng 200ml sữa tươi.
            - Cho 2 lòng trắng trứng, 40g đường, 20g bột ngô vào tô, đánh đều cho hỗn hợp tan và mịn.
            - Đổ từ từ 200ml sữa tươi đã đun nóng vào đánh đều, không đổ sữa vào 1 lần, vì như vậy sẽ dễ bị vón cục, cho thêm 1 thìa cà phê vanilla và tiếp tục khuấy đều.
            - Cho hỗn hợp vào nồi, đun nhỏ lửa, khuấy đều cho tới khi hỗn hợp bắt đầu đặc lại thì tắt bếp. Tiếp tục khuấy đến khi hỗn hợp đặc thành kem.
            - Đổ phần kem đã nguội ra tô, bọc màng bọc thực phẩm lên miệng tô và cho vào ngăn mát tủ lạnh.
            
            Bước 2: Phần vỏ bánh su
            - Bắc nồi lên bếp đun với 120ml nước, 60g bơ, 1 chút ít muối, ¼ thìa cà phê đường, đun lửa nhỏ để cho bơ tan chảy, nhớ khuấy đều.
            - Đổ 60g bột mì vào, khuấy đều cho đến khi hỗn hợp thành một khối bột dẻo, không bị dính vào nồi thì tắt bếp và cho ra tô.
            - Cho 1 quả trứng gà vào, khuấy đều, sau đó đập thêm 1 quả trứng gà thứ 2 vào, tiếp tục khuấy đến khi hỗn hợp đặc lại và mịn mượt.
            - Cho hỗn hợp vào túi bắt kem tam giác đã gắn đuôi sò để nặn hình bánh.
            - Lót giấy nến xuống khay bánh, nặn hỗn hợp thành hình chóp cao, chú ý nhớ nặn cách xa nhau vì khi nướng, bánh sẽ nở ra và dính vào nhau.
            
            Bước 3: Nướng bánh su
            - Nướng bánh ở nhiệt độ 200 độ C trong khoảng 20-30 phút. Khi bánh nở và có màu vàng nâu là được. Lấy bánh ra khỏi lò, để nguội.
            - Lấy phần kem trong tủ lạnh ra, đánh đều lại thêm 1 lần nữa rồi bỏ vào túi bắt kem.
            - Khi bánh đã nguội, dùng dao hoặc kéo có đầu nhọn rạch 1 đường ở phần đáy bánh rồi bơm kem vào và thưởng thức.
        `,    
    },

    {
        image: require("./../../../assets/IMG/Banh/Banhdongxu.png"),
        Name: "Bánh đồng xu",
        des1: `
            - 200gr bột mì
            - 300gr phô mai mozzarella
            - 100gr sữa tươi không đường
            - 100ml nước
            - 15gr đường
            - 1 quả trứng
            - 5g bột nổi
            - 5g men khô
            - Gia vị: Dầu ăn, muối, vani.
            - Dụng cụ: Khuôn bánh đồng xu.
        `,
        des2: `
            Bước 1: Chuẩn bị bột làm bánh
            - Trước tiên, bạn rây 200gr bột mì vào tô để lọc cặn và giúp bột bánh được mịn hơn. Bạn đập 1 quả trứng, thêm 100gr sữa tươi không đường vào cùng rồi đánh đều, vừa đánh vừa cho dần 100ml nước vào hỗn hợp. Tiếp tục đánh đến khi nhận thấy các nguyên liệu đã được trộn đều màu.
            - Cho vào hỗn hợp bột 15gr dầu ăn và tiếp tục đánh bột đến khi thấy các bọt khí li ti nổi lên thì dừng lại. Chuẩn bị một cái tô khác cho 5gr bột nổi, 5gr men khô và 15gr đường vào cùng rồi trộn đều. Tiếp theo bạn cho hỗn hợp trứng sữa vào hỗn hợp bột và đánh thật đều, thêm vani vào để tăng độ thơm cho bánh.
            
            Bước 2: Nướng bánh
            - Cho khuôn bánh lên bếp và làm nóng, thoa một lớp bơ lên đáy khuôn để hạn chế bánh bị dính và giúp bánh thơm hơn.
            - Cho bột bánh vào khoảng ⅔ khuôn, thêm phô mai mozzarella để làm nhân bánh, đổ thêm bột để làm đầy khuôn bánh. Đậy kín khuôn bánh lại và nướng mỗi mặt khuôn 2 - 3 phút rồi lấy bánh ra.
            
            Bước 3: Thành phần
            - Bánh đồng xu phô mai kéo sợi với lớp vỏ ngoài mềm mịn, thơm đậm hương vani ngọt ngào với phần nhân trong là phô mai mozzarella béo ngọt, dai dai chắc chắn sẽ khiến bạn thích mê ngay từ lần đầu thưởng thức.
        `,
    },

    {
        image: require("./../../../assets/IMG/Banh/Banhcupcake.png"),
        Name: "Bánh cupcake",
        des1: `
            - 45g bột mì
            - 2 quả trứng gà
            - 30g bơ lạt
            - 15ml sữa tươi
            - 45g đường
            - Dụng cụ: Phới đánh trứng, khuôn cupcake giấy        
        `,
        des2: `
            Bước 1: Làm chảy bơ
            - Bạn cho 30g bơ và 15ml sữa tươi vào bát rồi đem đi đun cách thủy cho bơ chảy ra, hòa quyện với phần sữa.
            
            Bước 2: Đánh trứng
            - Tách riêng phần lòng đỏ và lòng trắng của 2 quả trứng gà và cho ra 2 bát khác nhau. Sau đó bạn dùng phới đánh trứng đánh tan phần lòng đỏ và cho hỗn hợp bơ sữa đã đun cách thủy vào cùng rồi khuấy đều. Cho tiếp 45g bột mì vào và trộn đều đến khi được hỗn hợp màu vàng thật sánh mịn.
            - Đánh bông phần lòng trắng trứng và 45g đường tới khi hỗn hợp bông lên, chuyển thành màu trắng ngà và nhấc cây đánh trứng lên thấy có chóp đỉnh là được.
            - Sau đó bạn cho hỗn hợp lòng trắng vào phần lòng đỏ trứng và trộn đều lên để được 1 hỗn hợp bột màu vàng sánh mịn.
            
            Bước 3: Chiên bánh
            - Cho phần bột trên vào những khuôn giấy cupcake để chuẩn bị đem đi nướng
            - Bạn cho toàn bộ phần ly cupcake chứa hỗn hợp bột vào nồi chiên không dầu, chỉnh lên ở 175 độ và nướng trong 25 phút là được.
            
            Bước 4: Thành phẩm
            - Những chiếc bánh cupcake vàng ươm, nở đều và đẹp, mùi thơm cực hấp dẫn của trứng, sữa hòa quyện. Bánh tuy không có nhân nhưng ăn vẫn vô cùng mềm, xốp và ngọt ngào. Hoặc bạn có thể bắt thêm 1 lớp kem hoặc topping (kẹo, trái cây,...) lên trên để bánh hấp dẫn hơn cũng được nhé.
        `,
    },

    {
        image: require("./../../../assets/IMG/Banh/Banhdonut.png"),
        Name: "Bánh donut",
        des1: `
            - 400g bột mì
            - 75g bơ lạt
            - 180ml sữa tươi không đường
            - 100g chocolate chip đen
            - Men nở, kem whipping, trứng gà, sữa bột
            - Gia vị: Đường, đường bột, muối, dầu ăn
            - Dụng cụ: Chảo, muỗng, tô, phới lồng, khuôn cắt bánh, máy đánh trứng, cây cán bột.                
        `,
        des2: `
            Bước 1: Làm bột bánh
            - Đầu tiên, bạn dùng phới lồng trộn đều hỗn hợp gồm bột mì, 50g đường trắng, chút men nở (tầm 5g), 30g sữa bột và chút muối (khoảng 2g) lại với nhau. Sau đó, bạn thêm 1 quả trứng gà, 60g bơ lạt đun chảy và sữa tươi không đường vào, lấy muỗng trộn đều để bột hòa quyện vào bơ sữa.
            - Tiếp theo, bạn bật máy đánh trứng (có đầu dùng để nhồi bột) tốc độ thấp 5 phút, rồi tăng dần tốc độ và tiến hành nhồi bột tầm 20 phút đến khi bột trở nên mịn dẻo, không dính và đồng nhất. Xong thì bạn quét lớp dầu ăn mỏng vào tô, cho hỗn hợp bột vừa làm vào, đậy kín và ủ tầm 90 phút tới khi bột nở gấp đôi.
            
            Bước 2: Tạo hình bánh donut
            - Sau khi ủ bột, bạn lấy tay đấm nhẹ vào bột giúp giảm bọt khí, rồi nhồi sơ lại để bột mịn hơn. Xong thì bạn đặt bột lên bàn, cán mỏng tầm 1cm, dùng khuôn cắt tạo hình bánh donut, rồi ủ thêm 20 phút nữa tới khi bột nở gần gấp đôi (tầm 80%) là được.
            
            Bước 3: Chiên bánh
            - Bạn đun nóng chảo dầu trên bếp, rồi cho từng bánh donut vào, chiên đến khi vàng đều 2 mặt thì vớt ra để ráo. Lưu ý, bánh sau khi ủ khá mềm nên bạn hãy cầm nhẹ tay để bánh không bị xẹp nhé.
            - Sau đó, bạn cho chocolate chip vào tô cùng 20ml kem whipping và 15g bơ lạt, rồi đem đun cách thủy tầm 1 phút. Lúc này, bạn cũng dùng muỗng khuấy đều tới khi hỗn hợp hòa tan, mịn mượt và đồng nhất. Cuối cùng, bạn nhúng bánh donut vừa chiên vào chocolate hay rắc đường bột lên mặt bánh là xong rồi nè.
            
            Bước 4: Thành phẩm
            - Bánh donut sau khi hoàn thành trông vô cùng bắt mắt và xinh xắn luôn. Khi thưởng thức, bạn sẽ cảm nhận được lớp vỏ bánh giòn tan, phía trong thì lại dẻo mềm kết hợp cùng sốt chocolate ngọt ngọt, đăng đắng, cực kỳ hấp dẫn. Với những ai không có lò nướng thì đây là công thức rất phù hợp nè.        
        `,
    },

    {
        image: require("./../../../assets/IMG/Banh/Banhkhoaimochien.jpg"),
        Name: "Bánh khoai mỡ chiên",
        des1: `
            - 300g khoai mỡ
            - 100g bột nếp
            - 140g bột năng
            - 40g đường
            - 40ml sữa tươi
            - 60ml sữa đặc                
        `,
        des2: `
            Bước 1: Sơ chế khoai
            - Khoai mỡ sau khi mua về bạn nên gọt vỏ rồi rửa sạch lại qua với nước sạch. Tiếp đến, bạn đem cắt khối nhỏ rồi để khoai vào nồi hấp cho chín trong vòng 20 phút. Sau đó, bạn dễ dàng tán nhuyễn khoai bằng nĩa để làm bánh.
            - Sau khi tán nhuyễn, bạn cho thêm 100gr bột nếp, 140gr bột năng, 40gr đường, 40ml và 60ml sữa đặc rồi trộn đều. Tiếp đến, bạn cho vào màng bọc rồi ủ trong vòng 30 phút.
            
            Bước 2: Làm bánh khoai
            - Để nặn bánh được dễ dàng, bạn xoa một chút bột năng vô tay rồi nặn thành hình như ý muốn. Nặn lần lượt cho đến khi hết khoai.
            - Tiếp đến, bạn cho thật nhiều dầu vào chảo để bắt đầu chiên bánh khoai. Lưu ý khi chiên, bạn nên thường xuyên đảo bánh để bánh được chín vàng và không bị khét. Do bánh được chiên ngập dầu nên thường rất nhiều dầu mỡ, sau khi chiên xong bạn nên vớt ra và để giấy thấm dầu cho ráo dầu rồi thưởng thức.
            
            Bước 3: Thành phẩm
            - Bánh khoai mỡ được chiên trong dầu giòn có lớp ngoài giòn rụm nhưng bên trong thì mềm, dẻo, nóng hổi. Bạn có thể ăn hoài cũng không thấy ngán.   
        `,
    },

    {
        image: require("./../../../assets/IMG/Banh/Banhmuffinvietquat.png"),
        Name: "Bánh muffin việt quất",
        des1: `
            - 200g trái nam việt quốc
            - 300g bột mì
            - 100g đường trắng
            - 50g đường nâu
            - 1 trái cam
            - 55g bơ lạt nấu chảy
            - 150ml sữa tươi
            - 2 quả trứng
            - Các nguyên liệu khác: Muối, vani, bột nở
            - Dụng cụ: Lò nướng, giấy chống dính hoặc khuôn làm bánh                        
        `,
        des2: `
            Bước 1: Sơ chế nguyên liệu
            - Đầu tiên, bạn rửa sạch trái nam việt quất và để ráo nước. Cam cắt đôi, vắt lấy nước cốt. Vỏ cam bào nhuyễn.
            
            Bước 2: Trộn bột
            - Kế tiếp, bạn cho vào tô 300g bột mì, 100g đường trắng, 50g đường nâu, 2 muỗng cà phê bột nở, 1/2 muỗng cà phê muối và trộn đều các nguyên liệu.
            - Tiếp theo, bạn cho thêm vào vỏ cam bào nhuyễn, nước cam, 1 muỗng cà phê vani, 4 muỗng canh bơ lạt nấu chảy, 150ml sữa tươi, 2 quả trứng và khuấy đều hỗn hợp với nhau. Sau đó, cho tiếp vào 150g trái nam việt quất và trộn đều.
            
            Bước 3: Nướng bánh
            - Kế tiếp, bạn cho hỗn hợp vào khuôn giấy, cho thêm một vài trái nam việt quất lên trên và rắc thêm một ít đường trên bề mặt bánh.
            - Sau đó, bạn cho bánh vào lò và nướng ở nhiệt độ 215 độ C trong vòng 10 phút hoặc bạn có thể nướng bánh ở nhiệt độ thấp hơn là 190 độ C trong khoảng 15 - 20 phút.           
        `,
    },
   
];

const ThongtinBanh = () => {
    //const item = route.params.item;
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
          <View style={styles.view1}>
              <Pressable
                onPress={() => {
                  navigation.goBack();
                }}>
                <Image
                  source={require("./../../../assets/IMG/Banh/back.png")}
                  style={styles.img1}
                ></Image>
              </Pressable>

            <View style={styles.view12}>
              <Image
                source={require("../../../assets/IMG/Lau/lau2.gif")}
                style={styles.img}
              ></Image>
            </View>

          </View>

            <View style={styles.body}>
                {DatachitietBanh.map((item, index) => (
                <View key={index}>
                <Image source={item.image} style={styles.img2} />
                <Text style={styles.text}>{item.Name}</Text>
                <Text style={styles.text1}>Nguyên liệu</Text>
                <Text style={styles.test11}>{item.des1}</Text>
                <Text style={styles.text2}>Cách nấu món ăn</Text>
                <Text style={styles.text3}>{item.des2}</Text>
                </View>
            ))}
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
export default ThongtinBanh;