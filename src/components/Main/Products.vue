<template>
  <section class="main_products" id="products">
    <div class="main__products-search">
      <section-title>Наши товары</section-title>
      <div class="input-block">
        <input
          class="main__products-input"
          v-model="searchQuery"
          placeholder="Поиск по названию или описанию..."
          aria-label="Поиск товаров"
        />
        <i class="fa-solid fa-magnifying-glass icon" aria-hidden="true"></i>
        <button
          class="clear-search-btn"
          v-if="searchQuery"
          type="button"
          @click="searchQuery = ''"
          aria-label="Очистить поиск"
        >
          <i class="fa-solid fa-xmark" aria-hidden="true"></i>
        </button>
      </div>
    </div>
    <h2 class="main__products-title">Популярные теги:</h2>
    <div class="main__products-tags">
      <div
        class="main__products-tag"
        v-for="tag in tagsList"
        :key="tag.id"
        :class="{ active: tag.active }"
        @click="toggleTag(tag)"
        role="button"
        tabindex="0"
        @keydown.enter="toggleTag(tag)"
        @keydown.space.prevent="toggleTag(tag)"
      >
        {{ tag.title }}
        <button
          v-if="tag.active"
          type="button"
          @click.stop="tag.active = false"
          aria-label="Снять фильтр"
        >
          <i class="fa-solid fa-xmark icon" aria-hidden="true"></i>
        </button>
      </div>
    </div>
    <div class="main__products-block" v-if="filteredProducts.length > 0">
      <ProductItem
        v-for="product in filteredProducts"
        :key="product.id"
        :product="product"
      />
    </div>
    <div class="main__products-empty" v-else>
      <p>По вашему запросу ничего не найдено</p>
      <button class="main__products-reset" type="button" @click="resetFilters">Сбросить фильтры</button>
    </div>
    <div class="main__products-btn"></div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from "vue"
import { useProductsStore } from "@/stores"
import type { TagItem } from "@/types"
import ProductItem from "@/components/Main/ProductItem.vue"

const productsStore = useProductsStore()
const searchQuery = ref<string>("")

const tagsList = ref<TagItem[]>([
    {
        id: 1,
        title: "Игрушки оптом и в розницу",
        active: false,
    },
    {
        id: 2,
        title: "Оптовый магазин",
        active: false,
    },
    {
        id: 3,
        title: "Для малышей",
        active: false,
    }, 
    {
        id: 4,
        title: "Хиты продаж",
        active: false,
    }, 
    {
        id: 5,
        title: "Высокий рейтинг 5★",
        active: false,
    }, 
    {
        id: 6,
        title: "Новинки",
        active: false,
    }, 
])

function toggleTag(tag: TagItem): void {
    tag.active = !tag.active
}

function resetFilters(): void {
    searchQuery.value = ""
    tagsList.value.forEach(tag => {
        tag.active = false
    })
}

const filteredProducts = computed(() => {
    let result = productsStore.productsList
    
    const query = searchQuery.value.trim().toLowerCase()
    if (query) {
        result = result.filter(item => 
            item.title.toLowerCase().includes(query) || 
            item.descr.toLowerCase().includes(query)
        )
    }

    const activeTags = tagsList.value.filter(t => t.active).map(t => t.id)
    if (activeTags.length > 0) {
        if (activeTags.includes(5)) {
            result = result.filter(item => item.stars === 5)
        }
        if (activeTags.includes(4)) {
            result = result.filter(item => item.reviews >= 100)
        }
        if (activeTags.includes(3)) {
            result = result.filter(item => item.id % 2 === 1)
        }
    }

    return result
})
</script>

<style lang="sass" scoped>
.main
    &__products 
        &-search 
            display: flex
            gap: 20px
            align-items: center
            flex-wrap: wrap
            & div.input-block 
                position: relative
                display: flex
                align-items: center
                & i.icon 
                    position: absolute
                    left: 20px
                    font-size: 16px
                    color: #9A9EA6
                & .clear-search-btn
                    position: absolute
                    right: 16px
                    background: none
                    border: none
                    color: #9A9EA6
                    cursor: pointer
                    font-size: 14px
                    &:hover
                        color: #1B1717
        &-title 
            font-family: 'TTNorms', sans-serif
            font-weight: 500
            font-size: 20px
            line-height: 24px
            letter-spacing: 0.07em
            color: #000000
            margin-top: 20px
            margin-bottom: 20px
        &-input 
            background: #F0F1F2
            border-radius: 30px
            padding: 17px 44px
            width: 100%
            max-width: 348px
            border: 1px solid transparent
            font-family: 'TTNorms', sans-serif
            font-weight: 400
            font-size: 14px
            line-height: 16px
            outline: none
            transition: border-color 0.2s, box-shadow 0.2s
            &:focus
                border-color: #4475F2
                box-shadow: 0 0 0 3px rgba(68, 117, 242, 0.15)
        &-tags 
            display: flex
            gap: 10px
            flex-wrap: wrap
            margin-bottom: 40px
        &-tag 
            padding: 10px 24px
            background: #6991F5
            border-radius: 10px
            cursor: pointer
            font-family: 'TTNorms', sans-serif
            font-weight: 400
            font-size: 16px
            line-height: 19px
            letter-spacing: 0.07em
            color: #FFFFFF
            display: flex
            gap: 8px
            align-items: center
            user-select: none
            transition: background 0.2s, transform 0.1s
            &:hover
                background: #507be8
            &:active
                transform: scale(0.98)
            &.active 
                background: #F05656
            & button 
                background: none
                border: none
                cursor: pointer
                padding: 0
                display: flex
                align-items: center
                i.icon 
                    font-size: 14px
                    color: #FFFFFF
        &-block 
            display: grid
            grid-template-columns: repeat(3, 1fr)
            column-gap: 30px
            row-gap: 30px
            @media (max-width: 1199px)
                grid-template-columns: repeat(2, 1fr)
            @media (max-width: 767px)
                grid-template-columns: 1fr
        &-empty
            padding: 60px 20px
            text-align: center
            background: #F8FAFC
            border-radius: 12px
            p
                font-family: 'TTNorms', sans-serif
                font-size: 20px
                color: #728095
                margin-bottom: 16px
        &-reset
            background: #4475F2
            color: #ffffff
            border: none
            padding: 12px 24px
            border-radius: 20px
            font-family: 'TTNorms', sans-serif
            font-size: 14px
            cursor: pointer
            transition: background 0.2s
            &:hover
                background: #3361d8
</style>
