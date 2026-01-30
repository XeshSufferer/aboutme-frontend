<script setup lang="ts">
defineProps<{ title?: string }>()
</script>

<template>
  <section class="card">
    <div v-if="title" class="cardTitle">{{ title }}</div>
    <slot />
  </section>
</template>
