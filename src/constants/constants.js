export const USERS = [
  {
    name: "محمد ملااحمدی",
    username: "mollaahmadi",
    email: "mollaahmadimohammad@gmail.com",
    phoneNumber: '09183694858',
    password: 'mamali',
    groups:[
      {
        id:'1',
        name: 'خوابگاه کشاورز',
        username: 'khabgah',
        users:[
          {
            id:'1',
            name:'محمد',
            username:'mollaahmdi'
          },
          {
            id:'2',
            name:'محمد',
            username:'mollaahmdi'
          },
          {
            id:'3',
            name:'محمد',
            username:'mollaahmdi'
          },
          {
            id:'4',
            name:'محمد',
            username:'mollaahmdi'
          }
        ]
      },
      {
        id:'2',
        name: '2خوابگاه کشاورز',
        username: 'khabgah2',
        users:[
          {
            id:'5',
            name:'2محمد',
            username:'mollaahmdi'
          },
          {
            id:'6',
            name:'2محمد',
            username:'mollaahmdi'
          },
        ]
      },
      {
        id:'3',
        name: 'خوابگاه کشاورز',
        username: 'khabgah',
        users:[
          {
            id:'7',
            name:'محمد',
            username:'mollaahmdi'
          },
          {
            id:'8',
            name:'محمد',
            username:'mollaahmdi'
          },
        ]
      },
    ],
    labels:[
      {
        id:'1',
        name:'برچسب ۱',
        color: {
          r:'20',
          g:'200',
          b:'20',
          a:'1'
        },
        isTextColorDark:true
      },
      {
        id:'2',
        name:'برچسب ۲',
        color: {
          r:'20',
          g:'200',
          b:'20',
          a:'1'
        },
        isTextColorDark: false
      },
      {
        id:'3',
        name:'برچسب ۳',
        color: {
          r:'20',
          g:'200',
          b:'20',
          a:'1'
        },
        isTextColorDark: true
      },
    ]
  },
  {
    name: "علی پاشایی",
    username: "pashaee",
    email: "alipashae8@yahoo.com",
    phoneNumber: '09360000000',
    password: '8888',
    groups:[]
  },
  {
    name: 'سعادت عباسی',
    username: 's.abbasi',
    email: 'saadat90417@gmail.com',
    phoneNumber: '09360001159',
    password: 'saadat',
    groups:[]
  }
];

export const _USERS = [
  {
    id:'1',
    name: "محمد ملااحمدی",
    username: "mollaahmadi",
    email: "mollaahmadimohammad@gmail.com",
    phoneNumber: '09183694858',
    password: 'mamali',
    groupsID:['1','2','3'],
    labelsID:['1','2'],
  },
  {
    id:'2',
    name: "علی پاشایی",
    username: "pashaee",
    email: "alipashae8@yahoo.com",
    phoneNumber: '09360000000',
    password: '8888',
    groupsID:['1','2','3'],
    labelsID:['1','3'],
  },
  {
    id:'3',
    name: 'سعادت عباسی',
    username: 's.abbasi',
    email: 'saadat90417@gmail.com',
    phoneNumber: '09360001159',
    password: 'saadat',
    groupsID:['1','2','3'],
    labelsID:['1','2','3'],
  }
];

export const GROUPS=[
  {
    id:'1',
    name: 'خوابگاه کشاورز',
    username: 'dormity',
    adminID:'1',
    usersIDs:['1','2','3'],
  },
  {
    id:'2',
    name: 'خونه',
    username: 'home',
    adminID:'2',
    usersIDs:['1','2','3'],
  },
  {
    id:'3',
    name: 'اداره',
    username: 'office',
    adminID:'3',
    usersIDs:['1','2','3'],
  },
];
export const LABELS=[
  {
    id:'1',
    name:'فروشگاه رفاه',
    color: {
      r:'20',
      g:'200',
      b:'20',
      a:'1'
    },
    isTextColorDark:true,
    userID:'1',
  },
  {
    id:'2',
    name:'خرت و پرت سینما',
    color: {
      r:'20',
      g:'200',
      b:'20',
      a:'1'
    },
    isTextColorDark: false,
    userID:'2',
  },
  {
    id:'3',
    name:'ناتمام',
    color: {
      r:'20',
      g:'200',
      b:'20',
      a:'1'
    },
    isTextColorDark: true,
    userID:'3'
  },
];
export const NOTIFICATIONS=[
  {
    id: "1",
    dateRequest: {
      day:'19',
      month:'08',
      year:'1398'
    },
    userSenderID: "1",
    type: "buy-list",
    targetGroupID: "1",
    userRecieverIDS: ['1','2','3'],
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
      day:'25',
      month:'02',
      year:'1398'
    },
    userSenderID: "2",
    type: "join-to-my-group",
    targetGroupID: "2",
    userRecieverIDS: ['1','2','3'],
    buyList: []
  },
  {
    id: "3",
    dateRequest: {
      day:'01',
      month:'09',
      year:'1398'
    },
    userSenderID: "3",
    type: "join-me-to-other-group",
    targetGroupID: "1",
    userRecieverIDS: ['1','2','3'],
    buyList: []
  },
  {
    id: "4",
    dateRequest: {
      day:'21',
      month:'10',
      year:'1398'
    },
    userSenderID: "1",
    type: "disjoin-from-my-group",
    targetGroupID: "2",
    userRecieverIDS: ['1','2','3'],
    buyList: []
  },
  {
    id: "5",
    dateRequest: {
      day:'11',
      month:'11',
      year:'1398'
    },
    userSenderID: "1",
    type: "disjoin-me-from-other-group",
    targetGroupID: "1",
    userRecieverIDS: ['1','2','3'],
    buyList: []
  }
];
export const FILTERS = [
  {
    value: 'قدیمی ترین',
    link: ''
  },
  {
    value: 'جدیدترین',
    link: ''
  },
  {
    value: 'ارزان ترین',
    link: ''
  },
  {
    value: 'گران ترین',
    link: ''
  },
];
export const NOTIFICATIONS_FILTERS=[
  {
    value: 'قدیمی ترین',
    link: ''
  },
  {
    value: 'جدیدترین',
    link: ''
  },
];
export const GROUPS_FILTERS=[
  {
    value: 'قدیمی ترین',
    link: ''
  },
  {
    value: 'جدیدترین',
    link: ''
  },
  {
    value: 'ارزان ترین',
    link: ''
  },
  {
    value: 'گران ترین',
    link: ''
  },
  {
    value: 'خلوت ترین',
    link: ''
  },
  {
    value: 'شلوغ ترین',
    link: ''
  },
];