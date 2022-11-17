<template lang="pug">
.main__comments-item 
    .main__comments-item__left 
        img(src="@/assets/icons/quotes.png")
        h2.main__comments-item__title {{item.title}}
        p.main__comments-item__descr {{item.comment}}
    .main__comments-item__right
        img(:src="require(`@/assets/images/main/${item.img}`)")
        h3.main__comments-item__name {{item.userName}}
        p.main__comments-item__city {{item.city}}
</template>

<script>
export default {
    props: {
        item: {
            require:true,
            type: Object
        }
    }
}
</script>

<style lang="sass">
.main 
    &__comments 
        &-item 
            background: white
            max-width: 934px
            padding: 55px 113px
            display: flex
            gap: 54px
            border: 2px solid #E2EAF2
            box-shadow: 2px 8px 16px rgba(194, 198, 208, 0.06)
            border-radius: 5px
            &__left 
                display: flex
                flex-direction: column
                gap: 30px
                align-items: flex-start
            &__title 
                font-family: 'TTNorms'
                font-weight: 500
                font-size: 30px
                line-height: 143%
                color: #2E363E
</style>