import { FiGithub } from "react-icons/fi";

import { Project } from "@/app/types";

interface IProps extends Project {}

export default function ProjectItem(props: IProps) {
  const { title, description, tools, link, githubLink } = props;

  return (
    <div className="mb-10 w-full">
      <h6 className="mb-1 flex items-center font-bold">
        {title}
        {githubLink && (
          <a href={githubLink} target="_blank" className="ml-5">
            <FiGithub />
          </a>
        )}
      </h6>
      <p className="mb-2 text-sm">{description}</p>

      <div className="flex flex-wrap">
        {tools.map((item, index) => (
          <div
            key={`techno-${index}`}
            className="mb-2 mr-2 rounded-2xl bg-[#d9d9d7] p-3 pb-1 pt-1 text-xs transition-bg dark:bg-[#283449]"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
