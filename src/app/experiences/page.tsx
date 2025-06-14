import { experiences } from "@/app/lib/data";

import ExperienceItem from "./ExperienceItem";

export default function Experience() {
  return (
    <div className="mt-[60px] flex flex-col">
      {experiences.map((experience, index) => (
        <ExperienceItem
          key={`experience-${index + 1}`}
          index={index}
          {...experience}
        />
      ))}
    </div>
  );
}
