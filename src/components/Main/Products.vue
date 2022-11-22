<template lang="pug">
section.main_products
    .main__products-search
        section-title Наши товары
        div.input-block 
            input.main__products-input(placeholder="Поиск")
            i.fa-solid.fa-magnifying-glass.icon
    h2.main__products-title Популярные теги:
    .main__products-tags
        .main__products-tag(
        v-for="tag in tagsList"
        :key="tag.id"
        :class="{active: tag.active}"
        @click="tag.active = !tag.active"
        ) {{tag.title}}
            button(
                v-if="tag.active"
                @click="tag.active = false")
                i.fa-solid.fa-xmark.icon
    .main__products-block 
        ProductItem(
            v-for="product in getProductList"
            :key="product.id"
            :product="product"
        )
    .main__products-btn 
</template>

<script>

import ProductItem from "@/components/Main/ProductItem.vue"
import { mapGetters } from "vuex";
export default {
    data(){
        return {
            tagsList: [
                {
                    id:1,
                    title: "Игрушки оптом и в розницу",
                    active: false,
                    
                },
                {
                    id:2,
                    title: "Оптовый магазин игрушек",
                    active: false,
                    
                },
                {
                    id:3,
                    title: "Игрушки",
                    active: false,
                    
                }, 
                {
                    id:4,
                    title: "Оптовый магазин игрушек",
                    active: false,
                    
                }, 
                {
                    id:5,
                    title: "Игрушки",
                    active: true,
                    
                }, 
                {
                    id:6,
                    title: "Оптовый магазин игрушек",
                    active: false,
                }, 
            ]
        }
    },
    components: {
        ProductItem
    },
    computed: {
        ...mapGetters(["getProductList"])
    }
}
</script>

<style lang="sass">
.main
    &__products 
        &-search 
            display: flex
            gap: 20px
            & div.input-block 
                position: relative
                & i.icon 
                    position: absolute
                    left: 27px
                    top: 17px
                    font-size: 16px
                    color: #9A9EA6
        &-title 
            font-family: 'TTNorms'
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
            padding: 17px 48px
            width: 348px
            font-family: 'TTNorms'
            font-weight: 400
            font-size: 12px
            line-height: 14px
        &-tags 
            display: flex
            gap: 10px
            flex-wrap: wrap
            margin-bottom: 40px
        &-tag 
            padding: 10px 41px
            background: #6991F5
            border-radius: 10px
            cursor: pointer
            font-family: 'TTNorms'
            font-weight: 400
            font-size: 16px
            line-height: 19px
            letter-spacing: 0.07em
            color: #FFFFFF
            display: flex
            gap: 8px
            align-items: center
            &.active 
                background: #F05656
            & button 
                & i.icon 
                font-size: 18px
                color: #FFFFFF
                z-index: 999
</style>