"use client";

import { useEffect, useState } from "react";

import Loading from "@/app/components/Loading";

// Long enough for the progress bar animation to finish.
const MIN_DURATION_MS = 1000;

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState<boolean>(true);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    // performance.now() is measured from navigation start.
    const hide = () => {
      const remaining = Math.max(MIN_DURATION_MS - performance.now(), 0);
      timer = setTimeout(() => setIsVisible(false), remaining);
    };

    if (document.readyState === "complete") {
      hide();
    } else {
      window.addEventListener("load", hide);
    }

    return () => {
      clearTimeout(timer);
      window.removeEventListener("load", hide);
    };
  }, []);

  if (!isVisible) return null;

  return <Loading />;
}
