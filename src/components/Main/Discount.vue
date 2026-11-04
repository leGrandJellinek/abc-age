<template>
  <section class="main__discount" id="discount">
    <div class="main__discount-block">
      <div class="main__discount-info">
        <h2 class="main__discount-info__title">Получите <span>скидку</span> на <span>Ozon</span></h2>
        <h2 class="main__discount-info__discount">40%</h2>
      </div>
      <form class="main__discount-form" v-if="!isSubmitted" @submit.prevent="handleSubmit">
        <h3 class="main__discount-form__title">Заполните простую форму</h3>
        <p class="main__discount-form__descr">
          Оставьте свой номер телефона и получите скидку на OZON и год гарантии на любую игрушку.
        </p>
        <div class="main__discount-form__field">
          <input
            class="main__discount-form__input"
            v-model="phone"
            type="tel"
            placeholder="+7 (___) ___-__-__"
            @input="formatPhone"
            required
            aria-label="Ваш номер телефона"
          />
          <p class="main__discount-form__error" v-if="errorMessage">{{ errorMessage }}</p>
        </div>
        <button class="main__discount-form__btn" type="submit">Получить скидку!</button>
      </form>
      <div class="main__discount-form main__discount-form--success" v-else>
        <IconCheckCircle class="main__discount-success__icon" />
        <h3 class="main__discount-form__title">Спасибо за заявку!</h3>
        <p class="main__discount-form__descr">Мы отправили промокод на скидку 40% в SMS на номер {{ phone }}.</p>
        <button class="main__discount-form__btn" type="button" @click="resetForm">Отправить ещё раз</button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue"
import IconCheckCircle from "@/components/icons/IconCheckCircle.vue"

const phone = ref<string>("")
const isSubmitted = ref<boolean>(false)
const errorMessage = ref<string>("")

function formatPhone(e: Event): void {
    const input = e.target as HTMLInputElement
    let val = input.value.replace(/\D/g, "")
    if (!val) {
        phone.value = ""
        errorMessage.value = ""
        return
    }
    if (val.startsWith("7") || val.startsWith("8")) {
        val = val.substring(1)
    }
    let formatted = "+7 (" + val.substring(0, 3)
    if (val.length >= 3) {
        formatted += ") " + val.substring(3, 6)
    }
    if (val.length >= 6) {
        formatted += "-" + val.substring(6, 8)
    }
    if (val.length >= 8) {
        formatted += "-" + val.substring(8, 10)
    }
    phone.value = formatted
    errorMessage.value = ""
}

function handleSubmit(): void {
    const digitsOnly = phone.value.replace(/\D/g, "")
    if (digitsOnly.length < 11) {
        errorMessage.value = "Пожалуйста, введите корректный номер телефона"
        return
    }
    isSubmitted.value = true
}

function resetForm(): void {
    phone.value = ""
    isSubmitted.value = false
    errorMessage.value = ""
}
</script>

<style lang="sass" scoped>
.main__discount
    &-form
        &__field
            display: flex
            flex-direction: column
            gap: 6px
            width: 100%
        &__error
            font-size: 13px
            color: #ff4757
            font-family: 'TTNorms', sans-serif
        &--success
            display: flex
            flex-direction: column
            align-items: center
            text-align: center
            gap: 16px
    &-success__icon
        width: 48px
        height: 48px
        color: #2ed573
</style>
