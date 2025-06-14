"use client";

import { SetStateAction, Dispatch, useState } from "react";

import { MdSunny } from "react-icons/md";
import { RiMoonFill } from "react-icons/ri";
import Menu from "./Menu";

interface Props {
  isDarkMode?: boolean;
  setIsDarkMode?: Dispatch<SetStateAction<boolean>>;
}

export default function NavBar(props: Props) {
  const { isDarkMode, setIsDarkMode } = props;
  const [currentPath, setCurrentPath] = useState<string>();

  const handleSwitchTheme = () => {
    if (isDarkMode) {
      localStorage.setItem("theme", "light");
      setIsDarkMode?.(false);
    } else {
      localStorage.setItem("theme", "dark");
      setIsDarkMode?.(true);
    }
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
    <div className="fixed z-[1] flex w-1/2 flex-row justify-between border-b-[1px] bg-light-gray transition-bg dark:bg-gunmetal-blue">
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
        className={`relative animate-fade-down p-4 animation-delay-[300ms]`}
      >
        {isDarkMode ? <MdSunny /> : <RiMoonFill />}
      </button>
    </div>
  );
}
