"use client";

import clsx from "clsx";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

interface Props {
  path: string;
  label: string;
  currentPath: string | undefined;
  setCurrentPath: Dispatch<SetStateAction<string | undefined>>;
}

export default function Menu(props: Props) {
  const { path, label, currentPath = "", setCurrentPath } = props;
  const isCurrentPath = currentPath === path;

  return (
    <Link
      href={path}
      className={clsx(
        `relative flex animate-fade-down justify-center p-4 text-sm hover:font-bold`,
        {
          "text-cadet-blue": isCurrentPath,
          "dark:text-cadet-blue": isCurrentPath,
        },
      )}
      onClick={() => setCurrentPath(path)}
    >
      {label}
    </Link>
  );
}
