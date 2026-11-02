<template lang="pug">
.main__products-item
    .main__products-item__top
        img.item-img(:src="$getMainImage(product.img)" :alt="product.title")
    .main__products-item__bottom
        h3.main__products-item__title {{product.title}}
        .main__products-item__rev
            .main__products-item__stars
                img(
                src="@/assets/icons/star.svg"
                v-for="star in product.stars"
                :key="star"
                alt=""
                aria-hidden="true")
            span.main__products-item__coun-rev ({{product.reviews}})
        p.main__products-item__descr {{product.descr}}
        .main__products-item__btns
            button.main__products-item__btn(type="button" :aria-label="'Купить ' + product.title + ' на OZON'") Купить на OZON
            button.main__products-item__btn(type="button" :aria-label="'Купить ' + product.title + ' на Wildberries'") Купить на WB
</template>

<script setup lang="ts">
import type { Product } from "@/types"

defineProps<{
    product: Product
}>()
</script>

<style lang="sass">
.main
    &__products
        &-block 
            display: grid
            grid-template-columns: repeat(3,1fr)
            column-gap: 30px
            row-gap: 15px
        &-item 
            border-radius: 15px
            overflow: hidden
            background: #4475F2
            border: 2px solid #5DBF79
            display: flex
            flex-direction: column
            &__stars
                display: flex
                gap: 4px
            &__rev
                display: flex
                gap: 10px
                align-items: center
            &__coun-rev 
                font-family: 'Poppins'
                font-weight: 400
                font-size: 16px
                line-height: 150%
                color: rgba(255, 255, 255, 0.4) 
            &__bottom
                padding: 25px 40px 40px 31px
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
                font-family: 'TTNorms'
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
                font-family: 'TTNorms'
                font-weight: 700
                font-size: 24px
                line-height: 150%
                color: #FFFFFF
            &__descr 
                font-family: 'TTNorms'
                font-weight: 400
                font-size: 17px
                line-height: 20px
                color: #FFFFFF
                margin-top: 15px
                margin-bottom: 30px

</style>
