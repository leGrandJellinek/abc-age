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
            v-for="item in getUsersComments"
            :key="item.id")
            Comment(
                :item="item"
            )
    .main__comments-contanier
        .main__comments-btns
            button.main__comments-btn.prev
                i.fa-solid.fa-chevron-left.icon
            button.main__comments-btn.next
                i.fa-solid.fa-chevron-right.icon
</template>

<script>
import {mapGetters} from "vuex"

import Comment from "@/components/Main/Comment.vue"

import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Navigation } from "swiper";
export default {
    computed:{
        ...mapGetters(["getUsersComments"])
    },
    components:{
        Comment,
        Swiper, 
        SwiperSlide
    },
    setup() {
        return {
        modules: [Pagination, Navigation],
        };
    }
}
</script>

<style lang="sass">
.main
    &__comments
        background: #F2F6FA
        padding-bottom: 100px
        padding-top: 100px
        display: flex
        flex-direction: column
        gap: 80px
        &-slider 
            max-width: 1920px
            width: 100%
        &-title 
            font-family: 'TTNorms'
            font-weight: 500
            font-size: 48px
            line-height: 60px
            text-align: center
            letter-spacing: -1px
            color: #2E363E
        &-btns
            display: flex
            gap: 24px
            justify-content: center
        &-btn
            width: 66px
            height: 66px
            display: flex
            align-items: center 
            justify-content: center
            background: #4475F2
            border-radius: 100px
            cursor: pointer
            i.icon 
                font-size: 20px
                color: white
.swiper-slide 
    display: -webkit-box
    display: -ms-flexbox
    display: -webkit-flex
    display: flex
    -webkit-box-pack: center
    -ms-flex-pack: center
    -webkit-justify-content: center
    justify-content: center
    -webkit-box-align: center
    -ms-flex-align: center
    -webkit-align-items: center
    align-items: center
</style>