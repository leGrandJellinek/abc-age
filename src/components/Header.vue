<template lang="pug">
header.header
    Navbar
    .header__content
        .header__content-container
            .header__content-left
                h1.header__content-title Лучшие игрушки для ваших детей
                p.header__content-text Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                a.header__content-btn(href="#products") Каталог
            .header__content-right
                button.header__content-btnleft(type="button" aria-label="Предыдущий слайд")
                    img(src="@/assets/icons/arrow.svg" alt="" aria-hidden="true")
                img.header__content-img(src="@/assets/images/header/header__content-bg.png" alt="Детские деревянные развивающие игрушки")
                button.header__content-btnright(type="button" aria-label="Следующий слайд")
                    img(src="@/assets/icons/arrow.svg" alt="" aria-hidden="true")
</template>

<script setup lang="ts">
import Navbar from "@/components/Navbar.vue"
</script>
