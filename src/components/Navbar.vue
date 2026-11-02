<template lang="pug">
nav.header__nav
    .header__nav-container
        .header__nav-top
            a.header__nav-logo(href="#!")
                img(src="@/assets/images/logo.png" alt="")
            .header__nav-block
                .header__nav-input-block
                    img(src="@/assets/icons/search.svg" @click="clearSearch")
                    input.header__nav-input(
                    placeholder="Поиск" 
                    :class="{'big-active': searchStatus}" 
                    v-model="search"
                    @keydown.enter="clearSearch")
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
                li(v-for="item in navigationStore.menuList" :key="item.id")
                    a.header__nav-link(href="#!") {{item.title}}
</template>

<script setup>
import { ref, computed } from "vue"
import { useNavigationStore } from "@/stores"

const navigationStore = useNavigationStore()
const search = ref("")

const searchStatus = computed(() => search.value.length > 0)

function clearSearch() {
    search.value = ""
}
</script>
