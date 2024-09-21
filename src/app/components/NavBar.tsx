"use client";

import { useState } from "react";
import Link from "next/link";

import { MdSunny } from "react-icons/md";
import { RiMoonFill } from "react-icons/ri";

export default function NavBar() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleSwitchTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <div className="flex flex-row justify-between w-full">
      <div className="flex flex-row">
        <Link href="/" className="flex justify-center p-4">
          Home
        </Link>

        <Link href="/projects" className="flex justify-center p-4">
          Projects
        </Link>

        <Link href="/about" className="flex justify-center p-4">
          About
        </Link>
      </div>

      <button onClick={handleSwitchTheme}>
        {isDarkMode ? <MdSunny /> : <RiMoonFill />}
      </button>
    </div>
  );
}
