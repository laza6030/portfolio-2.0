"use client";

import { FiGithub, FiExternalLink } from "react-icons/fi";

import { Project } from "@/app/types";
import { useDictionary } from "@/app/lib/locale-client";

interface Props extends Project {
  index: number;
  className?: string;
}

export default function ProjectItem(props: Props) {
  const { title, description, tools, link, githubLink, className, index } =
    props;

  const { projects } = useDictionary();

  return (
    <div
      className={`animate-fade-up dark:shadow-dark-blue mr-[2px] mb-10 ml-[2px] w-full cursor-default rounded-md bg-[#e4e5e1] p-4 opacity-0 shadow-sm transition-shadow hover:shadow-md dark:bg-[#1b2637] ${className ?? ""}`}
      style={{ animationDelay: `${(index + 1) * 200}ms` }}
    >
      <h3 className="mb-1 flex items-center font-sans text-base font-bold">
        {title}

        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={projects.visit(title)}
            title={projects.visit(title)}
            className="hover:text-active ml-5"
          >
            <FiExternalLink aria-hidden="true" />
          </a>
        )}

        {githubLink && (
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={projects.github(title)}
            title={projects.github(title)}
            className="hover:text-active ml-5"
          >
            <FiGithub aria-hidden="true" />
          </a>
        )}
      </h3>

      <p className="mb-2 text-[15px] leading-relaxed">{description}</p>

      <ul className="flex list-none flex-wrap">
        {tools.map((item) => (
          <li
            key={item}
            className="hover:shadow-hover mr-2 mb-2 cursor-default rounded-2xl bg-[#d9d9d7] p-3 pt-1 pb-1 text-xs transition-[background-color,box-shadow] dark:bg-[#283449]"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
