<template lang="pug">
nav.header__nav
    .header__nav-container
        .header__nav-top
            a.header__nav-logo(href="#!")
                img(src="@/assets/images/logo.png" alt="")
            .header__nav-block
                .header__nav-input-block
                    img(src="@/assets/icons/search.svg")
                    input.header__nav-input(placeholder="Поиск")
                .header__nav-info
                    img(src="@/assets/icons/call-calling.svg")
                    .header__nav-telblock
                        p.header__nav-text Появились вопросы?
                        a.header__nav-tel(href="tel:+3104372766") 310-437-2766
                .header__nav-info
                    img(src="@/assets/icons/call-calling.svg")
                    .header__nav-telblock
                        p.header__nav-text Появились вопросы?
                        a.header__nav-tel(href="tel:+3104372766") 310-437-2766
        .header__nav-bottom
            ul.header__nav-menu
                li(v-for="item in getMenuList" :key="item.id")
                    a.header__nav-link {{item.title}}
</template>

<script>

import {mapGetters} from "vuex"

export default {
    computed:{
        ...mapGetters(["getMenuList"])
    }
}
</script>