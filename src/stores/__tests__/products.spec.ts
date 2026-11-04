import { describe, it, expect, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useProductsStore } from '../products'

describe('useProductsStore', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('initializes with 9 products and default tags', () => {
    const store = useProductsStore()
    expect(store.productsList.length).toBe(9)
    expect(store.tagsList.length).toBe(6)
    expect(store.searchQuery).toBe('')
    expect(store.filteredProducts.length).toBe(9)
  })

  it('filters products by search query matching title or description', () => {
    const store = useProductsStore()
    store.setSearchQuery('игрушки 1')
    expect(store.filteredProducts.length).toBe(1)
    expect(store.filteredProducts[0].title).toBe('Наименование игрушки 1')

    store.setSearchQuery('Sed ut perspiciatis')
    expect(store.filteredProducts.length).toBe(9)

    store.setSearchQuery('несуществующий товар 999')
    expect(store.filteredProducts.length).toBe(0)
  })

  it('filters products by tags correctly', () => {
    const store = useProductsStore()

    // Tag 5: Высокий рейтинг 5★
    store.toggleTag(5)
    expect(store.filteredProducts.every((p) => p.stars === 5)).toBe(true)

    // Tag 3: Для малышей
    store.toggleTag(3)
    expect(
      store.filteredProducts.every(
        (p) => p.stars === 5 && p.category === 'toddlers'
      )
    ).toBe(true)
  })

  it('resets search query and active tags on resetFilters()', () => {
    const store = useProductsStore()
    store.setSearchQuery('тест')
    store.toggleTag(1)
    store.toggleTag(4)

    expect(store.searchQuery).toBe('тест')
    expect(store.tagsList.some((t) => t.active)).toBe(true)

    store.resetFilters()

    expect(store.searchQuery).toBe('')
    expect(store.tagsList.every((t) => !t.active)).toBe(true)
    expect(store.filteredProducts.length).toBe(9)
  })
})
