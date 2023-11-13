// Data dm bánh
const foodIems = [
    {
      image: require("./../../../assets/IMG/Banh/Banhbonglan.png"),
      Name: "Bánh bông lan",
      details: "Bánh bông lan mềm mịn, thơm ngon với lớp kem và mứt tạo nên hương vị ngọt ngào.",
    },
    {
        image: require("./../../../assets/IMG/Banh/Banhsukem.jpg"),
        Name: "Bánh su kem",
        details: "Bánh su kem với lớp vỏ giòn và nhân kem béo ngậy, hòa quyện trong một hương vị tinh tế.",
    },
    {
        image: require("./../../../assets/IMG/Banh/Banhflan.jpg"),
        Name: "Bánh flan",
        details: "Bánh flan ngon mắt với lớp caramel ngọt và bánh kem mịn màng, tạo sự hòa quyện và thơm ngon.",
    },
    {
        image: require("./../../../assets/IMG/Banh/Banhdongxu.png"),
        Name: "Bánh đồng xu",
        details: "Bánh đồng xu với hình dáng và hương vị độc đáo, thường được làm trong các dịp lễ kỷ niệm.",
    },
    {
      image: require("./../../../assets/IMG/Banh/Banhcupcake.png"),
      Name: "Bánh cupcake",
      details: "Bánh cupcake nhỏ xinh với lớp kem và trang trí đa dạng, thường là món tráng miệng lý tưởng.",
    },
    {
        image: require("./../../../assets/IMG/Banh/Banhdonut.png"),
        Name: "Bánh donut",
        details: "Bánh donut giòn mặn, ngọt hoặc nhân như sô cô la, hấp dẫn với hình dáng tròn và lớp đường mịn.",
    },
    {
        image: require("./../../../assets/IMG/Banh/Banhkhoaimochien.jpg"),
        Name: "Bánh khoai mỡ chiên",
        details: "Bánh khoai mỡ chiên giòn, ngon với lớp vỏ ngoài và khoai mỡ bên trong.",
    },
    {
      image: require("./../../../assets/IMG/Banh/Banhmuffinvietquat.png"),
      Name: "Bánh muffin việt quất",
      details: "Bánh muffin việt quất ngon mắt với hương vị thơm ngon và việt quất tươi ngon bên trong.",
    },
   
  ];

// Data dm lẩu
const foodIems1 = [
    {
      image: require("./../../../assets/IMG/Lau/Laucachepgion.png"),
      Name: "Lẩu cá chép giòn",
      details: "Món lẩu cá chép giòn là một món ăn độc đáo với hương vị hấp dẫn. Cá chép chiên giòn bên ngoài, mềm mịn bên trong, kết hợp với nước dùng đậm đà và rau sống tươi mát.",
    },
    {
        image: require("./../../../assets/IMG/Lau/Lauthai.png"),
        Name: "Lẩu Thái",
        details: "Lẩu Thái là một món lẩu đậm đà với gia vị đặc trưng của Thái Lan, hương vị hấp dẫn của nước dùng và hỗn hợp gia vị.",
    },
    {
        image: require("./../../../assets/IMG/Lau/Lauhaisan.png"),
        Name: "Lẩu hải sản",
        details: "Lẩu hải sản là món ăn phong phú với các loại hải sản tươi ngon ngâm trong nước dùng đậm đà và gia vị.",
    },
    {
        image: require("./../../../assets/IMG/Lau/Launam.png"),
        Name: "Lẩu nấm",
        details: "Lẩu nấm là món lẩu ngon miệng với hương vị thơm ngon và đa dạng từ các loại nấm.",
    },
    {
      image: require("./../../../assets/IMG/Lau/Laubo.jpg"),
      Name: "Lẩu bò",
      details: "Lẩu bò hấp dẫn với thịt bò tươi ngon và nước dùng đậm đà, tạo hương vị thơm ngon và ngon miệng.",
    },
    {
        image: require("./../../../assets/IMG/Lau/Laude.jpg"),
        Name: "Lẩu dê",
        details: "Lẩu dê với thịt dê thơm ngon và nước dùng đậm đà, tạo sự kết hợp độc đáo và ngon miệng.",
    },
    {
        image: require("./../../../assets/IMG/Lau/Laugalagiang.jpg"),
        Name: "Lẩu gà lá giang",
        details: "Lẩu gà lá giang với hương vị độc đáo từ lá giang và thịt gà tươi ngon.",
    },
    {
      image: require("./../../../assets/IMG/Lau/Laumam.png"),
      Name: "Lẩu mắm",
      details: "Lẩu mắm với hương vị cay nồng và đậm đà từ mắm tươi, thường được kết hợp với nhiều loại thực phẩm để tạo nên một bữa ăn thú vị.",
    },
   
  ];

