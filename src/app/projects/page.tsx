import { projectList, sideProjectList } from "@/app/lib/data";
import ProjectItem from "@/app/components/Project/ProjectItem";

export default function Projects() {
  return (
    <div className="flex flex-wrap p-4">
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
          <ProjectItem key={`project-item-${index}`} {...project} />
        ))}
      </div>
    </div>
  );
}
