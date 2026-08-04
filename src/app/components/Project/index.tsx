import { projectList, sideProjectList } from "@/app/lib/data";
import Project from "./Project";

export default function Projects() {
  return (
    <div className="mt-10 mb-32 flex flex-col p-4 pr-0 pl-0">
      <Project index={0} title="Professional projects" projects={projectList} />

      <Project index={1} title="Side projects" projects={sideProjectList} />
    </div>
  );
}
