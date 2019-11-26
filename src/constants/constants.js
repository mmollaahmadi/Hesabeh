export const USERS = [
  {
    id: 1,
    name: "محمد ملااحمدی",
    username: "mollaahmadi",
    email: "mollaahmadimohammad@gmail.com",
    phoneNumber: '09183694858',
    password: 'mamali',
    groups: [
      {
        id: '1',
        name: 'خوابگاه کشاورز',
        username: 'khabgah',
        users: [
          {
            id: 1,
          },
          {
            id: 2,
          },
          {
            id: 3,
          },
          {
            id: 4,
          },
          {
            id: 5,
          },
          {
            id: 6,
          }
        ]
      },
      {
        id: '2',
        name: 'خونه جواهری',
        username: 'javaheri',
        users: [
          {
            id: 1,
          },
          {
            id: 2,
          },
          {
            id: 3,
          },
        ]
      },
    ],
    labels: [
      {
        id: '1',
        name: 'برچسب ۱',
        color: {
          r: '20',
          g: '200',
          b: '20',
          a: '1'
        },
        isTextColorDark: true
      },
      {
        id: '2',
        name: 'برچسب ۲',
        color: {
          r: '20',
          g: '200',
          b: '20',
          a: '1'
        },
        isTextColorDark: false
      },
      {
        id: '3',
        name: 'برچسب ۳',
        color: {
          r: '20',
          g: '200',
          b: '20',
          a: '1'
        },
        isTextColorDark: true
      },
    ],
    payments: [
      {
        id: "1",
        name: "شامپو تخم مرغی",
        value: "5400 تومان",
        date: "شنبه 98/03/21",
        group: "اتاق 401 کشاورز",
        labels: [
          {
            id: '1',
            name: 'برچسب',
            color: {
              r: '20',
              g: '200',
              b: '20',
              a: '1'
            },
            isTextColorDark: true
          },
        ],
        description: 'اگه کسی خواست استفاده کنه',
        consumers: [
          {
            username: "mohammad",
            share: "1",
            value: "2700 تومان"
          },
          {
            username: "saadat",
            share: "1",
            value: "2700 تومان"
          }
        ],
        suppliers: [
          {
            username: "mohammad",
            share: "1",
            value: "2700 تومان"
          },
          {
            username: "saadat",
            share: "1",
            value: "2700 تومان"
          }
        ],
        pictures: [
          {
            url: '../../../assets/img/theme/team-4-800x800.jpg'
          },
          {
            url: '../../../assets/img/theme/team-4-800x800.jpg'
          },
        ],
      },
      {
        id: "2",
        name: "برنج",
        value: "5400 تومان",
        date: "شنبه 98/03/21",
        group: "اتاق 401 کشاورز",
        description: '',
        labels: [],
        consumers: [
          {
            username: "mohammad",
            share: "1",
            value: "2700 تومان"
          },
          {
            username: "saadat",
            share: "1",
            value: "2700 تومان"
          },
          {
            username: "saadat",
            share: "1",
            value: "2700 تومان"
          },
          {
            username: "saadat",
            share: "1",
            value: "2700 تومان"
          },
          {
            username: "saadat",
            share: "1",
            value: "2700 تومان"
          },
          {
            username: "saadat",
            share: "1",
            value: "2700 تومان"
          },
        ],
        suppliers: [
          {
            username: "mohammad",
            share: "1",
            value: "2700 تومان"
          },
          {
            username: "saadat",
            share: "1",
            value: "2700 تومان"
          }
        ],
        pictures: [
          {
            url: '../../../assets/img/theme/team-4-800x800.jpg'
          },
          {
            url: '../../../assets/img/theme/team-4-800x800.jpg'
          },
        ],
      },
      {
        id: "3",
        name: "برنج",
        value: "5400 تومان",
        date: "شنبه 98/03/21",
        group: "اتاق 401 کشاورز",
        description: '',
        labels: [
          {
            id: '1',
            name: 'برچسب ۱',
            color: {
              r: '20',
              g: '200',
              b: '20',
              a: '1'
            },
            isTextColorDark: true
          },
          {
            id: '1',
            name: 'برچسب ۲',
            color: {
              r: '20',
              g: '200',
              b: '20',
              a: '1'
            },
            isTextColorDark: true
          },
        ],
        consumers: [
          {
            username: "mohammad",
            share: "1",
            value: "2700 تومان"
          }
        ],
        suppliers: [
          {
            username: "mohammad",
            share: "1",
            value: "2700 تومان"
          },
          {
            username: "saadat",
            share: "1",
            value: "2700 تومان"
          }
        ],
        pictures: [],
      },
      {
        id: "4",
        name: "برنج",
        value: "5400 تومان",
        date: "شنبه 98/03/21",
        group: "اتاق 401 کشاورز",
        description: '',
        labels: [],
        consumers: [
          {
            username: "mohammad",
            share: "1",
            value: "2700 تومان"
          }
        ],
        suppliers: [
          {
            username: "mohammad",
            share: "1",
            value: "2700 تومان"
          }
        ],
        pictures: [],
      },
      {
        id: "5",
        name: "برنج",
        value: "5400 تومان",
        date: "شنبه 98/03/21",
        group: "اتاق 401 کشاورز",
        description: '',
        labels: [],
        consumers: [
          {
            username: "mohammad",
            share: "1",
            value: "2700 تومان"
          },
          {
            username: "saadat",
            share: "1",
            value: "2700 تومان"
          }
        ],
        suppliers: [
          {
            username: "mohammad",
            share: "1",
            value: "2700 تومان"
          }
        ],
        pictures: [],
      }
    ],
    financeAccount: {
      privatePayments: 1234,
      groupPayments: 4321,
      groupConsumes: 2143,
      totalSituation: 5678
    },
    defaultOrders: {
      groupDefaultOrder: 1,
      notificationsDefaultOrder: 2,
      paymentsDefaultOrder: 3
    },
  },
  {
    id: 2,
    name: "علی پاشایی",
    username: "pashaee",
    email: "alipashae8@yahoo.com",
    phoneNumber: '09360000000',
    password: '8888',
    groups: [],
    labels: [],
    payments: [],
    financeAccount: {},
    defaultOrders: {},
  },
  {
    id: 3,
    name: 'سعادت عباسی',
    username: 's.abbasi',
    email: 'saadat90417@gmail.com',
    phoneNumber: '09360001159',
    password: 'saadat',
    groups: [],
    labels: [],
    payments: [],
    financeAccount: {},
    defaultOrders: {},
  },
  {
    id: 4,
    name: 'حسین سلیمانی',
    username: 'hossein',
    email: 'hossein@gmail.com',
    phoneNumber: '09360000000',
    password: 'hossein',
    groups: [],
    labels: [],
    payments: [],
    financeAccount: {},
    defaultOrders: {},
  },
  {
    id: 5,
    name: 'ایمان قدیمی',
    username: 'iman',
    email: 'iman@gmail.com',
    phoneNumber: '09360001111',
    password: 'iman',
    groups: [],
    labels: [],
    payments: [],
    financeAccount: {},
    defaultOrders: {},
  },
  {
    id: 6,
    name: 'داوود گودرزیان',
    username: 'davoud',
    email: 'davoud@gmail.com',
    phoneNumber: '09360002222',
    password: 'davoud',
    groups: [],
    labels: [],
    payments: [],
    financeAccount: {},
    defaultOrders: {},
  }
];

