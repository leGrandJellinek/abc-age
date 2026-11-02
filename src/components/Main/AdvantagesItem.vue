<template>
  <div class="main__advantages-item">
    <h3 class="main__advantages-item__title">{{ item.title }}</h3>
    <p class="main__advantages-item__descr">{{ item.descr }}</p>
  </div>
</template>

<script setup lang="ts">
import type { AdvantageItem } from "@/types"

defineProps<{
  item: AdvantageItem
}>()
</script>

<style lang="sass" scoped>
.main__advantages-item 
    padding: 30px
    min-height: 296px
    height: 100%
    box-sizing: border-box
    border-radius: 12px
    display: flex
    flex-direction: column
    gap: 15px
    &__title
        font-family: 'TTNorms', sans-serif
        font-weight: 700
        font-size: 24px
        line-height: 140%
        color: #FFFFFF
    &__descr
        font-family: 'TTNorms', sans-serif
        font-weight: 400
        font-size: 16px
        line-height: 24px
        color: #FFFFFF
</style>
