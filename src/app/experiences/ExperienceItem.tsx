import { Experience } from "@/app/types";

interface Props extends Experience {
  index: number;
}

export default function ExperienceItem(props: Props) {
  const { from, to, post, description, society, index } = props;

  return (
    <div
      className={`mb-4 mt-4 w-full animate-fade-up p-4 opacity-0`}
      style={{ animationDelay: `${(index + 1) * 200}ms` }}
    >
      <h6 className="mb-1 flex items-center font-bold">
        {from} - {to}
      </h6>

      <div className="mb-2 mt-2 font-thin">
        <span className="text-xl">{post}</span> at&nbsp;
        <span>{society}</span>
      </div>

      <div className="text-justify">{description}</div>
    </div>
  );
}
