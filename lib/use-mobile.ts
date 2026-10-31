"use client";

import { useEffect, useState } from "react";

const QUERY = "(max-width: 767px)";

function readMobile() {
  if (typeof window === "undefined") return false;
  return window.matchMedia(QUERY).matches;
}

export function useMobileLayout() {
  const [mobile, setMobile] = useState(readMobile);

  useEffect(() => {
    const mq = window.matchMedia(QUERY);
    const update = () => setMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return mobile;
}
