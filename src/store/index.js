import { createStore } from 'vuex'

export default createStore({
  state: {
    menuList: [
      {
        id:1,
        title:"Каталог"
      },
      {
        id:2,
        title:"О компании"
      },
      {
        id:3,
        title:"Блог"
      },
      {
        id:4,
        title:"Цикл производства"
      },
    ],
    footerIcons: [
      {
        id:1,
        icon:"facebook.svg"
      },
      {
        id:2,
        icon:"youtube.svg"
      },
      {
        id:3,
        icon:"dribbble.svg"
      },
      {
        id:4,
        icon:"whatsapp.svg"
      },
    ],
    footerInfo:[
      {
        id:1,
        title:"Телефон",
        info:"310-437-2766",
        icon:"call-calling.svg"
      },
      {
        id:2,
        title:"Почта",
        info:"unreal@outlook.com",
        icon:"mail.svg"
      },
      {
        id:3,
        title:"Адрес",
        info:"706 Campfire Ave. Meriden, CT 06450",
        icon:"location.svg"
      },
      {
        id:4,
        title:"Для оптовых покупателей",
        info:"310-437-2766",
        icon:"printer.svg"
      },
    ],
    usersComments: [
      {
        id: 1,
        userName: "Ирина Ларионова",
        city: "Санкт-Петербург",
        title: "«Подарок порадовал, дети были в восторге»",
        comment: "Massa commodo leo amet in feugiat non, commodo. Augue senectus felis, suspendisse amet suscipit vestibulum lobortis ornare sed. Pharetra, in duis tortor, iaculis mi magna urna nullam. ",
        img: "default-avatar.png"
      },
      {
        id: 2,
        userName: "Вишневская Елена",
        city: "Санкт-Петербург",
        title: "«Подарок порадовал, дети были в восторге»",
        comment: "Massa commodo leo amet in feugiat non, commodo. Augue senectus felis, suspendisse amet suscipit vestibulum lobortis ornare sed. Pharetra, in duis tortor, iaculis mi magna urna nullam. ",
        img: "default-avatar.png"
      },
      {
        id:3 ,
        userName: "Елена Демидова",
        city: "Санкт-Петурбург",
        title: "«Подарок порадовал, дети были в восторге»",
        comment: "Massa commodo leo amet in feugiat non, commodo. Augue senectus felis, suspendisse amet suscipit vestibulum lobortis ornare sed. Pharetra, in duis tortor, iaculis mi magna urna nullam. ",
        img: "default-avatar.png"
      },
    ]
  },
  getters: {
    getMenuList(state){
      return state.menuList
    },
    getFooterIcons(state){
      return state.footerIcons
    },
    getFooterInfo(state){
      return state.footerInfo
    },
    getUsersComments(state){
      return state.usersComments
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
