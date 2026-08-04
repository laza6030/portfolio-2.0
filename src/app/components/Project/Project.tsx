import { useState } from "react";
import clsx from "clsx";
import { BiSolidChevronRight } from "react-icons/bi";
import { Project as ProjectType } from "@/app/types";
import ProjectItem from "./ProjectItem";

interface Props {
  index: number;
  title: string;
  projects: ProjectType[];
}

export default function Project(props: Props) {
  const { title, projects, index } = props;

  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const onClick = () => {
    setIsExpanded((isExpanded) => !isExpanded);
  };

  return (
    <div>
      <h3
        className="animate-fade-up opacity-0"
        style={{ animationDelay: `${(index + 4) * 300}ms` }}
      >
        <button
          type="button"
          onClick={onClick}
          aria-expanded={isExpanded}
          className="flex items-center hover:cursor-pointer"
        >
          <span className="p-4">{title}</span>
          <BiSolidChevronRight
            aria-hidden="true"
            className={clsx(
              "mt-1 font-bold transition-transform",
              isExpanded && "rotate-90",
            )}
          />
        </button>
      </h3>
      <br />

      {isExpanded && (
        <div className="flex flex-wrap justify-start">
          {projects.map((project, index) => (
            <ProjectItem
              key={`project-item-${index}`}
              {...project}
              index={index}
            />
          ))}
        </div>
      )}
    </div>
  );
}
