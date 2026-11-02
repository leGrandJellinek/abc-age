<template lang="pug">
.main__comments-item 
    .main__comments-item__left 
        img(src="@/assets/icons/quotes.png" alt="" aria-hidden="true")
        h3.main__comments-item__title {{item.title}}
        p.main__comments-item__descr {{item.comment}}
    .main__comments-item__right
        img.main__comments-item__avatar(:src="$getMainImage(item.img)" :alt="'Аватар ' + item.userName")
        h4.main__comments-item__name {{item.userName}}
        p.main__comments-item__city {{item.city}}
</template>

<script setup lang="ts">
import type { CommentItem } from "@/types"

defineProps<{
    item: CommentItem
}>()
</script>

<style lang="sass" scoped>
.main__comments-item 
    background: white
    max-width: 1180px
    width: 100%
    padding: clamp(24px, 4vw, 55px) clamp(20px, 6vw, 113px)
    display: flex
    gap: clamp(24px, 4vw, 54px)
    border: 2px solid #E2EAF2
    box-shadow: 2px 8px 16px rgba(194, 198, 208, 0.06)
    border-radius: 12px
    box-sizing: border-box
    @media (max-width: 767px)
        flex-direction: column-reverse
        align-items: center
        text-align: center
    &__left 
        display: flex
        flex-direction: column
        gap: 20px
        align-items: flex-start
        flex: 1
        @media (max-width: 767px)
            align-items: center
    &__title 
        font-family: 'TTNorms', sans-serif
        font-weight: 500
        font-size: clamp(20px, 2.5vw, 30px)
        line-height: 140%
        color: #2E363E
    &__descr 
        font-family: 'TTNorms', sans-serif
        font-weight: 400
        font-size: 16px
        line-height: 24px
        letter-spacing: 0.02em
        color: #728095
    &__right
        display: flex
        flex-direction: column
        align-items: center
        flex-shrink: 0
    &__avatar
        width: 100px
        height: 100px
        border-radius: 50%
        object-fit: cover
    &__name 
        margin-top: 20px
        margin-bottom: 6px
        font-family: 'TTNorms', sans-serif
        font-weight: 500
        font-size: 20px
        line-height: 140%
        text-align: center
        color: #2E363E
    &__city 
        font-family: 'TTNorms', sans-serif
        font-weight: 400
        font-size: 15px
        line-height: 160%
        text-align: center
        color: #A6AEB6
</style>
