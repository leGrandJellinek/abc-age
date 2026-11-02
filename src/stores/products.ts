import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Product } from '@/types'

export const useProductsStore = defineStore('products', () => {
  const productsList = ref<Product[]>([
    {
      id: 1,
      title: "Наименование игрушки 1",
      reviews: 67,
      stars: 4,
      descr: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab.",
      img: "product-img-1.png"
    },
    {
      id: 2,
      title: "Наименование игрушки 2",
      reviews: 77,
      stars: 4,
      descr: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab.",
      img: "product-img-2.png"
    },
    {
      id: 3,
      title: "Наименование игрушки 3",
      reviews: 87,
      stars: 5,
      descr: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab.",
      img: "product-img-3.png"
    },
    {
      id: 4,
      title: "Наименование игрушки 4",
      reviews: 97,
      stars: 5,
      descr: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab.",
      img: "product-img.png"
    },
    {
      id: 5,
      title: "Наименование игрушки 5",
      reviews: 107,
      stars: 5,
      descr: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab.",
      img: "product-img.png"
    },
    {
      id: 6,
      title: "Наименование игрушки 6",
      reviews: 117,
      stars: 5,
      descr: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab.",
      img: "product-img.png"
    },
    {
      id: 7,
      title: "Наименование игрушки 7",
      reviews: 117,
      stars: 5,
      descr: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab.",
      img: "product-img.png"
    },
    {
      id: 8,
      title: "Наименование игрушки 8",
      reviews: 210,
      stars: 5,
      descr: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab.",
      img: "product-img.png"
    },
    {
      id: 9,
      title: "Наименование игрушки 9",
      reviews: 240,
      stars: 5,
      descr: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab.",
      img: "product-img.png"
    }
  ])

  return {
    productsList
  }
})
