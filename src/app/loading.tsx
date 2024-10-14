"use client";

import ProgressBar from "@/app/components/ProgressBar";

export default function Loading() {
  return (
    <div className="fixed z-[1] flex h-full w-full flex-col items-center justify-center backdrop-blur-[5px]">
      Loading...
      <ProgressBar />
    </div>
  );
}
