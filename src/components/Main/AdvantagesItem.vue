<template lang="pug">
.main__advantages-item 
    h2.main__advantages-item__title {{item.title}}
    p.main__advantages-item__descr {{item.descr}}
</template>

<script setup lang="ts">
import type { AdvantageItem } from "@/types"

defineProps<{
    item: AdvantageItem
}>()
</script>

<style lang="sass">
.main
    &__advantages
        &-item 
            padding: 30px
            height: 296px
</style>
