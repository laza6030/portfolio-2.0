import { useState } from "react";
import { BiSolidChevronRight } from "react-icons/bi";
import { Project as ProjectType } from "@/app/types";
import ProjectItem from "./ProjectItem";

interface Props {
  title: string;
  projects: ProjectType[];
}

export default function Project(props: Props) {
  const { title, projects } = props;

  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const onClick = () => {
    setIsExpanded((isExpanded) => !isExpanded);
  };

  return (
    <div>
      <div
        className="flex animate-fade-up items-center opacity-0 animation-delay-[500ms] hover:cursor-pointer"
        onClick={onClick}
      >
        <h3 className="p-4 font-bold">{title}</h3>
        <BiSolidChevronRight
          className={`mt-1 font-bold ${isExpanded && "rotate-90"}`}
        />
      </div>
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
