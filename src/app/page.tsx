"use client";

import dynamic from "next/dynamic";

const IntroduceMe = dynamic(() => import("@/app/components/IntroduceMe"));

export default function Home() {
  return <IntroduceMe />;
}
