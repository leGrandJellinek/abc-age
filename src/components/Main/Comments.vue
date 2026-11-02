<template lang="pug">
section.main__comments
    h2.main__comments-title Почитайте отзывы довольных клиентов
    swiper.main__comments-slider(
        :slidesPerView="1"
        :spaceBetween="-50"
        :modules="modules"
        :loop="true"
        :navigation="{prevEl:'.main__comments-btn.prev', nextEl:'.main__comments-btn.next'}"
        )
        swiper-slide(
            v-for="item in commentsStore.usersComments"
            :key="item.id")
            Comment(
                :item="item"
            )
    .main__comments-contanier
        .main__comments-btns
            button.main__comments-btn.prev(type="button" aria-label="Предыдущий отзыв")
                i.fa-solid.fa-chevron-left.icon(aria-hidden="true")
            button.main__comments-btn.next(type="button" aria-label="Следующий отзыв")
                i.fa-solid.fa-chevron-right.icon(aria-hidden="true")
</template>

<script setup lang="ts">
import { useCommentsStore } from "@/stores"
import Comment from "@/components/Main/Comment.vue"
import { Swiper, SwiperSlide } from "swiper/vue"
import { Pagination, Navigation } from "swiper"

const commentsStore = useCommentsStore()
const modules = [Pagination, Navigation]
</script>

<style lang="sass" scoped>
.main
    &__comments
        background: #F2F6FA
        padding-bottom: 80px
        padding-top: 80px
        display: flex
        flex-direction: column
        gap: 60px
        &-slider 
            max-width: 1920px
            width: 100%
            padding: 0 16px
            box-sizing: border-box
        &-title 
            font-family: 'TTNorms', sans-serif
            font-weight: 500
            font-size: clamp(28px, 4vw, 48px)
            line-height: 125%
            text-align: center
            letter-spacing: -1px
            color: #2E363E
            padding: 0 16px
        &-btns
            display: flex
            gap: 24px
            justify-content: center
        &-btn
            width: 56px
            height: 56px
            display: flex
            align-items: center 
            justify-content: center
            background: #4475F2
            border-radius: 50%
            cursor: pointer
            border: none
            transition: background 0.2s, transform 0.1s
            &:hover
                background: #3361d8
            &:active
                transform: scale(0.95)
            i.icon 
                font-size: 18px
                color: white

:deep(.swiper-slide)
    display: flex
    justify-content: center
    align-items: center
    padding: 10px 0
</style>
