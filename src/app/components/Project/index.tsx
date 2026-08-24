import { getProjectList, getSideProjectList } from "@/app/lib/data";
import { getLocale, getServerDictionary } from "@/app/lib/locale-server";
import Project from "./Project";

export default function Projects() {
  const locale = getLocale();
  const { projects } = getServerDictionary();

  return (
    <div className="mt-10 flex flex-col p-4 pr-0 pl-0">
      <Project
        index={0}
        defaultExpanded
        title={projects.professional}
        projects={getProjectList(locale)}
      />

      <Project
        index={1}
        title={projects.side}
        projects={getSideProjectList(locale)}
      />
    </div>
  );
}
