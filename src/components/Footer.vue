<template>
  <footer class="footer" role="contentinfo">
    <div class="footer__container">
      <div class="footer__block">
        <div class="footer__block-icons">
          <a
            class="footer__block-icon"
            v-for="icon in footerStore.footerIcons"
            :key="icon.id"
            :href="icon.href || '#!'"
            :aria-label="icon.name || 'Социальная сеть'"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img :src="$getIcon(icon.icon)" alt="" aria-hidden="true" />
          </a>
        </div>
        <div class="footer__block-info">
          <div class="footer__block-item" v-for="item in footerStore.footerInfo" :key="item.id">
            <button class="footer__block-btn" type="button" :aria-label="item.title">
              <img :src="$getIcon(item.icon)" alt="" aria-hidden="true" />
            </button>
            <div class="footer__block-div">
              <p class="footer__block-title">{{ item.title }}</p>
              <a
                class="footer__block-text"
                :href="item.title === 'Почта' ? `mailto:${item.info}` : item.title.includes('Телефон') ? `tel:${item.info}` : '#!'"
              >
                {{ item.info }}
              </a>
            </div>
          </div>
        </div>
        <div class="footer__block-bottom">
          <ul class="footer__block-menu">
            <li v-for="link in navigationStore.menuList" :key="link.id">
              <a class="footer__block-link" :href="link.href || '#!'">{{ link.title }}</a>
            </li>
          </ul>
          <p class="footer__block-copyright">© 2000-2022, Все права защищены</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { useFooterStore, useNavigationStore } from "@/stores"

const footerStore = useFooterStore()
const navigationStore = useNavigationStore()
</script>
