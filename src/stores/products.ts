import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { Product, TagItem } from '@/types'

export const useProductsStore = defineStore('products', () => {
  const searchQuery = ref<string>('')

  const tagsList = ref<TagItem[]>([
    { id: 1, title: 'Игрушки оптом и в розницу', active: false },
    { id: 2, title: 'Оптовый магазин', active: false },
    { id: 3, title: 'Для малышей', active: false },
    { id: 4, title: 'Хиты продаж', active: false },
    { id: 5, title: 'Высокий рейтинг 5★', active: false },
    { id: 6, title: 'Новинки', active: false }
  ])

  const productsList = ref<Product[]>([
    {
      id: 1,
      title: 'Наименование игрушки 1',
      reviews: 67,
      stars: 4,
      descr: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab.',
      img: 'product-img-1.png',
      category: 'toddlers',
      isWholesale: true,
      isNew: true
    },
    {
      id: 2,
      title: 'Наименование игрушки 2',
      reviews: 77,
      stars: 4,
      descr: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab.',
      img: 'product-img-2.png',
      category: 'creative',
      isWholesale: false,
      isNew: false
    },
    {
      id: 3,
      title: 'Наименование игрушки 3',
      reviews: 87,
      stars: 5,
      descr: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab.',
      img: 'product-img-3.png',
      category: 'educational',
      isWholesale: true,
      isHit: true
    },
    {
      id: 4,
      title: 'Наименование игрушки 4',
      reviews: 97,
      stars: 5,
      descr: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab.',
      img: 'product-img.png',
      category: 'toddlers',
      isWholesale: true,
      isHit: true
    },
    {
      id: 5,
      title: 'Наименование игрушки 5',
      reviews: 107,
      stars: 5,
      descr: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab.',
      img: 'product-img.png',
      category: 'creative',
      isWholesale: true,
      isHit: true,
      isNew: true
    },
    {
      id: 6,
      title: 'Наименование игрушки 6',
      reviews: 117,
      stars: 5,
      descr: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab.',
      img: 'product-img.png',
      category: 'toddlers',
      isWholesale: false,
      isHit: true
    },
    {
      id: 7,
      title: 'Наименование игрушки 7',
      reviews: 117,
      stars: 5,
      descr: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab.',
      img: 'product-img.png',
      category: 'educational',
      isWholesale: true,
      isNew: true
    },
    {
      id: 8,
      title: 'Наименование игрушки 8',
      reviews: 210,
      stars: 5,
      descr: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab.',
      img: 'product-img.png',
      category: 'creative',
      isWholesale: true,
      isHit: true
    },
    {
      id: 9,
      title: 'Наименование игрушки 9',
      reviews: 240,
      stars: 5,
      descr: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab.',
      img: 'product-img.png',
      category: 'toddlers',
      isWholesale: true,
      isHit: true,
      isNew: true
    }
  ])

  function setSearchQuery(query: string): void {
    searchQuery.value = query
  }

  function toggleTag(tagId: number): void {
    const target = tagsList.value.find((t) => t.id === tagId)
    if (target) {
      target.active = !target.active
    }
  }

  function resetFilters(): void {
    searchQuery.value = ''
    tagsList.value.forEach((tag) => {
      tag.active = false
    })
  }

  const filteredProducts = computed<Product[]>(() => {
    let result = productsList.value

    const query = searchQuery.value.trim().toLowerCase()
    if (query) {
      result = result.filter(
        (item) =>
          item.title.toLowerCase().includes(query) ||
          item.descr.toLowerCase().includes(query)
      )
    }

    const activeTags = tagsList.value.filter((t) => t.active).map((t) => t.id)
    if (activeTags.length > 0) {
      if (activeTags.includes(1) || activeTags.includes(2)) {
        result = result.filter((item) => item.isWholesale)
      }
      if (activeTags.includes(3)) {
        result = result.filter((item) => item.category === 'toddlers')
      }
      if (activeTags.includes(4)) {
        result = result.filter((item) => item.isHit || item.reviews >= 90)
      }
      if (activeTags.includes(5)) {
        result = result.filter((item) => item.stars === 5)
      }
      if (activeTags.includes(6)) {
        result = result.filter((item) => item.isNew)
      }
    }

    return result
  })

  return {
    searchQuery,
    tagsList,
    productsList,
    filteredProducts,
    setSearchQuery,
    toggleTag,
    resetFilters
  }
})
