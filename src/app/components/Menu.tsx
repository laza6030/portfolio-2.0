"use client";

import clsx from "clsx";
import Link from "next/link";

interface Props {
  index: number;
  path: string;
  label: string;
  isActive: boolean;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}

export default function Menu(props: Props) {
  const { index, path, label, isActive, onClick } = props;

  return (
    <Link
      href={path}
      onClick={onClick}
      aria-current={isActive ? "page" : undefined}
      style={{ animationDelay: `${(index + 1) * 200}ms` }}
      className={clsx(
        // Transparent border on every item so the active one adds no width.
        "animate-fade-down hover:text-active relative flex justify-center border-b-2 border-transparent p-3 text-sm opacity-0 sm:p-4",
        isActive && "border-active text-active",
      )}
    >
      {label}
    </Link>
  );
}
