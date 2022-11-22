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
    ],
    blogList: [
      {
        id:1,
        title: "Заголовок новости",
        descr: "Massa commodo leo amet in feugiat non, commodo. Augue senectus felis, suspendisse amet suscipit vestibulum lobortis ornare sed. Pharetra, in duis tortor, iaculis mi magna urna nullam. Massa commodo leo amet in feugiat non, commodo. Augue senectus felis, suspendisse amet suscipit vestibulum lobortis ornare sed. Pharetra, in duis tortor, iaculis mi magna urna nullam...",
        img: "blog-item-bg.png"
      },
      {
        id:2,
        title: "Заголовок новости",
        descr: "Massa commodo leo amet in feugiat non, commodo. Augue senectus felis, suspendisse amet suscipit vestibulum lobortis ornare sed. Pharetra, in duis tortor, iaculis mi magna urna nullam. Massa commodo leo amet in feugiat non, commodo. Augue senectus felis, suspendisse amet suscipit vestibulum lobortis ornare sed. Pharetra, in duis tortor, iaculis mi magna urna nullam...",
        img: "blog-item-bg.png"
      },
      {
        id:3,
        title: "Заголовок новости",
        descr: "Massa commodo leo amet in feugiat non, commodo. Augue senectus felis, suspendisse amet suscipit vestibulum lobortis ornare sed. Pharetra, in duis tortor, iaculis mi magna urna nullam. Massa commodo leo amet in feugiat non, commodo. Augue senectus felis, suspendisse amet suscipit vestibulum lobortis ornare sed. Pharetra, in duis tortor, iaculis mi magna urna nullam...",
        img: "blog-item-bg.png"
      },
    ],
    productsList: [
      {
        id:1,
        title: "Наименование игрушки 1",
        reviews: 67,
        stars: 4,
        descr: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab.",
        img: "product-img-1.png"
      },
      {
        id:2,
        title: "Наименование игрушки 2",
        reviews: 77,
        stars: 4,
        descr: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab.",
        img: "product-img-2.png"
      },
      {
        id:3,
        title: "Наименование игрушки 3",
        reviews: 87,
        stars: 5,
        descr: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab.",
        img: "product-img-3.png"
      },
      {
        id:4,
        title: "Наименование игрушки 4",
        reviews: 97,
        stars: 5,
        descr: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab.",
        img: "product-img.png"
      },
      {
        id:5,
        title: "Наименование игрушки 5",
        reviews: 107,
        stars: 5,
        descr: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab.",
        img: "product-img.png"
      },
      {
        id:6,
        title: "Наименование игрушки 6",
        reviews: 117,
        stars: 5,
        descr: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab.",
        img: "product-img.png"
      },
      {
        id:7,
        title: "Наименование игрушки 7",
        reviews: 117,
        stars: 5,
        descr: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab.",
        img: "product-img.png"
      },
      {
        id:8,
        title: "Наименование игрушки 8",
        reviews: 210,
        stars: 5,
        descr: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab.",
        img: "product-img.png"
      },
      {
        id:9,
        title: "Наименование игрушки 9",
        reviews: 240,
        stars: 5,
        descr: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab.",
        img: "product-img.png"
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
    },
    getBlogList(state){
      return state.blogList
    },
    getProductList(state){
      return state.productsList
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
