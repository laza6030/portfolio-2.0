"use client";

import ProgressBar from "@/app/components/ProgressBar";
import { useDictionary } from "@/app/lib/locale-client";

export default function Loading() {
  const { loading } = useDictionary();

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed z-50 flex h-full w-full flex-col items-center justify-center backdrop-blur-[5px]"
    >
      {loading}
      <ProgressBar />
    </div>
  );
}
