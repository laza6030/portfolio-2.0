import { experiences } from "@/app/lib/data";

import ExperienceItem from "./ExperienceItem";

export default function Experience() {
  return (
    <div className="mt-[60px] flex flex-col">
      {experiences.map((experience, index) => (
        <ExperienceItem index={index} {...experience} />
      ))}
    </div>
  );
}
