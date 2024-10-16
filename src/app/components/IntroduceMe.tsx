// import Link from "next/link";
// import { FiArrowRight } from "react-icons/fi";

export default function IntroduceMe() {
  return (
    <div className="mb-auto mt-[10%] flex flex-col p-4">
      <p className="text-xl">Hello! I'm Laza Nantenaina</p>

      <br />

      <p className="text-justify text-[15px]">
        I’m a passionate software engineer with 4 years of experience in
        building efficient and scalable applications, particularly using
        JavaScript. With a strong focus on web development, I have honed my
        skills in crafting seamless, user-friendly applications. I thrive in
        collaborative environments, working closely with teams to deliver
        high-quality solutions. I also enjoy exploring new technologies to
        continually enhance both my technical expertise and the overall user
        experience. &nbsp;
        <span>
          <a
            href="https://read.cv/laza_nantenaina"
            target="_blank"
            className="text-sky-blue"
          >
            Read my resume.
          </a>
        </span>
      </p>

      {/* <br />

      <div>
        <Link href="/#projects" className="flex items-center">
          Projects I've worked on...
          <FiArrowRight className={`relative ml-3 animate-moving-arrow`} />
        </Link>
      </div> */}
    </div>
  );
}
