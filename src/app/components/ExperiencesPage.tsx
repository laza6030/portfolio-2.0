import ExperienceItem from "@/app/components/ExperienceItem";
import { getExperiences } from "@/app/lib/data";
import { getLocale, getServerDictionary } from "@/app/lib/locale-server";

export default function ExperiencesPage() {
  const locale = getLocale();
  const { experiences } = getServerDictionary();

  return (
    <div className="mt-[60px] flex flex-col">
      <h1 className="animate-opacity p-4">{experiences.title}</h1>

      <ul className="list-none">
        {getExperiences(locale).map((experience, index) => (
          <li key={`${experience.society}-${experience.from}`}>
            <ExperienceItem index={index} {...experience} />
          </li>
        ))}
      </ul>
    </div>
  );
}
