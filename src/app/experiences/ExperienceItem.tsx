import { Experience } from "@/app/types";

interface Props extends Experience {
  index: number;
}

export default function ExperienceItem(props: Props) {
  const { from, to, post, description, society, index } = props;

  return (
    <div
      className={`animate-fade-up mt-4 mb-4 w-full p-4 opacity-0`}
      style={{ animationDelay: `${(index + 1) * 200}ms` }}
    >
      <h4 className="mb-1 flex items-center font-bold">
        {from} - {to}
      </h4>

      <div className="mt-2 mb-2 font-thin">
        <span className="text-xl">{post}</span> at&nbsp;
        <span className="text-xl">{society}</span>
      </div>

      <div className="text-justify text-[15px]">{description}</div>
    </div>
  );
}
