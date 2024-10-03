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

  return (
    <div className="flex w-full flex-row justify-between">
      <div className="flex flex-row">
        <Link
          href="/"
          className={clsx(
            `relative flex w-20 animate-fade-down justify-center p-4 hover:font-bold`,
            {
              "text-cadet-blue": pathname === "/",
              "dark:text-cadet-blue": pathname === "/",
            },
          )}
        >
          Home
        </Link>

        <Link
          href="/projects"
          className={clsx(
            `relative flex w-20 animate-fade-down justify-center p-4 animation-delay-[100ms] hover:font-bold`,
            {
              "text-cadet-blue": isCurrentPath("/projects"),
              "dark:text-cadet-blue": isCurrentPath("/projects"),
            },
          )}
        >
          Projects
        </Link>

        <Link
          href="/about"
          className={clsx(
            `relative flex w-20 animate-fade-down justify-center p-4 animation-delay-[200ms] hover:font-bold`,
            {
              "text-cadet-blue": isCurrentPath("/about"),
              "dark:text-cadet-blue": isCurrentPath("/about"),
            },
          )}
        >
          About
        </Link>
      </div>

      <button
        onClick={handleSwitchTheme}
        className={`relative animate-fade-down animation-delay-[300ms]`}
      >
        {isDarkMode ? <MdSunny /> : <RiMoonFill />}
      </button>
    </div>
  );
}
