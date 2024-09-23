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

  const menuList: { label: string; path: string; isActive: boolean }[] = [
    { label: "Home", path: "/", isActive: pathname === "/" },
    {
      label: "Projects",
      path: "/projects",
      isActive: isCurrentPath("/projects"),
    },
    { label: "About", path: "/about", isActive: isCurrentPath("/about") },
  ];

  return (
    <div className="flex flex-row justify-between w-full">
      <div className="flex flex-row">
        {menuList.map(({ label, path, isActive }, index) => (
          <Link
            key={`nav-menu-${index}`}
            href={path}
            className={clsx("flex justify-center p-4 hover:font-bold w-20", {
              "text-cadet-blue": isActive,
            })}
          >
            {label}
          </Link>
        ))}
      </div>

      <button onClick={handleSwitchTheme}>
        {isDarkMode ? <MdSunny /> : <RiMoonFill />}
      </button>
    </div>
  );
}
