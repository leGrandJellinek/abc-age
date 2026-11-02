<template>
  <h2 class="black-title">
    <slot />
  </h2>
</template>

<script setup lang="ts">
defineOptions({
  name: "section-title"
})
</script>

<style lang="sass" scoped>
.black-title 
    font-family: 'TTNorms'
    font-weight: 900
    font-size: 45px
    line-height: 53px
    letter-spacing: 0.07em
    text-transform: uppercase
    color: #1B1717
</style>
