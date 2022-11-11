<template lang="pug">
section.main__about
    .main__about-left
        section-title о компании
        p.main__about-text
            span Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            span Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
        .main__about-block
            .main__about-item
                .main__about-number.pink 6+
                p.main__about-descr лет работы
            .main__about-item
                .main__about-number.green 6+
                p.main__about-descr лет работы
            .main__about-item
                .main__about-number.blue 500+
                p.main__about-descr Довольных клиентов
    .main__about-right
        img(src="@/assets/images/main/AboutCompanyBG.png")
</template>

<script>
export default {

}
</script>