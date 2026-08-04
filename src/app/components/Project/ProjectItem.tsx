import { FiGithub } from "react-icons/fi";

import { Project } from "@/app/types";

interface Props extends Project {
  index: number;
  className?: string;
}

export default function ProjectItem(props: Props) {
  const { title, description, tools, githubLink, className, index } = props;

  return (
    <div
      className={`animate-fade-up dark:shadow-dark-blue mr-[2px] mb-10 ml-[2px] w-full rounded-md p-4 opacity-0 shadow-sm ${className}`}
      style={{ animationDelay: `${(index + 1) * 200}ms` }}
    >
      <h4 className="mb-1 flex items-center font-bold">
        {title}
        {githubLink && (
          <a href={githubLink} target="_blank" className="ml-5">
            <FiGithub />
          </a>
        )}
      </h4>
      <p className="mb-2 text-[15px]">{description}</p>

      <div className="flex flex-wrap">
        {tools.map((item, index) => (
          <div
            key={`techno-${index}`}
            className="transition-bg mr-2 mb-2 rounded-2xl bg-[#d9d9d7] p-3 pt-1 pb-1 text-xs dark:bg-[#283449]"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
