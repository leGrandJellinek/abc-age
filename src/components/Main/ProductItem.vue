<template>
  <div class="main__products-item">
    <div class="main__products-item__top">
      <img class="item-img" :src="$getMainImage(product.img)" :alt="product.title" />
    </div>
    <div class="main__products-item__bottom">
      <h3 class="main__products-item__title">{{ product.title }}</h3>
      <div class="main__products-item__rev">
        <div class="main__products-item__stars">
          <img
            src="@/assets/icons/star.svg"
            v-for="star in product.stars"
            :key="star"
            alt=""
            aria-hidden="true"
          />
        </div>
        <span class="main__products-item__coun-rev">({{ product.reviews }})</span>
      </div>
      <p class="main__products-item__descr">{{ product.descr }}</p>
      <div class="main__products-item__btns">
        <button class="main__products-item__btn" type="button" :aria-label="'Купить ' + product.title + ' на OZON'">
          Купить на OZON
        </button>
        <button class="main__products-item__btn" type="button" :aria-label="'Купить ' + product.title + ' на Wildberries'">
          Купить на WB
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Product } from "@/types"

defineProps<{
    product: Product
}>()
</script>

<style lang="sass" scoped>
.main__products-item 
    border-radius: 15px
    overflow: hidden
    background: #4475F2
    border: 2px solid #5DBF79
    display: flex
    flex-direction: column
    height: 100%
    &__top 
        overflow: hidden
        display: flex
        align-items: center
        justify-content: center
        background: #f7f9fc
        .item-img
            width: 100%
            height: auto
            object-fit: cover
            display: block
    &__stars
        display: flex
        gap: 4px
    &__rev
        display: flex
        gap: 10px
        align-items: center
    &__coun-rev 
        font-family: 'Poppins', sans-serif
        font-weight: 400
        font-size: 16px
        line-height: 150%
        color: rgba(255, 255, 255, 0.6) 
    &__bottom
        padding: 25px 30px 30px
        display: flex
        flex-direction: column
        flex-grow: 1
    &__btns 
        display: flex
        gap: 10px
        margin-top: auto
    &__btn 
        flex: 1
        height: 50px
        background: #FFFFFF
        border-radius: 25px
        display: flex
        align-items: center 
        justify-content: center 
        font-family: 'TTNorms', sans-serif
        font-weight: 500
        font-size: 15px
        line-height: 150%
        color: #4475F2
        cursor: pointer
        border: none
        transition: opacity 0.2s, transform 0.1s
        &:hover
            opacity: 0.95
        &:active
            transform: scale(0.98)
    &__title 
        font-family: 'TTNorms', sans-serif
        font-weight: 700
        font-size: 22px
        line-height: 140%
        color: #FFFFFF
    &__descr 
        font-family: 'TTNorms', sans-serif
        font-weight: 400
        font-size: 16px
        line-height: 22px
        color: #FFFFFF
        margin-top: 12px
        margin-bottom: 24px
</style>
