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
    <div className="flex flex-row justify-between w-full">
      <div className="flex flex-row">
        <Link
          href="/"
          className={clsx(
            `flex justify-center p-4 hover:font-bold w-20 animate-fade-down relative`,
            {
              "text-cadet-blue": pathname === "/",
              "dark:text-cadet-blue": pathname === "/",
            }
          )}
        >
          Home
        </Link>

        <Link
          href="/projects"
          className={clsx(
            `flex justify-center p-4 hover:font-bold w-20 animate-fade-down animation-delay-[100ms] relative`,
            {
              "text-cadet-blue": isCurrentPath("/projects"),
              "dark:text-cadet-blue": isCurrentPath("/projects"),
            }
          )}
        >
          Projects
        </Link>

        <Link
          href="/about"
          className={clsx(
            `flex justify-center p-4 hover:font-bold w-20 animate-fade-down animation-delay-[200ms] relative`,
            {
              "text-cadet-blue": isCurrentPath("/about"),
              "dark:text-cadet-blue": isCurrentPath("/about"),
            }
          )}
        >
          About
        </Link>
      </div>

      <button
        onClick={handleSwitchTheme}
        className={`animate-fade-down animation-delay-[300ms] relative`}
      >
        {isDarkMode ? <MdSunny /> : <RiMoonFill />}
      </button>
    </div>
  );
}
