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
              v-model="productsStore.searchQuery"
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
import { computed } from "vue"
import { useNavigationStore, useProductsStore } from "@/stores"

const navigationStore = useNavigationStore()
const productsStore = useProductsStore()

const searchStatus = computed<boolean>(() => productsStore.searchQuery.length > 0)

function handleSearch(): void {
  if (productsStore.searchQuery.trim()) {
    const productsEl = document.getElementById("products")
    if (productsEl) {
      productsEl.scrollIntoView({ behavior: "smooth" })
    }
  }
}
</script>
