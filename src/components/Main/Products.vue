<template>
  <section class="main_products" id="products">
    <div class="main__products-search">
      <SectionBlackTitle>Наши товары</SectionBlackTitle>
      <div class="input-block">
        <input
          class="main__products-input"
          v-model="productsStore.searchQuery"
          placeholder="Поиск по названию или описанию..."
          aria-label="Поиск товаров"
        />
        <i class="fa-solid fa-magnifying-glass icon" aria-hidden="true"></i>
        <button
          class="clear-search-btn"
          v-if="productsStore.searchQuery"
          type="button"
          @click="productsStore.searchQuery = ''"
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
        v-for="tag in productsStore.tagsList"
        :key="tag.id"
        :class="{ active: tag.active }"
        @click="productsStore.toggleTag(tag.id)"
        role="button"
        tabindex="0"
        @keydown.enter="productsStore.toggleTag(tag.id)"
        @keydown.space.prevent="productsStore.toggleTag(tag.id)"
      >
        {{ tag.title }}
        <button
          v-if="tag.active"
          type="button"
          @click.stop="productsStore.toggleTag(tag.id)"
          aria-label="Снять фильтр"
        >
          <i class="fa-solid fa-xmark icon" aria-hidden="true"></i>
        </button>
      </div>
    </div>
    <div class="main__products-block" v-if="productsStore.filteredProducts.length > 0">
      <ProductItem
        v-for="product in productsStore.filteredProducts"
        :key="product.id"
        :product="product"
      />
    </div>
    <div class="main__products-empty" v-else>
      <p>По вашему запросу ничего не найдено</p>
      <button class="main__products-reset" type="button" @click="productsStore.resetFilters">Сбросить фильтры</button>
    </div>
    <div class="main__products-btn"></div>
  </section>
</template>

<script setup lang="ts">
import { useProductsStore } from "@/stores"
import SectionBlackTitle from "@/components/UI/SectionBlackTitle.vue"
import ProductItem from "@/components/Main/ProductItem.vue"

const productsStore = useProductsStore()
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
