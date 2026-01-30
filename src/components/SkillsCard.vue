<script setup lang="ts">
import BaseCard from '@/components/BaseCard.vue'
import { portfolio } from '@/content/portfolio'
</script>

<template>
  <BaseCard title="Навыки">
    <div class="tags">
      <div v-for="skill in portfolio.skills" :key="skill" class="tag">{{ skill }}</div>
    </div>
  </BaseCard>
</template>
