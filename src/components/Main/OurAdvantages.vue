<template lang="pug">
section.main__advantages
        section-title Наши преимущества
        .main__advantages-block 
            AdvantagesItem(
            v-for="item in advantagesList"
            :key="item.id"
            :item="item"
            :style="{background: item.color}"
            )
</template>

<script>

import AdvantagesItem from "@/components/Main/AdvantagesItem.vue"

export default {
    data(){
        return {
            advantagesList: [
                {
                    id: 1,
                    title: "Преимущество",
                    descr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
                    color: "#6991F5"
                },
                {
                    id: 2,
                    title: "преимущество",
                    descr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
                    color: "#EE379D"
                },
                {
                    id: 3,
                    title: "преимущество",
                    descr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
                    color: "#55C18F"
                }
            ]
        }
    },
    components: {
        AdvantagesItem
    },
}
</script>