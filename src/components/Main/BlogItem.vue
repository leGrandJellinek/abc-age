<template lang="pug">
.main__blog-item(
    :style="{background: `url(${require(`@/assets/images/main/${item.img}`)}) no-repeat center /cover`}"
) 
    .main__blog-item__block
        h2.main__blog-item__title {{item.title}}
        p.main__blog-item__descr {{item.descr}}
    a.main__blog-read(href="#!")
        .circle
        span Читать полностью
        i.fa-solid.fa-angle-right.icon 

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
    &__blog 
        &-item 
            width: 782px
            height: 484px
            display: flex
            align-items: center
            padding: 32px 50px
            &__block
                display: flex
                flex-direction: column
                gap: 25px
            &__title 
                font-family: 'TTNorms'
                font-weight: 700
                font-size: 40px
                line-height: 47px
                color: #FFFFFF
            &__descr 
                font-family: 'TTNorms'
                font-weight: 400
                font-size: 15px
                line-height: 24px
                letter-spacing: 0.02em
                color: #FFFFFF
        &-read 
            position: absolute
            bottom: 32px
            left: 50px
            display: flex
            align-items: center
            gap: 6px
            & div.circle 
                width: 20px
                height: 20px
                background: #4475F2
                border-radius: 50%
            & span 
                font-family: 'TTNorms'
                font-weight: 500
                font-size: 18px
                line-height: 21px
                color: #FFFFFF
            & i.icon 
                font-size: 13px
                color: #FFFFFF

</style>