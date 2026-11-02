import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { MenuItem } from '@/types'

export const useNavigationStore = defineStore('navigation', () => {
  const menuList = ref<MenuItem[]>([
    {
      id: 1,
      title: "Каталог",
      href: "#products"
    },
    {
      id: 2,
      title: "О компании",
      href: "#about"
    },
    {
      id: 3,
      title: "Блог",
      href: "#blog"
    },
    {
      id: 4,
      title: "Цикл производства",
      href: "#advantages"
    }
  ])

  return {
    menuList
  }
})
