import { Experience } from "@/app/types";
import { getServerDictionary } from "@/app/lib/locale-server";

interface Props extends Experience {
  index: number;
}

export default function ExperienceItem(props: Props) {
  const { from, to, post, description, society, index } = props;

  const { experiences } = getServerDictionary();

  return (
    <article
      className="animate-fade-up mt-4 mb-4 w-full p-4 opacity-0"
      style={{ animationDelay: `${(index + 1) * 200}ms` }}
    >
      <p className="mb-1 flex items-center font-bold">
        {from} - {to}
      </p>

      <h2 className="mt-2 mb-2 font-sans text-xl font-thin">
        {post} {experiences.at}&nbsp;{society}
      </h2>

      <p className="text-justify text-[15px]">{description}</p>
    </article>
  );
}