export const _USERS = [
  {
    id: '1',
    name: "محمد ملااحمدی",
    username: "mollaahmadi",
    email: "mollaahmadimohammad@gmail.com",
    phoneNumber: '09183694858',
    password: 'mamali',
    groupsID: ['1', '2', '3'],
    labelsID: ['1', '2'],
  },
  {
    id: '2',
    name: "علی پاشایی",
    username: "pashaee",
    email: "alipashae8@yahoo.com",
    phoneNumber: '09360000000',
    password: '8888',
    groupsID: ['1', '2', '3'],
    labelsID: ['1', '3'],
  },
  {
    id: '3',
    name: 'سعادت عباسی',
    username: 's.abbasi',
    email: 'saadat90417@gmail.com',
    phoneNumber: '09360001159',
    password: 'saadat',
    groupsID: ['1', '2', '3'],
    labelsID: ['1', '2', '3'],
  }
];
export const GROUPS = [
  {
    id: '1',
    name: 'خوابگاه کشاورز',
    username: 'dormity',
    adminID: '1',
    usersIDs: ['1', '2', '3'],
  },
  {
    id: '2',
    name: 'خونه',
    username: 'home',
    adminID: '2',
    usersIDs: ['1', '2', '3'],
  },
  {
    id: '3',
    name: 'اداره',
    username: 'office',
    adminID: '3',
    usersIDs: ['1', '2', '3'],
  },
];
export const LABELS = [
  {
    id: '1',
    name: 'فروشگاه رفاه',
    color: {
      r: '20',
      g: '200',
      b: '20',
      a: '1'
    },
    isTextColorDark: true,
    userID: '1',
  },
  {
    id: '2',
    name: 'خرت و پرت سینما',
    color: {
      r: '20',
      g: '200',
      b: '20',
      a: '1'
    },
    isTextColorDark: false,
    userID: '2',
  },
  {
    id: '3',
    name: 'ناتمام',
    color: {
      r: '20',
      g: '200',
      b: '20',
      a: '1'
    },
    isTextColorDark: true,
    userID: '3'
  },
];
export const NOTIFICATIONS = [
  {
    id: "1",
    dateRequest: {
      day: '19',
      month: '08',
      year: '1398'
    },
    userSenderID: "1",
    type: "buy-list",
    targetGroupID: "1",
    userRecieverIDS: ['1', '2', '3'],
    buyList: [
      {
        id: "1",
        name: "شامپو تخم مرغی صحت، نداشت نگیر",
      },
      {
        id: "2",
        name: "سس گوجه فرنگی، فقط دلپذیر باشه ها",
      }
    ]
  },
  {
    id: "2",
    dateRequest: {
      day: '25',
      month: '02',
      year: '1398'
    },
    userSenderID: "2",
    type: "join-to-my-group",
    targetGroupID: "2",
    userRecieverIDS: ['1', '2', '3'],
    buyList: []
  },
  {
    id: "3",
    dateRequest: {
      day: '01',
      month: '09',
      year: '1398'
    },
    userSenderID: "3",
    type: "join-me-to-other-group",
    targetGroupID: "1",
    userRecieverIDS: ['1', '2', '3'],
    buyList: []
  },
  {
    id: "4",
    dateRequest: {
      day: '21',
      month: '10',
      year: '1398'
    },
    userSenderID: "1",
    type: "disjoin-from-my-group",
    targetGroupID: "2",
    userRecieverIDS: ['1', '2', '3'],
    buyList: []
  },
  {
    id: "5",
    dateRequest: {
      day: '11',
      month: '11',
      year: '1398'
    },
    userSenderID: "1",
    type: "disjoin-me-from-other-group",
    targetGroupID: "1",
    userRecieverIDS: ['1', '2', '3'],
    buyList: []
  }
];
export const FILTERS = [
  {
    id: 1,
    value: 'قدیمی ترین',
    link: ''
  },
  {
    id: 2,
    value: 'جدیدترین',
    link: ''
  },
  {
    id: 3,
    value: 'ارزان ترین',
    link: ''
  },
  {
    id: 4,
    value: 'گران ترین',
    link: ''
  },
];
export const NOTIFICATIONS_FILTERS = [
  {
    id: 1,
    value: 'قدیمی ترین',
    link: ''
  },
  {
    id: 2,
    value: 'جدیدترین',
    link: ''
  },
];
export const GROUPS_FILTERS = [
  {
    id: 1,
    value: 'قدیمی ترین',
    link: ''
  },
  {
    id: 2,
    value: 'جدیدترین',
    link: ''
  },
  {
    id: 3,
    value: 'ارزان ترین',
    link: ''
  },
  {
    id: 4,
    value: 'گران ترین',
    link: ''
  },
  {
    id: 5,
    value: 'خلوت ترین',
    link: ''
  },
  {
    id: 6,
    value: 'شلوغ ترین',
    link: ''
  },
];