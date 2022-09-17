<template lang="pug">
header.header
    Navbar
    .header__content
        .header__content-container
            .header__content-left
                h1.header__content-title Лучшие игрушки для ваших детей
                p.header__content-text Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                button.header__content-btn 
                    a(href="#!") Каталог
            .header__content-right
                button.header__content-btnleft
                    img(src="@/assets/icons/arrow.svg")
                img.header__content-img(src="@/assets/images/header/header__content-bg.png")
                button.header__content-btnright
                    img(src="@/assets/icons/arrow.svg")
</template>

<script>
import Navbar from "@/components/Navbar.vue"
export default {
    components: {
        Navbar
    }
}
</script>