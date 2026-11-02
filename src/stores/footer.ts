import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { FooterIcon, FooterInfo } from '@/types'

export const useFooterStore = defineStore('footer', () => {
  const footerIcons = ref<FooterIcon[]>([
    {
      id: 1,
      icon: "facebook.svg",
      name: "Facebook",
      href: "https://facebook.com"
    },
    {
      id: 2,
      icon: "youtube.svg",
      name: "YouTube",
      href: "https://youtube.com"
    },
    {
      id: 3,
      icon: "dribbble.svg",
      name: "Dribbble",
      href: "https://dribbble.com"
    },
    {
      id: 4,
      icon: "whatsapp.svg",
      name: "WhatsApp",
      href: "https://whatsapp.com"
    }
  ])

  const footerInfo = ref<FooterInfo[]>([
    {
      id: 1,
      title: "Телефон",
      info: "310-437-2766",
      icon: "call-calling.svg"
    },
    {
      id: 2,
      title: "Почта",
      info: "unreal@outlook.com",
      icon: "mail.svg"
    },
    {
      id: 3,
      title: "Адрес",
      info: "706 Campfire Ave. Meriden, CT 06450",
      icon: "location.svg"
    },
    {
      id: 4,
      title: "Для оптовых покупателей",
      info: "310-437-2766",
      icon: "printer.svg"
    }
  ])

  return {
    footerIcons,
    footerInfo
  }
})
