<template>
  <div
    class="main__blog-item"
    :style="{ background: `url(${$getMainImage(item.img)}) no-repeat center /cover` }"
  >
    <div class="main__blog-item__block">
      <h3 class="main__blog-item__title">{{ item.title }}</h3>
      <p class="main__blog-item__descr">{{ item.descr }}</p>
    </div>
    <a class="main__blog-read" href="#blog" :aria-label="'Читать полностью: ' + item.title">
      <div class="circle" aria-hidden="true"></div>
      <span>Читать полностью</span>
      <i class="fa-solid fa-angle-right icon" aria-hidden="true"></i>
    </a>
  </div>
</template>

<script setup lang="ts">
import type { BlogPost } from "@/types"

defineProps<{
    item: BlogPost
}>()
</script>

<style lang="sass" scoped>
.main__blog 
    &-item 
        max-width: 782px
        width: 100%
        min-height: 420px
        display: flex
        align-items: center
        padding: clamp(24px, 4vw, 36px) clamp(24px, 5vw, 50px)
        position: relative
        border-radius: 16px
        overflow: hidden
        box-sizing: border-box
        &__block
            display: flex
            flex-direction: column
            gap: 20px
            max-width: 90%
            padding-bottom: 40px
        &__title 
            font-family: 'TTNorms', sans-serif
            font-weight: 700
            font-size: clamp(24px, 3.5vw, 40px)
            line-height: 120%
            color: #FFFFFF
        &__descr 
            font-family: 'TTNorms', sans-serif
            font-weight: 400
            font-size: 15px
            line-height: 24px
            letter-spacing: 0.02em
            color: #FFFFFF
            display: -webkit-box
            -webkit-line-clamp: 4
            -webkit-box-orient: vertical
            overflow: hidden
    &-read 
        position: absolute
        bottom: 24px
        left: clamp(24px, 5vw, 50px)
        display: flex
        align-items: center
        gap: 8px
        text-decoration: none
        transition: opacity 0.2s
        &:hover
            opacity: 0.9
        & div.circle 
            width: 20px
            height: 20px
            background: #4475F2
            border-radius: 50%
        & span 
            font-family: 'TTNorms', sans-serif
            font-weight: 500
            font-size: 17px
            line-height: 21px
            color: #FFFFFF
        & i.icon 
            font-size: 13px
            color: #FFFFFF
</style>
