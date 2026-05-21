"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface WeatherData {
  current_condition: Array<{
    temp_C: string;
    weatherDesc: Array<{ value: string }>;
    weatherIconUrl: Array<{ value: string }>;
    humidity: string;
    windSpeedKmph: string;
  }>;
}

export function Weather() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("https://wttr.in/Kaliningrad?format=j1")
      .then((res) => res.json())
      .then((data: WeatherData) => {
        setWeather(data);
        setError(false);
      })
      .catch(() => setError(true));
  }, []);

  if (error) {
    return (
      <div className="text-center text-sm text-muted-foreground">
        Не удалось загрузить погоду
      </div>
    );
  }

  if (!weather) {
    return (
      <div className="text-center text-sm text-muted-foreground animate-pulse">
        Загрузка...
      </div>
    );
  }

  const current = weather.current_condition[0];

  return (
    <div className="text-center">
      <div className="flex items-center justify-center gap-3">
        {current.weatherIconUrl[0]?.value && (
          <Image
            src={current.weatherIconUrl[0].value}
            alt={current.weatherDesc[0]?.value || ""}
            width={48}
            height={48}
            className="h-12 w-12"
            unoptimized
          />
        )}
        <div>
          <div className="text-3xl font-light tracking-tight text-cyan-400">
            {current.temp_C}°C
          </div>
          <div className="text-sm text-muted-foreground capitalize">
            {current.weatherDesc[0]?.value || ""}
          </div>
        </div>
      </div>
      <div className="mt-2 flex justify-center gap-4 text-xs text-muted-foreground/70">
        <span>💧 {current.humidity}%</span>
        <span>💨 {current.windSpeedKmph} km/h</span>
      </div>
      <div className="mt-1 text-xs text-muted-foreground/50">
        Калининград
      </div>
    </div>
  );
}
