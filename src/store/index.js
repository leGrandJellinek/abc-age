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
    ]
  },
  getters: {
    getMenuList(state){
      return state.menuList
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
