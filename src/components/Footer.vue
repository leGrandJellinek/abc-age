<template lang="pug">
footer.footer
    .footer__container
        .footer__block
            .footer__block-icons
                a.footer__block-icon(href="#!" v-for="icon in getFooterIcons" :key="icon.id")
                    img(:src="require(`@/assets/icons/${icon.icon}`)")
            .footer__block-info
                .footer__block-item(v-for="item in getFooterInfo" :key="item.id")
                    button.footer__block-btn
                        img(:src="require(`@/assets/icons/${item.icon}`)")
                    .footer__block-div
                        p.footer__block-title {{item.title}}
                        a.footer__block-text(href="#!") {{item.info}}
            .footer__block-bottom
                ul.footer__block-menu
                    li(v-for="link in getMenuList" :key="link.id")
                        a.footer__block-link(href="#!") {{link.title}}
                p.footer__block-copyright © 2000-2022, Все права защищены
</template>

<script>

import {mapGetters} from "vuex"

export default {
    computed:{
        ...mapGetters(["getFooterIcons", "getFooterInfo", "getMenuList"])
    }
}
</script>