"use client";

import { useState, SetStateAction, Dispatch } from "react";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { MdSunny } from "react-icons/md";
import { RiMoonFill } from "react-icons/ri";

interface IProps {
  isDarkMode?: boolean;
  setIsDarkMode?: Dispatch<SetStateAction<boolean>>;
}

export default function NavBar(props: IProps) {
  const { isDarkMode, setIsDarkMode } = props;
  const pathname = usePathname();

  const handleSwitchTheme = () => {
    if (isDarkMode) {
      localStorage.setItem("theme", "light");
      setIsDarkMode?.(false);
    } else {
      localStorage.setItem("theme", "dark");
      setIsDarkMode?.(true);
    }
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
    { label: "Career", path: "/career", isActive: isCurrentPath("/career") },
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
              "dark:text-cadet-blue": isActive,
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
