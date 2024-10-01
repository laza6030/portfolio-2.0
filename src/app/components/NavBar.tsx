"use client";

import { SetStateAction, Dispatch } from "react";
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

  const menuList: {
    label: string;
    path: string;
    isActive: boolean;
    delay?: string;
  }[] = [
    {
      label: "Home",
      path: "/",
      isActive: pathname === "/",
      delay: "0",
    },
    {
      label: "Projects",
      path: "/projects",
      isActive: isCurrentPath("/projects"),
      delay: "200",
    },
    {
      label: "About",
      path: "/about",
      isActive: isCurrentPath("/about"),
      delay: "400",
    },
    {
      label: "Career",
      path: "/career",
      isActive: isCurrentPath("/career"),
      delay: "600",
    },
  ];

  return (
    <div className="flex flex-row justify-between w-full">
      <div className="flex flex-row">
        {menuList.map(({ label, path, isActive, delay }, index) => (
          <Link
            key={`nav-menu-${index}`}
            href={path}
            className={clsx(
              `flex justify-center p-4 hover:font-bold w-20 animate-fade-down animation-delay-[${delay}ms] relative`,
              {
                "text-cadet-blue": isActive,
                "dark:text-cadet-blue": isActive,
              }
            )}
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
