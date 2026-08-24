"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { BiCheck, BiChevronDown } from "react-icons/bi";
import { MdLanguage } from "react-icons/md";

import { locales, localeNames, switchLocalePath } from "@/app/lib/i18n";
import { useDictionary, useLocale } from "@/app/lib/locale-client";

// Grace period so crossing the gap between button and panel doesn't close it.
const CLOSE_DELAY_MS = 150;

// Touch devices report a coarse pointer and fire a synthetic mouseenter on tap,
// which would fight with the click handler.
const canHover = () =>
  window.matchMedia("(hover: hover) and (pointer: fine)").matches;

export default function LocaleSwitch() {
  const locale = useLocale();
  const { localeSwitch } = useDictionary();
  const pathname = usePathname();

  const panelId = useId();
  const containerRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const cancelClose = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const handleMouseEnter = () => {
    if (!canHover()) return;
    cancelClose();
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    if (!canHover()) return;
    cancelClose();
    closeTimer.current = setTimeout(() => setIsOpen(false), CLOSE_DELAY_MS);
  };

  useEffect(() => cancelClose, []);

  useEffect(() => {
    if (!isOpen) return;

    const onPointerDown = (event: PointerEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  return (
    <div
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative flex items-center"
    >
      <button
        type="button"
        onClick={() => setIsOpen((isOpen) => !isOpen)}
        aria-expanded={isOpen}
        aria-controls={panelId}
        aria-label={localeSwitch.label(localeNames[locale])}
        className="animate-fade-down animation-delay-[300ms] hover:text-active flex items-center gap-1 p-3 text-sm opacity-0 sm:p-4"
      >
        <MdLanguage aria-hidden="true" className="text-base" />
        <BiChevronDown
          aria-hidden="true"
          className={clsx("transition-transform", isOpen && "rotate-180")}
        />
      </button>

      {isOpen && (
        <ul
          id={panelId}
          className="bg-light-gray dark:bg-gunmetal-blue dark:shadow-dark-blue border-border absolute top-full right-0 list-none rounded-md border shadow-sm"
        >
          {locales.map((item) => (
            <li key={item}>
              <Link
                href={switchLocalePath(pathname, item)}
                hrefLang={item}
                aria-current={item === locale ? "page" : undefined}
                onClick={() => setIsOpen(false)}
                className={clsx(
                  "hover:text-active flex items-center gap-2 px-4 py-2 text-sm whitespace-nowrap",
                  item === locale && "text-active",
                )}
              >
                {/* Kept in flow when hidden so both labels stay aligned. */}
                <BiCheck
                  aria-hidden="true"
                  className={clsx("text-base", item !== locale && "invisible")}
                />
                {localeNames[item]}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
