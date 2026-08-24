"use client";

import { useEffect, useState } from "react";

import Loading from "@/app/components/Loading";

// Long enough for the progress bar animation to finish.
const MIN_DURATION_MS = 1000;
const SESSION_KEY = "splash-seen";

function hasBeenSeen() {
  try {
    return sessionStorage.getItem(SESSION_KEY) === "1";
  } catch {
    return false;
  }
}

function markAsSeen() {
  try {
    sessionStorage.setItem(SESSION_KEY, "1");
  } catch {}
}

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState<boolean>(true);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    const isSeen = hasBeenSeen();

    // performance.now() is measured from navigation start.
    const hide = () => {
      const remaining = isSeen
        ? 0
        : Math.max(MIN_DURATION_MS - performance.now(), 0);

      timer = setTimeout(() => {
        markAsSeen();
        setIsVisible(false);
      }, remaining);
    };

    if (isSeen || document.readyState === "complete") {
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
