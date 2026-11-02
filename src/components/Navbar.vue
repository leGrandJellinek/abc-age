<template>
  <nav class="header__nav" aria-label="Основная навигация">
    <div class="header__nav-container">
      <div class="header__nav-top">
        <a class="header__nav-logo" href="#" aria-label="abc-age - На главную">
          <img src="@/assets/images/logo.png" alt="Логотип abc-age" />
        </a>
        <div class="header__nav-block">
          <div class="header__nav-input-block">
            <img src="@/assets/icons/search.svg" alt="" aria-hidden="true" @click="handleSearch" />
            <input
              class="header__nav-input"
              placeholder="Поиск"
              :class="{ 'big-active': searchStatus }"
              v-model="search"
              @keydown.enter="handleSearch"
              aria-label="Поиск по сайту"
            />
          </div>
          <div class="header__nav-info">
            <img src="@/assets/icons/call-calling.svg" alt="" aria-hidden="true" />
            <div class="header__nav-telblock">
              <p class="header__nav-text">Появились вопросы?</p>
              <a class="header__nav-tel" href="tel:+3104372766" aria-label="Позвонить по номеру 310-437-2766">310-437-2766</a>
            </div>
          </div>
          <div class="header__nav-info">
            <img src="@/assets/icons/call-calling.svg" alt="" aria-hidden="true" />
            <div class="header__nav-telblock">
              <p class="header__nav-text">Появились вопросы?</p>
              <a class="header__nav-tel" href="tel:+3104372766" aria-label="Позвонить по номеру 310-437-2766">310-437-2766</a>
            </div>
          </div>
        </div>
      </div>
      <div class="header__nav-bottom">
        <ul class="header__nav-menu">
          <li v-for="item in navigationStore.menuList" :key="item.id">
            <a class="header__nav-link" :href="item.href || '#!'">{{ item.title }}</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, computed } from "vue"
import { useNavigationStore } from "@/stores"

const navigationStore = useNavigationStore()
const search = ref<string>("")

const searchStatus = computed<boolean>(() => search.value.length > 0)

function clearSearch(): void {
    search.value = ""
}

function handleSearch(): void {
    if (search.value.trim()) {
        const productsEl = document.getElementById("products")
        if (productsEl) {
            productsEl.scrollIntoView({ behavior: "smooth" })
            const inputEl = productsEl.querySelector<HTMLInputElement>(".main__products-input")
            if (inputEl) {
                inputEl.value = search.value
                inputEl.dispatchEvent(new Event("input"))
            }
        }
    }
}
</script>
