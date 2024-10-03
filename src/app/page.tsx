"use client";

import dynamic from "next/dynamic";

import { useState, useEffect } from "react";
import Loading from "@/app/loading";
const IntroduceMe = dynamic(() => import("@/app/components/IntroduceMe"));

export default function Home() {
  // const [showLoading, setShowLoading] = useState<boolean>(false);

  // useEffect(() => {
  //   setShowLoading(true);
  // }, []);

  // if (showLoading) return <Loading hideLoading={() => setShowLoading(false)} />;

  return <IntroduceMe />;
}
