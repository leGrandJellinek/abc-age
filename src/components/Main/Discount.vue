<template lang="pug">
-let discount = "<span>скидкe</span>"
-let ozon = "<span>Ozon</span>"

section.main__discount
    .main__discount-block
        .main__discount-info
            h2.main__discount-info__title Получите !{discount} на !{ozon}
            h2.main__discount-info__discount 40%
        form.main__discount-form 
            h3.main__discount-form__title  Заполните простую форму
            p.main__discount-form__descr Оставьте свой номер телефона и получите скидку на OZON и год гарантии на любую игрушку.
            input.main__discount-form__input(placeholder="Ваш номер телефона")
            button.main__discount-form__btn Получить скидку!

</template>

<script>
export default {
    
}
</script>
