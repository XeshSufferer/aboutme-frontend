import { onMounted, onUnmounted, ref } from 'vue'

type Options = {
  tickMs?: number
}

export function useKaliningradTime(options: Options = {}) {
  const tickMs = options.tickMs ?? 1000

  const time = ref('')
  const date = ref('')

  let timer: number | undefined

  const format = () => {
    const now = new Date()

    time.value = new Intl.DateTimeFormat('ru-RU', {
      timeZone: 'Europe/Kaliningrad',
      hour: '2-digit',
      minute: '2-digit',
    }).format(now)

    date.value = new Intl.DateTimeFormat('ru-RU', {
      timeZone: 'Europe/Kaliningrad',
      weekday: 'long',
      day: '2-digit',
      month: 'long',
    }).format(now)
  }

  onMounted(() => {
    format()
    timer = window.setInterval(format, tickMs)
  })

  onUnmounted(() => {
    if (timer != null) window.clearInterval(timer)
  })

  return { time, date }
}
