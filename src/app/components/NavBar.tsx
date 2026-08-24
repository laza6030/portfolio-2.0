"use client";

import { useSyncExternalStore } from "react";
import { usePathname } from "next/navigation";

import { MdSunny } from "react-icons/md";
import { RiMoonFill } from "react-icons/ri";
import Menu from "./Menu";
import LocaleSwitch from "./LocaleSwitch";
import { useDictionary, useLocale } from "@/app/lib/locale-client";
import { localePath } from "@/app/lib/i18n";
import { requestHomeReset } from "@/app/lib/home-reset";
import {
  getIsDarkMode,
  getIsDarkModeOnServer,
  setIsDarkMode,
  subscribeToTheme,
} from "@/app/lib/theme";

function subscribeToHash(listener: () => void) {
  window.addEventListener("hashchange", listener);
  return () => window.removeEventListener("hashchange", listener);
}

const getHash = () => window.location.hash;
const getHashOnServer = () => "";

export default function NavBar() {
  const locale = useLocale();
  const { nav, theme } = useDictionary();
  const pathname = usePathname();
  const hash = useSyncExternalStore(subscribeToHash, getHash, getHashOnServer);

  const isDarkMode = useSyncExternalStore(
    subscribeToTheme,
    getIsDarkMode,
    getIsDarkModeOnServer,
  );

  const handleSwitchTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const home = localePath(locale);
  const experiences = localePath(locale, "/experiences");

  // Already home: handle it ourselves. Letting Next treat it as a same-route
  // navigation makes its scroll handling race with ours.
  const handleHomeClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname !== home) return;
    event.preventDefault();
    requestHomeReset();
  };

  // Home links to the bare path, not "#home": the landing view starts at the
  // very top of the document, above the intro section.
  const menuList = [
    {
      label: nav.home,
      href: home,
      path: home,
      hash: "#home",
      onClick: handleHomeClick,
    },
    {
      label: nav.projects,
      href: `${home}#projects`,
      path: home,
      hash: "#projects",
    },
    { label: nav.experiences, href: experiences, path: experiences },
  ];

  const isActive = ({ path, hash: itemHash }: (typeof menuList)[number]) => {
    if (pathname !== path) return false;
    if (!itemHash) return true;
    return hash ? hash === itemHash : itemHash === "#home";
  };

  return (
    <header className="bg-light-gray transition-bg dark:bg-gunmetal-blue border-border fixed z-1 flex w-full max-w-xl flex-row justify-between border-b">
      <nav aria-label={nav.label}>
        <ul className="flex flex-row">
          {menuList.map((item, index) => (
            <li key={item.label}>
              <Menu
                index={index}
                label={item.label}
                path={item.href}
                isActive={isActive(item)}
                onClick={item.onClick}
              />
            </li>
          ))}
        </ul>
      </nav>

      <div className="flex flex-row items-center">
        <LocaleSwitch />

        <button
          type="button"
          onClick={handleSwitchTheme}
          aria-label={isDarkMode ? theme.toLight : theme.toDark}
          className="animate-fade-down animation-delay-[300ms] relative p-3 sm:p-4"
        >
          {isDarkMode ? (
            <MdSunny aria-hidden="true" />
          ) : (
            <RiMoonFill aria-hidden="true" />
          )}
        </button>
      </div>
    </header>
  );
}
