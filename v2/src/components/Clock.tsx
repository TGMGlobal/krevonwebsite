"use client";

import { useEffect, useState } from "react";
import { site } from "@/content/site";

/** Live studio time. Renders nothing until it has run in the browser. */
export function Clock() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const format = new Intl.DateTimeFormat("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      timeZone: site.timeZone,
    });
    const tick = () => setTime(format.format(new Date()));
    tick();
    const id = window.setInterval(tick, 30_000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <span className="tabular-nums" suppressHydrationWarning>
      {site.clockLabel} {time || "--:--"} IST
    </span>
  );
}
