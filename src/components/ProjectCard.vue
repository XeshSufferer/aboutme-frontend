<script setup lang="ts">
import BaseCard from '@/components/BaseCard.vue'
import { portfolio } from '@/content/portfolio'
</script>

<template>
  <BaseCard title="Проект">
    <div style="display: flex; gap: 14px; align-items: flex-start">
      <div
        aria-hidden="true"
        style="width: 44px; height: 44px; border-radius: 14px; background: rgba(95,88,255,0.25); border: 1px solid var(--border); display: flex; align-items: center; justify-content: center"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 2l9 5v10l-9 5-9-5V7l9-5z"
            stroke="currentColor"
            stroke-width="1.7"
            opacity="0.9"
          />
          <path
            d="M12 7.2l5.8 3.2-5.8 3.2-5.8-3.2L12 7.2z"
            fill="currentColor"
            opacity="0.25"
          />
        </svg>
      </div>

      <div style="min-width: 0">
        <div style="font-weight: 700; font-size: 18px; margin-bottom: 4px">
          {{ portfolio.featuredProject.title }}
        </div>
        <div style="color: var(--muted); font-size: 13px; margin-bottom: 12px">
          {{ portfolio.featuredProject.subtitle }}
        </div>
        <div style="color: var(--muted-2); font-size: 13px; line-height: 1.5">
          {{ portfolio.featuredProject.description }}
        </div>
      </div>
    </div>
  </BaseCard>
</template>
