export default {
  tabArray: [
    {
      title: 'COFFEE',
      menu: 'coffee',
    },
    {
      title: 'noneCOFFEE',
      menu: 'nocoffee',
    },
    {
      title: 'TEA',
      menu: 'tea',
    },
    {
      title: 'CAKE',
      menu: 'cake',
    },
  ],

  optionArray: [
    {
      className: 'size',
      title: '사이즈',
    },
    {
      className: 'cup',
      title: '컵선택'
    },
    {
      className: 'personal',
      title: '퍼스널 옵션'
    }
  ],

  sizeArray: [
    {
      className: 'tall',
      title: 'Tall',
      volume: '355ml',
      img: ''
    },
    {
      className: 'grande',
      title: 'Grande',
      volume: '473ml',
      img: ''
    },
    {
      className: 'venti',
      title: 'Venti',
      volume: '591ml',
      img: ''
    }
  ],

  cupArray: [
    {
      className: 'hall',
      title: '매장'
    },
    {
      className: 'individual',
      title: '개인'
    },
    {
      className: 'disposable',
      title: '일회용'
    }
  ],

  coffeeArray: [
    {
      code: 'coffee',
      title: '아메리카노',
      engTitle: 'Amricano',
      price: '4,100',
      img: 'americano',
      btnCode: 'americano',
      info: '진한 에스프레소와 뜨거운 물을 섞어 스타벅스의 깔끔하고 강렬한 에스프레소를 가장 부드럽게 잘 느낄 수 있는 커피'
    },
    {
      code: "coffee",
      title: '카페 라떼',
      engTitle: 'Cafe Latte',
      price: '4,600',
      img: 'cafelatte',
      btnCode: 'cafelatte'
    },
  ],

  nocoffeeArray: [
    {
      code: "nocoffee",
      title: '제주 유기농 말차로 만든 크림 프라푸치노',
      engTitle: 'Malcha Cream Frappuccino from Jeju Organic Farm',
      price: '6,300',
      img: 'malchafra',
      btnCode: 'malcha',
    },
    {
      code: "nocoffee",
      title: '자바 칩 프라푸치노',
      engTitle: 'Java Chip Frappuccino',
      price: '6,100',
      img: 'javachipfra',
      btnCode: 'javachip',
    }
  ],

  teaArray: [
    {
      code: "tea",
      title: '유자 민트 티',
      engTitle: 'Yuja Mint Tea',
      price: '5,600',
      img: 'yujamint',
      btnCode: 'yujamint',
    },
    {
      code: "tea",
      title: '자몽 허니 블랙 티',
      engTitle: 'Grapefruit Honey Black Tea',
      price: '5,300',
      img: 'grapefruittea',
      btnCode: 'grapefruit',
    }
  ],

  cakeArray: [
    {
      code: "cake",
      title: '부드러운 생크림 카스테라',
      engTitle: 'Fresh Cream Castella',
      price: '4,500',
      img: 'castella',
      btnCode: 'castella',
    },
    {
      code: "cake",
      title: '호두 당근 케이크',
      engTitle: 'Walnut Carrot Cake',
      price: '6,500',
      img: 'walnutcake',
      btnCode: 'walnut',
    }
  ],
}