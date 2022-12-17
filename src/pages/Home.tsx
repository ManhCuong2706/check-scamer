import { Navbar } from 'components/Navbar';
import { Scamlist } from 'components/ScamList';
import { NavbarCount, Scamer } from 'Models';

export interface HomeProps {}

export function Home(props: HomeProps) {
  const count: NavbarCount = {
    scamCount: 23.243,
    contentCount: 41,
  };

  let scamerCount = 42;

  const scammerList: Scamer[] = [
    {
      id: 'sc-001',
      name: 'Hoàng Thị Đặng',
      phone: '0369084659',
      bankNumber: '0369084659',
      bankName: 'Momo',
      image: ['../assets/imgs/img-001.jpg'],
      content:
        'Tôi mua acc, sau khi bank tiền thì bị block. Số tiền tuy nhỏ nhưng nếu nhiều người bị lừa sẽ càng lớn, mong quý admin đưa nó lên checkscam để mng cảnh giác tránh mất tiền oan',
      date: '13-12-2022',
      review: 300,
    },
    {
      id: 'sc-002',
      name: 'Trần Hoàng Tuấn',
      bankNumber: '0181003640469',
      bankName: 'Ngân hàng Ngoại Thương Việt Nam VCB',
      image: [
        '../assets/imgs/img-002.jpg',
        '../assets/imgs/img-003.jpg',
        '../assets/imgs/img-004.jpg',
      ],
      content:
        'Lừa đảo cọc mua điện thoại 200.000đ . Nick Facebook tên tuấn blue link https://www.facebook.com/profile.php?id=100047040735103&mibextid=ZbWKwL',
      date: '13-12-2022',
      review: 300,
    },
    {
      id: 'sc-003',
      name: 'Nguyen Thi Ngoc Kieu',

      bankNumber: '0071000779333 ',
      bankName: 'Vietcombank',
      image: ['../assets/imgs/img-005.png'],
      content:
        'BẠN NÀO CÓ Ý ĐỊNH GIAO DỊCH VỚI CHỦ TÀI KHOẢN NÀY THÌ NÉ GIÚP MÌNH Ạ‼️‼️ chủ yếu NGUYỄN THỊ NGỌC KIỀU giao dịch bên K-pop nên bạn nào laf K stan thì nên dừng lại đọc nhé. Bạn này là scammer 1 lần lừa rất nhiều người với chiêu trò y chang nhau là sẽ quay vd check card kèm tên fb của bản thân bạn + giờ quay video. Xin hãy cẩn thận với bạn này, đừng để bị trường hợp giống mình ạ!!!! Ngoài ra bạn nào có biết thông tin về bạn này xin hãy cho mình biết với ạ ㅠㅠ Cảm ơn các bạn vì đã đọc.',
      date: '13-12-2022',
      review: 300,
    },
    {
      id: 'sc-004',
      name: 'Nguyen Thu Hien',
      bankNumber: '251020061403',
      bankName: 'MB bank',
      image: ['../assets/imgs/img-0016.jpg', '../assets/imgs/img-007.jpg'],
      date: '13-12-2022',
      review: 300,
    },
    {
      id: 'sc-005',
      name: 'Nguyen Phan Thanh Dat',
      bankNumber: '70110000866308',
      bankName: 'Bidv',
      image: ['../assets/imgs/img-008.jpg', '../assets/imgs/img-009.jpg'],
      content:
        'Đăng bài booking du lịch, bán phòng, bán đủ các loại trên fb để lừa người chuyển khoản. Hiện tại đã lừa ít nhất 20 triệu',
      date: '13-12-2022',
      review: 300,
    },
  ];
  return (
    <div>
      <Navbar navCount={count} />
      <Scamlist ScList={scammerList} scamerCount={scamerCount} />
    </div>
  );
}
