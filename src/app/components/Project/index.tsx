import { projectList, sideProjectList } from "@/app/lib/data";
import ProjectItem from "./ProjectItem";

export default function Projects() {
  return (
    <div className="mb-32 mt-10 flex flex-wrap p-4 pl-0 pr-0">
      <h3 className="p-4 font-bold">Professional projects:</h3>
      <br />
      <div className="flex flex-wrap justify-start">
        {projectList.map((project, index) => (
          <ProjectItem key={`project-item-${index}`} {...project} />
        ))}
      </div>

      <br />

      <h3 className="p-4 font-bold">Side projects:</h3>
      <br />
      <div className="flex flex-wrap justify-start">
        {sideProjectList.map((project, index) => (
          <ProjectItem key={`side-project-item-${index}`} {...project} />
        ))}
      </div>
    </div>
  );
}
