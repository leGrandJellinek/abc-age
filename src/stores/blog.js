import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useBlogStore = defineStore('blog', () => {
  const blogList = ref([
    {
      id: 1,
      title: "Заголовок новости",
      descr: "Massa commodo leo amet in feugiat non, commodo. Augue senectus felis, suspendisse amet suscipit vestibulum lobortis ornare sed. Pharetra, in duis tortor, iaculis mi magna urna nullam. Massa commodo leo amet in feugiat non, commodo. Augue senectus felis, suspendisse amet suscipit vestibulum lobortis ornare sed. Pharetra, in duis tortor, iaculis mi magna urna nullam...",
      img: "blog-item-bg.png"
    },
    {
      id: 2,
      title: "Заголовок новости",
      descr: "Massa commodo leo amet in feugiat non, commodo. Augue senectus felis, suspendisse amet suscipit vestibulum lobortis ornare sed. Pharetra, in duis tortor, iaculis mi magna urna nullam. Massa commodo leo amet in feugiat non, commodo. Augue senectus felis, suspendisse amet suscipit vestibulum lobortis ornare sed. Pharetra, in duis tortor, iaculis mi magna urna nullam...",
      img: "blog-item-bg.png"
    },
    {
      id: 3,
      title: "Заголовок новости",
      descr: "Massa commodo leo amet in feugiat non, commodo. Augue senectus felis, suspendisse amet suscipit vestibulum lobortis ornare sed. Pharetra, in duis tortor, iaculis mi magna urna nullam. Massa commodo leo amet in feugiat non, commodo. Augue senectus felis, suspendisse amet suscipit vestibulum lobortis ornare sed. Pharetra, in duis tortor, iaculis mi magna urna nullam...",
      img: "blog-item-bg.png"
    }
  ])

  return {
    blogList
  }
})
