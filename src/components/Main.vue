<template lang="pug">
main.main
    .main__container
        AboutCompany
        OurAdvantages
        Discount
</template>

<script>
import AboutCompany from "@/components/Main/AboutCompany.vue"
import OurAdvantages from "@/components/Main/OurAdvantages.vue"
import Discount from "@/components/Main/Discount.vue"

export default {
    components: {
        AboutCompany,
        OurAdvantages,
        Discount
    }
}
</script>