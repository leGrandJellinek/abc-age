<template lang="pug">
main.main
    .main__container
        AboutCompany
        Products
        OurAdvantages
        Discount
    Comments
    .main__container
        Blog
</template>

<script setup lang="ts">
import AboutCompany from "@/components/Main/AboutCompany.vue"
import OurAdvantages from "@/components/Main/OurAdvantages.vue"
import Discount from "@/components/Main/Discount.vue"
import Comments from "@/components/Main/Comments.vue"
import Blog from "@/components/Main/Blog.vue"
import Products from "@/components/Main/Products.vue"
</script>
