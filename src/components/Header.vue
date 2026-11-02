<template>
  <header class="header">
    <Navbar />
    <div class="header__content">
      <div class="header__content-container">
        <div class="header__content-left">
          <h1 class="header__content-title">Лучшие игрушки для ваших детей</h1>
          <p class="header__content-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <a class="header__content-btn" href="#products">Каталог</a>
        </div>
        <div class="header__content-right">
          <button class="header__content-btnleft" type="button" aria-label="Предыдущий слайд">
            <img src="@/assets/icons/arrow.svg" alt="" aria-hidden="true" />
          </button>
          <img class="header__content-img" src="@/assets/images/header/header__content-bg.png" alt="Детские деревянные развивающие игрушки" />
          <button class="header__content-btnright" type="button" aria-label="Следующий слайд">
            <img src="@/assets/icons/arrow.svg" alt="" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import Navbar from "@/components/Navbar.vue"
</script>