// Data dm Nướng
const foodIems2 = [
    {
      image: require("./../../../assets/IMG/DoNuong/Thitbachinuongsate.png"),
      Name: "Thịt ba chỉ nướng sa tế",
      details: "Thịt ba chỉ nướng sa tế là một món thịt ba chỉ mỏng được nướng giòn và thấm đẫm hương vị cay nồng và đậm đà.",
    },
    {
        image: require("./../../../assets/IMG/DoNuong/Bachtuocnuongsate.png"),
        Name: "Bạch tuộc nướng sa tế",
        details: "Bạch tuộc nướng sa tế là món hải sản thơm ngon với vị cay nồng và vị ngọt của bạch tuộc.",
    },
    {
        image: require("./../../../assets/IMG/DoNuong/Ganuongmatong.png"),
        Name: "Gà nướng mật ong",
        details: "Gà nướng mật ong là món thịt gà ngon mắt với lớp mật ong bóng loáng tạo hương vị hấp dẫn.",
    },
    {
        image: require("./../../../assets/IMG/DoNuong/Thitxiennuongraucu.png"),
        Name: "Thịt xiên nướng rau củ",
        details: "Thịt xiên nướng rau củ là món thịt xiên giòn và thơm phôi pha với rau củ tươi ngon.",
    },
    {
      image: require("./../../../assets/IMG/DoNuong/Sohuyetnuongmohanh.png"),
      Name: "Sò huyết nướng mỡ hành",
      details: "Sò huyết nướng mỡ hành là món hấp dẫn với hương vị độc đáo của sò huyết và hành mỡ.",
    },
    {
        image: require("./../../../assets/IMG/DoNuong/Tomnuongmuoiot.jpg"),
        Name: "Tôm nướng muối ớt",
        details: "Tôm nướng muối ớt ngon mắt với hương vị muối ớt cay nồng và tôm tươi ngon.",
    },
    {
        image: require("./../../../assets/IMG/DoNuong/Suonsunnuong.png"),
        Name: "Sườn sụn nướng",
        details: "Sườn sụn nướng giòn với hương vị đậm đà, tạo sự kết hợp hấp dẫn giữa cay nồng và ngon miệng.",
    },
    {
      image: require("./../../../assets/IMG/DoNuong/Bonuonglalot.png"),
      Name: "Bò nướng lá lốt",
      details: "Bò nướng lá lốt với hương vị độc đáo từ lá lốt và thịt bò tươi ngon.",
    },
   
  ];

// Data dm Món ăn vặt
const foodIems3 = [
    {
      image: require("./../../../assets/IMG/MonAnVat/Trasuakemtrung.png"),
      Name: "Trà sữa kem trứng",
      details: "Trà sữa kem trứng là một thức uống trà sữa ngon mắt với lớp kem trứng béo ngậy, tạo sự kết hợp hoàn hảo giữa ngọt ngào và béo ngậy.",
    },
    {
        image: require("./../../../assets/IMG/MonAnVat/Trungcutlonxaome.png"),
        Name: "Trứng cút lộn xào me",
        details: "Trứng cút lộn xào me với hương vị cay nồng và độ ngọt đặc trưng, tạo một món ăn hấp dẫn.",
    },
    {
        image: require("./../../../assets/IMG/MonAnVat/Khoaitaynghien.png"),
        Name: "Khoai tây nghiền",
        details: "Khoai tây nghiền béo ngậy, thường được kết hợp với gia vị để tạo ra một món ăn thơm ngon.",
    },
    {
        image: require("./../../../assets/IMG/MonAnVat/Bapxaomohanh.png"),
        Name: "Bắp xào mỡ hành",
        details: "Bắp xào mỡ hành với hương vị thơm ngon của mỡ hành và bắp tươi ngon.",
    },
    {
      image: require("./../../../assets/IMG/MonAnVat/Chagiohaisanphomai.png"),
      Name: "Chả giò hải sản phô mai",
      details: "Chả giò hải sản phô mai giòn và ngon mắt với lớp vỏ giòn, hải sản ngon và phô mai bên trong.",
    },
    {
        image: require("./../../../assets/IMG/MonAnVat/Xoailac.png"),
        Name: "Xoài lắc",
        details: "Xoài lắc ngọt ngào với hương vị tươi mát và ngọt ngào.",
    },
    {
        image: require("./../../../assets/IMG/MonAnVat/Changangamxatac.png"),
        Name: "Chân gà ngâm sả tắc",
        details: "Chân gà ngâm sả tắc với hương vị độc đáo của sả tắc và thịt gà, tạo sự hấp dẫn.",
    },
    {
      image: require("./../../../assets/IMG/MonAnVat/Goicuon.png"),
      Name: "Gỏi cuốn",
      details: "Gỏi cuốn tươi ngon với các loại nguyên liệu cuốn trong lá bánh tráng, thường ăn kèm với nước mắm pha ngon đậm đà.",
    },
   
  ];

