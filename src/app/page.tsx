"use client";

import IntroduceMe from "@/app/components/IntroduceMe";
import Project from "@/app/components/Project";

export default function Home() {
  return (
    <div className="mt-[60px]">
      <span id="home"></span>
      <IntroduceMe />
      <span id="projects" className="mt-10"></span>
      <Project />
    </div>
  );
}
