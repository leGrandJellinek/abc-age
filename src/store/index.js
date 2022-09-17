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
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