// Data dm Nước chấm
const foodIems4 = [
    {
      image: require("./../../../assets/IMG/NuocCham/Nuocmamchuangot.png"),
      Name: "Nước mắm chua ngọt",
      details: "Nước mắm chua ngọt với sự kết hợp độc đáo giữa hương vị chua và ngọt, là nguyên liệu quen thuộc trong nhiều món ăn Á Đông.",
    },
    {
        image: require("./../../../assets/IMG/NuocCham/Muoitieuchanh.png"),
        Name: "Muối tiêu chanh",
        details: "Muối tiêu chanh với hương vị cay và chua tạo điểm nhấn trong nhiều món ăn.",
    },
    {
        image: require("./../../../assets/IMG/NuocCham/Mamtom.png"),
        Name: "Mắm tôm",
        details: "Mắm tôm là một loại mắm đặc trưng trong ẩm thực Á Đông, tạo hương vị đậm đà và độc đáo.",
    },
    {
        image: require("./../../../assets/IMG/NuocCham/Nuocmamgung.png"),
        Name: "Nước mắm gừng",
        details: "Nước mắm gừng kết hợp vị cay của gừng với hương vị đặc trưng của mắm, tạo một nước mắm độc đáo.",
    },
    {
      image: require("./../../../assets/IMG/NuocCham/Muoiotchanh.png"),
      Name: "Muối ớt chanh",
      details: "Muối ớt chanh với sự kết hợp của muối, ớt cay, và chanh tạo nên hương vị cay và chua độc đáo.",
    },
    {
        image: require("./../../../assets/IMG/NuocCham/Nuocmamme.png"),
        Name: "Nước mắm me",
        details: "Nước mắm me với hương vị cay ngọt độc đáo của me và mắm.",
    },
    {
        image: require("./../../../assets/IMG/NuocCham/Nuocchamchao.png"),
        Name: "Nước chấm chao",
        details: "Nước chấm chao với hương vị đậm đà và độc đáo, thường ăn kèm với các món ăn xào và nướng.",
    },
    {
      image: require("./../../../assets/IMG/NuocCham/Mamnem.png"),
      Name: "Mắm nêm",
      details: "Mắm nêm với hương vị đậm đà và cay nồng, thường được ăn kèm với các món ăn Việt Nam truyền thống.",
    },
   
  ];

// Data dm Nước trái cây
const foodIems5 = [
    {
      image: require("./../../../assets/IMG/NuocTraiCay/Nuocepcarot.png"),
      Name: "Nước ép cà rốt",
      details: "Nước ép cà rốt là một thức uống tươi mát và bổ dưỡng với hương vị tự nhiên của cà rốt, mang đến sự sảng khoái.",
    },
    {
        image: require("./../../../assets/IMG/NuocTraiCay/Nuocepduahau.png"),
        Name: "Nước ép dưa hấu",
        details: "Nước ép dưa hấu tươi mát với hương vị ngọt và màu sắc tươi tắn.",
    },
    {
        image: require("./../../../assets/IMG/NuocTraiCay/Nuocepthom.png"),
        Name: "Nước ép dứa",
        details: "Nước ép dứa ngon mắt với hương vị tự nhiên của dứa và độ ngọt đặc trưng.",
    },
    {
        image: require("./../../../assets/IMG/NuocTraiCay/Nuocepbidao.png"),
        Name: "Nước ép bí đao",
        details: "Nước ép bí đao với hương vị thơm ngon và tươi mát, mang đến cảm giác sảng khoái.",
    },
    {
      image: require("./../../../assets/IMG/NuocTraiCay/Sinhtodau.png"),
      Name: "Sinh tố dâu",
      details: "Sinh tố dâu tươi ngon với hương vị ngọt và màu sắc tươi tắn, tạo sự kết hợp hoàn hảo giữa ngon và bổ dưỡng.",
    },
    {
        image: require("./../../../assets/IMG/NuocTraiCay/Sinhtobo.png"),
        Name: "Sinh tố bơ",
        details: "Sinh tố bơ béo ngậy với hương vị bơ thơm ngon, mang đến hương vị đặc biệt và độ ngọt mềm mịn.",
    },
    {
        image: require("./../../../assets/IMG/NuocTraiCay/Nuocepluu.png"),
        Name: "Nước ép lựu",
        details: "Nước ép lựu đặc trưng với hương vị chua ngọt độc đáo và màu sắc tươi tắn.",
    },
    {
      image: require("./../../../assets/IMG/NuocTraiCay/Sinhtodua.png"),
      Name: "Sinh tố dừa",
      details: "Sinh tố dừa béo ngậy và mát lạnh, với hương vị độc đáo của dừa tươi.",
    },
   
  ];

