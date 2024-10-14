"use client";

import { useEffect } from "react";

import ProgressBar from "@/app/components/ProgressBar";

export default function Loading({ hideLoading }: { hideLoading?: () => void }) {
  useEffect(() => {
    setTimeout(() => {
      hideLoading?.();
    }, 1000);
  }, []);

  return (
    <div className="fixed z-[1] flex h-full w-full flex-col items-center justify-center backdrop-blur-[5px]">
      Loading...
      <ProgressBar />
    </div>
  );
}
