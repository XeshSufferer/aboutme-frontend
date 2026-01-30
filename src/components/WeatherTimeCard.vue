<script setup lang="ts">
import BaseCard from '@/components/BaseCard.vue'
import { useKaliningradTime } from '@/lib/useKaliningradTime'
import { useKaliningradWeather } from '@/lib/useKaliningradWeather'

const { time, date } = useKaliningradTime()
const { state } = useKaliningradWeather()
</script>

<template>
  <BaseCard>
    <div class="cardTitle">Калининград, Россия</div>

    <div class="kpi">
      <div>
        <div class="miniLabel">Местное время</div>
        <div class="kpiValue">{{ time }}</div>
        <div class="kpiMeta">{{ date }}</div>
      </div>
    </div>

    <div class="row">
      <div class="mini">
        <div class="miniLabel">Температура</div>
        <div class="miniValue">
          <span v-if="state.status === 'ready'">{{ state.data.temperatureC }}°C</span>
          <span v-else>—</span>
          <span v-if="state.status === 'ready'" style="margin-left: 10px; color: var(--muted)">
            {{ state.data.summary }}
          </span>
          <span v-else-if="state.status === 'error'" style="margin-left: 10px; color: var(--muted)">
            нет данных
          </span>
        </div>
      </div>

      <div class="mini">
        <div class="miniLabel">Влажность</div>
        <div class="miniValue">
          <span v-if="state.status === 'ready'">{{ state.data.humidity }}%</span>
          <span v-else>—</span>
        </div>
      </div>

      <div class="mini">
        <div class="miniLabel">Ветер</div>
        <div class="miniValue">
          <span v-if="state.status === 'ready'">{{ state.data.windSpeed }} м/с</span>
          <span v-else>—</span>
        </div>
      </div>
    </div>
  </BaseCard>
</template>