// Data dm Salad
const foodIems6 = [
    {
      image: require("./../../../assets/IMG/Salad/Saladga.png"),
      Name: "Salad gà",
      details: "Salad gà với hương vị thơm ngon và ngon miệng, thường kết hợp với các loại rau sống.",
    },
    {
        image: require("./../../../assets/IMG/Salad/Saladhoaqua.png"),
        Name: "Salad hoa quả",
        details: "Salad hoa quả tươi mát với hương vị ngọt ngào và đa dạng của hoa quả.",
    },
    {
        image: require("./../../../assets/IMG/Salad/Saladmuc.png"),
        Name: "Salad mực",
        details: "Salad mực ngon mắt với thịt mực tươi ngon và nhiều loại rau sống.",
    },
    {
        image: require("./../../../assets/IMG/Salad/Saladtrungcahoi.png"),
        Name: "Salad trứng cá hồi",
        details: "Salad trứng cá hồi với hương vị độc đáo của cá hồi và các loại rau sống.",
    },
    {
      image: require("./../../../assets/IMG/Salad/Saladdaugiam.png"),
      Name: "Salad dầu giấm",
      details: "Salad dầu giấm với hương vị đậm đà của dầu giấm và các loại rau sống.",
    },
    {
        image: require("./../../../assets/IMG/Salad/Saladbapcaitim.png"),
        Name: "Salad bắp cải tím",
        details: "Salad bắp cải tím với sốt mayonnaise béo ngậy và hương vị độc đáo.",
    },
    {
        image: require("./../../../assets/IMG/Salad/Saladrongnhothanhcua.png"),
        Name: "Salad rong nho",
        details: "Salad rong nho thanh cua với hương vị độc đáo của thanh cua và nho.",
    },
    {
      image: require("./../../../assets/IMG/Salad/Saladkiwi.png"),
      Name: "Salad kiwi",
      details: "Salad kiwi với hương vị tươi mát và ngọt ngào của kiwi.",
    },
   
  ];

// Data dm Súp
const foodIems7 = [
    {
      image: require("./../../../assets/IMG/Sup/Supcuabido.png"),
      Name: "Súp cua bí đỏ",
      details: "Súp cua bí đỏ là một món súp ngọt ngào với hương vị đặc biệt của cua và bí đỏ, tạo nên sự ngon miệng và bổ dưỡng.",
    },
    {
        image: require("./../../../assets/IMG/Sup/Suphotvitlon.png"),
        Name: "Súp hột vịt lộn",
        details: "Súp hột vịt lộn là một món súp độc đáo với hột vịt lộn thơm ngon, thêm vào nước dùng sánh và ngon miệng.",
    },
    {
        image: require("./../../../assets/IMG/Sup/Supluon.png"),
        Name: "Súp lươn",
        details: "Súp lươn hấp dẫn với hương vị lươn thơm ngon và nước dùng đậm đà.",
    },
    {
        image: require("./../../../assets/IMG/Sup/Supga.jpg"),
        Name: "Súp gà",
        details: "Súp gà truyền thống với hương vị thơm ngon và đậm đà của thịt gà và gia vị.",
    },
    {
      image: require("./../../../assets/IMG/Sup/Supcahoi.png"),
      Name: "Súp cá hồi",
      details: "Súp cá hồi với thịt cá hồi tươi ngon và nước dùng đậm đà, tạo hương vị tinh tế và bổ dưỡng.",
    },
    {
        image: require("./../../../assets/IMG/Sup/Supmangtaynammo.jpg"),
        Name: "Súp măng tây nấm mỡ",
        details: "Súp măng tây nấm mỡ ngon với loại nấm mỡ, măng tây tươi ngon và nước dùng thơm ngon.",
    },
    {
        image: require("./../../../assets/IMG/Sup/Suphautrungbachthao.png"),
        Name: "Súp hàu trứng",
        details: "Súp hàu hấp dẫn với hương vị độc đáo của hàu và nước dùng đậm đà.",
    },
    {
      image: require("./../../../assets/IMG/Sup/Supbaongutoyen.jpg"),
      Name: "Súp bào ngư tổ yến",
      details: "Súp bào ngư tổ yến ngon mắt với sợi yến béo ngậy và nước dùng thơm ngon, tạo sự hòa quyện và độc đáo.",
    },
   
  ];