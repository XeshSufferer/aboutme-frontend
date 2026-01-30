import { onMounted, onUnmounted, ref } from 'vue'

export type KaliningradWeather = {
  temperatureC: number
  windSpeed: number
  humidity: number
  summary: string
}

type State =
  | { status: 'idle' | 'loading'; data: null; error: null }
  | { status: 'ready'; data: KaliningradWeather; error: null }
  | { status: 'error'; data: null; error: string }

type Options = {
  refreshMs?: number
}

const LAT = 54.7104
const LON = 20.4522

function summaryFromWeatherCode(code: number): string {
  if (code === 0) return 'Ясно'
  if ([1, 2, 3].includes(code)) return 'Облачно'
  if ([45, 48].includes(code)) return 'Туман'
  if ([51, 53, 55, 56, 57].includes(code)) return 'Морось'
  if ([61, 63, 65, 66, 67].includes(code)) return 'Дождь'
  if ([71, 73, 75, 77].includes(code)) return 'Снег'
  if ([80, 81, 82].includes(code)) return 'Ливень'
  if ([85, 86].includes(code)) return 'Снегопад'
  if ([95, 96, 99].includes(code)) return 'Гроза'
  return 'Погода'
}

export function useKaliningradWeather(options: Options = {}) {
  const refreshMs = options.refreshMs ?? 10 * 60 * 1000

  const state = ref<State>({ status: 'idle', data: null, error: null })

  let timer: number | undefined

  const load = async () => {
    try {
      state.value = { status: 'loading', data: null, error: null }

      const url = new URL('https://api.open-meteo.com/v1/forecast')
      url.searchParams.set('latitude', String(LAT))
      url.searchParams.set('longitude', String(LON))
      url.searchParams.set(
        'current',
        'temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code'
      )
      url.searchParams.set('timezone', 'Europe/Kaliningrad')

      const res = await fetch(url.toString())
      if (!res.ok) {
        state.value = { status: 'error', data: null, error: `HTTP ${res.status}` }
        return
      }

      const json = (await res.json()) as {
        current?: {
          temperature_2m?: number
          wind_speed_10m?: number
          relative_humidity_2m?: number
          weather_code?: number
        }
      }

      const temp = json.current?.temperature_2m
      const wind = json.current?.wind_speed_10m
      const hum = json.current?.relative_humidity_2m
      const code = json.current?.weather_code

      if (temp == null || wind == null || hum == null || code == null) {
        state.value = { status: 'error', data: null, error: 'Invalid payload' }
        return
      }

      state.value = {
        status: 'ready',
        data: {
          temperatureC: Math.round(temp),
          windSpeed: Math.round(wind),
          humidity: Math.round(hum),
          summary: summaryFromWeatherCode(code),
        },
        error: null,
      }
    } catch (e) {
      state.value = {
        status: 'error',
        data: null,
        error: e instanceof Error ? e.message : 'Network error',
      }
    }
  }

  onMounted(() => {
    void load()
    timer = window.setInterval(() => void load(), refreshMs)
  })

  onUnmounted(() => {
    if (timer != null) window.clearInterval(timer)
  })

  return { state, refresh: load }
}
