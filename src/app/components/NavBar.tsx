"use client";

import { useState } from "react";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { MdSunny } from "react-icons/md";
import { RiMoonFill } from "react-icons/ri";

export default function NavBar() {
  const pathname = usePathname();
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const handleSwitchTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  const isCurrentPath = (path: string) => {
    return pathname.includes(path);
  };

  return (
    <div className="flex flex-row justify-between w-full">
      <div className="flex flex-row">
        <Link
          href="/"
          className={clsx("flex justify-center p-4", {
            "text-cadet-blue": pathname === "/",
          })}
        >
          Home
        </Link>

        <Link
          href="/projects"
          className={clsx("flex justify-center p-4", {
            "text-cadet-blue": isCurrentPath("/projects"),
          })}
        >
          Projects
        </Link>

        <Link
          href="/about"
          className={clsx("flex justify-center p-4", {
            "text-cadet-blue": isCurrentPath("/about"),
          })}
        >
          About
        </Link>
      </div>

      <button onClick={handleSwitchTheme}>
        {isDarkMode ? <MdSunny /> : <RiMoonFill />}
      </button>
    </div>
  );
}
