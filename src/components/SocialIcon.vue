<script setup lang="ts">
import type { SocialLink } from '@/content/portfolio'

defineProps<{ icon: SocialLink['icon'] }>()
</script>

<template>
  <svg
    v-if="icon === 'telegram'"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21.7 3.2L2.9 10.5c-1.3.5-1.3 1.3-.2 1.7l4.8 1.5 1.8 5.5c.2.6.1.9.8.9.5 0 .7-.2 1-.5l2.3-2.2 4.8 3.6c.9.5 1.5.2 1.7-.8L23.2 4.7c.3-1.2-.5-1.7-1.5-1.5z"
      fill="currentColor"
      opacity="0.92"
    />
    <path
      d="M9.1 13.3l10.9-6.8c.5-.3 1-.1.6.2l-9 8.1-.3 3.1c.4 0 .6-.2.9-.5l2.2-2.1"
      fill="currentColor"
      opacity="0.55"
    />
  </svg>

  <svg
    v-else-if="icon === 'vk'"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3.6 7.4c.1 6.6 3.6 10.9 9.4 10.9h.4v-3.8c2.2.2 3.9 1.9 4.6 3.8H21c-.9-3-2.8-4.8-4-5.5 1.2-.9 2.9-3 3.3-5.4h-2.8c-.5 2-1.9 4.2-3.1 4.4V7.4h-2.7v7.7c-1.2-.3-2.8-2.6-2.9-7.7H3.6z"
      fill="currentColor"
      opacity="0.9"
    />
  </svg>

  <svg
    v-else-if="icon === 'github'"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 2c-5.5 0-10 4.7-10 10.4 0 4.5 2.9 8.3 6.9 9.7.5.1.7-.2.7-.5v-2c-2.8.6-3.4-1.2-3.4-1.2-.4-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.6 1.1 1.6 1.1.9 1.6 2.3 1.1 2.9.8.1-.7.3-1.1.6-1.4-2.2-.3-4.6-1.2-4.6-5.2 0-1.1.4-2 .9-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.7 1 .8-.2 1.7-.3 2.6-.3.9 0 1.8.1 2.6.3 1.9-1.3 2.7-1 2.7-1 .5 1.4.2 2.4.1 2.7.6.7.9 1.6.9 2.7 0 4-2.4 4.9-4.7 5.2.3.3.7.9.7 1.9v2.8c0 .3.2.6.7.5 4-1.4 6.9-5.2 6.9-9.7C22 6.7 17.5 2 12 2z"
      fill="currentColor"
      opacity="0.92"
    />
  </svg>

  <svg
    v-else
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2z"
      stroke="currentColor"
      stroke-width="1.6"
      opacity="0.9"
    />
    <path
      d="M4 7l8 6 8-6"
      stroke="currentColor"
      stroke-width="1.6"
      stroke-linecap="round"
      stroke-linejoin="round"
      opacity="0.75"
    />
  </svg>
</template>
