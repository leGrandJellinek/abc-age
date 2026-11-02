import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useNavigationStore = defineStore('navigation', () => {
  const menuList = ref([
    {
      id: 1,
      title: "Каталог"
    },
    {
      id: 2,
      title: "О компании"
    },
    {
      id: 3,
      title: "Блог"
    },
    {
      id: 4,
      title: "Цикл производства"
    }
  ])

  return {
    menuList
  }
})
