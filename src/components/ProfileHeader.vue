<script setup lang="ts">
import { computed } from 'vue'

import { portfolio } from '@/content/portfolio'
import SocialIcon from '@/components/SocialIcon.vue'
import { useOnlineStatus } from '@/lib/useOnlineStatus'

const { isOnline } = useOnlineStatus()

const initials = computed(() => {
  const parts = portfolio.profile.displayName.trim().split(/\s+/)
  return parts
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase())
    .join('')
})
</script>

<template>
  <header class="top">
    <div class="avatar" aria-hidden="true">{{ initials }}</div>

    <h1 class="h1">{{ portfolio.profile.displayName }}</h1>

    <div class="sub">
      <span>{{ portfolio.profile.role }}</span>
      <span>·</span>
      <span>{{ portfolio.profile.location }}</span>
    </div>

    <div class="pill">{{ isOnline ? 'Online' : 'Offline' }}</div>

    <nav class="socials" aria-label="social links">
      <a
        v-for="link in portfolio.socials"
        :key="link.label"
        class="iconbtn"
        :href="link.href"
        target="_blank"
        rel="noopener noreferrer"
        :aria-label="link.label"
        :title="link.label"
      >
        <SocialIcon :icon="link.icon" />
      </a>
    </nav>
  </header>
</template>
