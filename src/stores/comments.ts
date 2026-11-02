import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { CommentItem } from '@/types'

export const useCommentsStore = defineStore('comments', () => {
  const usersComments = ref<CommentItem[]>([
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
      id: 3,
      userName: "Елена Демидова",
      city: "Санкт-Петурбург",
      title: "«Подарок порадовал, дети были в восторге»",
      comment: "Massa commodo leo amet in feugiat non, commodo. Augue senectus felis, suspendisse amet suscipit vestibulum lobortis ornare sed. Pharetra, in duis tortor, iaculis mi magna urna nullam. ",
      img: "default-avatar.png"
    }
  ])

  return {
    usersComments
  }
})
