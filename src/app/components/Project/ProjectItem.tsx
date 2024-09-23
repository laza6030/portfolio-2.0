import { Project } from "@/app/types";

interface IProps extends Project {}

export default function ProjectItem(props: IProps) {
  const { title, description, tools, link } = props;

  return (
    <div className="mb-3">
      <h6 className="font-bold">{title}</h6>
      <p>{description}</p>

      <div className="flex flex-wrap ">
        Technologies:
        {tools.map((item, index) => (
          <span>
            &nbsp;{item} {index !== tools.length - 1 && "-"}
          </span>
        ))}
      </div>
    </div>
  );
}
