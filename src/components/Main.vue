<template>
  <main class="main">
    <div class="main__container">
      <AboutCompany />
      <Products />
      <OurAdvantages />
      <Discount />
    </div>
    <Comments />
    <div class="main__container">
      <Blog />
    </div>
  </main>
</template>

<script setup lang="ts">
import AboutCompany from "@/components/Main/AboutCompany.vue"
import OurAdvantages from "@/components/Main/OurAdvantages.vue"
import Discount from "@/components/Main/Discount.vue"
import Comments from "@/components/Main/Comments.vue"
import Blog from "@/components/Main/Blog.vue"
import Products from "@/components/Main/Products.vue"
</script>
