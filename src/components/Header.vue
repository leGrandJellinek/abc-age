<template>
  <header class="header">
    <Navbar />
    <div class="header__content">
      <div class="header__content-container">
        <transition name="fade-slide" mode="out-in">
          <div class="header__content-left" :key="currentSlide">
            <h1 class="header__content-title">{{ currentSlideData.title }}</h1>
            <p class="header__content-text">
              {{ currentSlideData.text }}
            </p>
            <a class="header__content-btn" :href="currentSlideData.btnHref">{{ currentSlideData.btnText }}</a>
          </div>
        </transition>
        <div class="header__content-right">
          <button class="header__content-btnleft" type="button" @click="prevSlide" aria-label="Предыдущий слайд">
            <img src="@/assets/icons/arrow.svg" alt="" aria-hidden="true" />
          </button>
          <img class="header__content-img" src="@/assets/images/header/header__content-bg.png" alt="Детские деревянные развивающие игрушки" />
          <button class="header__content-btnright" type="button" @click="nextSlide" aria-label="Следующий слайд">
            <img src="@/assets/icons/arrow.svg" alt="" aria-hidden="true" />
          </button>
          <div class="header__content-dots" role="tablist" aria-label="Слайды хедера">
            <button
              v-for="(_, index) in slides"
              :key="index"
              class="header__content-dot"
              :class="{ active: currentSlide === index }"
              type="button"
              :aria-label="'Перейти к слайду ' + (index + 1)"
              @click="currentSlide = index"
            />
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, computed } from "vue"
import Navbar from "@/components/Navbar.vue"

interface HeaderSlide {
  title: string
  text: string
  btnText: string
  btnHref: string
}

const slides: HeaderSlide[] = [
  {
    title: "Лучшие игрушки для ваших детей",
    text: "Экологически чистые деревянные развивающие игрушки из натурального дерева для всестороннего развития малыша.",
    btnText: "Каталог",
    btnHref: "#products"
  },
  {
    title: "Безопасность и эко-материалы",
    text: "Каждая деталь отшлифована вручную и покрыта гипоаллергенными красками на водной основе европейского стандарта.",
    btnText: "О компании",
    btnHref: "#about"
  },
  {
    title: "Оптовые поставки и скидки 40%",
    text: "Прямые цены от производителя для детских садов, центров развития и магазинов по всей России.",
    btnText: "Получить скидку",
    btnHref: "#discount"
  }
]

const currentSlide = ref<number>(0)
const currentSlideData = computed<HeaderSlide>(() => slides[currentSlide.value])

function nextSlide(): void {
  currentSlide.value = (currentSlide.value + 1) % slides.length
}

function prevSlide(): void {
  currentSlide.value = (currentSlide.value - 1 + slides.length) % slides.length
}
</script>

<style lang="sass" scoped>
.fade-slide-enter-active,
.fade-slide-leave-active
    transition: opacity 0.25s ease, transform 0.25s ease

.fade-slide-enter-from
    opacity: 0
    transform: translateY(8px)

.fade-slide-leave-to
    opacity: 0
    transform: translateY(-8px)

.header__content-dots
    position: absolute
    bottom: -30px
    left: 50%
    transform: translateX(-50%)
    display: flex
    gap: 10px

.header__content-dot
    width: 12px
    height: 12px
    border-radius: 50%
    background: #CBD5E1
    border: none
    cursor: pointer
    padding: 0
    transition: background-color 0.2s, transform 0.2s
    &:hover
        background: #94A3B8
    &.active
        background: #4475F2
        transform: scale(1.2)
</style>
