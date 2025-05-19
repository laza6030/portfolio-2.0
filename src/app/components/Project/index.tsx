import { projectList, sideProjectList } from "@/app/lib/data";
import Project from "./Project";

export default function Projects() {
  return (
    <div className="mb-32 mt-10 flex flex-col p-4 pl-0 pr-0">
      <Project title="Professional projects" projects={projectList} />

      <Project title="Side projects" projects={sideProjectList} />
    </div>
  );
}
