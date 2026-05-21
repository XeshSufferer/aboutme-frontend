"use client";

import { useEffect, useState } from "react";

const TIMEZONE = "Europe/Kaliningrad";
const LOCALE = "ru-RU";

export function Clock() {
  const [time, setTime] = useState<string>("");
  const [date, setDate] = useState<string>("");

  useEffect(() => {
    function tick() {
      const now = new Date();
      setTime(
        now.toLocaleTimeString(LOCALE, {
          timeZone: TIMEZONE,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        })
      );
      setDate(
        now.toLocaleDateString(LOCALE, {
          timeZone: TIMEZONE,
          weekday: "long",
          day: "numeric",
          month: "long",
        })
      );
    }

    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="text-center">
      <div className="text-3xl font-mono font-light tracking-wider tabular-nums text-cyan-400">
        {time || "--:--:--"}
      </div>
      <div className="mt-1 text-sm text-muted-foreground capitalize">
        {date || "—"}
      </div>
      <div className="mt-0.5 text-xs text-muted-foreground/60">
        Калининград (UTC+2)
      </div>
    </div>
  );
}
