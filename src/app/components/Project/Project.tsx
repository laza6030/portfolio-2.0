"use client";

import { useEffect, useId, useState } from "react";
import clsx from "clsx";
import { BiSolidChevronRight } from "react-icons/bi";
import { Project as ProjectType } from "@/app/types";
import { subscribeToHomeReset } from "@/app/lib/home-reset";
import ProjectItem from "./ProjectItem";

interface Props {
  index: number;
  title: string;
  projects: ProjectType[];
  defaultExpanded?: boolean;
}

export default function Project(props: Props) {
  const { title, projects, index, defaultExpanded = false } = props;

  const panelId = useId();
  const [isExpanded, setIsExpanded] = useState<boolean>(defaultExpanded);

  useEffect(
    () => subscribeToHomeReset(() => setIsExpanded(defaultExpanded)),
    [defaultExpanded],
  );

  const onClick = () => {
    setIsExpanded((isExpanded) => !isExpanded);
  };

  return (
    <div>
      <h2
        className="animate-fade-up font-title mb-2 text-xl opacity-0"
        style={{ animationDelay: `${(index + 4) * 300}ms` }}
      >
        <button
          type="button"
          onClick={onClick}
          aria-expanded={isExpanded}
          aria-controls={panelId}
          className="group flex items-center"
        >
          <span className="p-4">{title}</span>

          <BiSolidChevronRight
            aria-hidden="true"
            className={clsx(
              "mt-1 transition-transform group-hover:translate-x-1",
              isExpanded && "rotate-90",
            )}
          />
        </button>
      </h2>

      {isExpanded && (
        <ul id={panelId} className="flex list-none flex-wrap justify-start">
          {projects.map((project, index) => (
            <li key={project.title} className="w-full">
              <ProjectItem {...project} index={index} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
