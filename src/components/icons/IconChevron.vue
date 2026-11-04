<template>
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2.5"
    stroke-linecap="round"
    stroke-linejoin="round"
    :style="direction === 'right' ? 'transform: rotate(180deg)' : ''"
    aria-hidden="true"
  >
    <polyline points="15 18 9 12 15 6" />
  </svg>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    direction?: 'left' | 'right'
  }>(),
  {
    direction: 'left'
  }
)
</script>
