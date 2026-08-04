"use client";

import { useState, useSyncExternalStore } from "react";

import { MdSunny } from "react-icons/md";
import { RiMoonFill } from "react-icons/ri";
import Menu from "./Menu";
import {
  getIsDarkMode,
  getIsDarkModeOnServer,
  setIsDarkMode,
  subscribeToTheme,
} from "@/app/lib/theme";

export default function NavBar() {
  const [currentPath, setCurrentPath] = useState<string>();

  const isDarkMode = useSyncExternalStore(
    subscribeToTheme,
    getIsDarkMode,
    getIsDarkModeOnServer,
  );

  const handleSwitchTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const menuList: { label: string; path: string }[] = [
    {
      label: "Home",
      path: "/#home",
    },
    {
      label: "Projects",
      path: "/#projects",
    },
    {
      label: "Experiences",
      path: "/experiences",
    },
  ];

  return (
    <div className="bg-light-gray transition-bg dark:bg-gunmetal-blue fixed z-1 flex w-full max-w-xl flex-row justify-between border-b">
      <div className="flex flex-row">
        {menuList.map(({ label, path }, index) => (
          <Menu
            key={`menu-${index}`}
            index={index}
            label={label}
            path={path}
            currentPath={currentPath}
            setCurrentPath={setCurrentPath}
          />
        ))}
      </div>

      <button
        onClick={handleSwitchTheme}
        className={`animate-fade-down animation-delay-[300ms] relative p-3 sm:p-4`}
      >
        {isDarkMode ? <MdSunny /> : <RiMoonFill />}
      </button>
    </div>
  );
}
