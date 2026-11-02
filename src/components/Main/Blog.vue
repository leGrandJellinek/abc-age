<template lang="pug">
section.main__blog#blog
    section-title.main__blog-title блог
    p.main__blog-descr Massa commodo leo amet in feugiat non, commodo. Augue senectus felis, suspendisse amet suscipit vestibulum lobortis ornare sed. Pharetra, in duis tortor, iaculis mi magna urna nullam. 
    swiper.main__blog-block(
        :slidesPerView="'auto'"
        :spaceBetween="25"
    )
        swiper-slide(
            v-for="item in blogStore.blogList"
            :key="item.id"
        )
            BlogItem(
                :item="item"
            )
</template>

<script setup lang="ts">
import { useBlogStore } from "@/stores"
import BlogItem from "@/components/Main/BlogItem.vue"
import { Swiper, SwiperSlide } from "swiper/vue"

const blogStore = useBlogStore()
</script>

<style lang="sass" scoped>
.main
    &__blog 
        padding-top: 10px
        &-descr 
            font-family: 'TTNorms'
            font-weight: 400
            font-size: 20px
            line-height: 24px
            letter-spacing: 0.02em
            color: #728095
            max-width: 745px
            width: 100%
            margin-top: 20px
            margin-bottom: 31px
.swiper-slide 
    max-width: 782px
    width: 100%
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
