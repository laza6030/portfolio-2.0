import { projectList, sideProjectList } from "@/app/lib/data";
import ProjectItem from "./ProjectItem";

export default function Projects() {
  return (
    <div id="projects" className="mb-32 flex h-[80vh] flex-wrap p-4">
      <h3 className="font-bold">Professional projects:</h3>
      <br />
      <div className="flex flex-wrap justify-start">
        {projectList.map((project, index) => (
          <ProjectItem key={`project-item-${index}`} {...project} />
        ))}
      </div>

      <br />

      <h3 className="font-bold">Side projects:</h3>
      <br />
      <div className="flex flex-wrap justify-start">
        {sideProjectList.map((project, index) => (
          <ProjectItem key={`side-project-item-${index}`} {...project} />
        ))}
      </div>
    </div>
  );
}
