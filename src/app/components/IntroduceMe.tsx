import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

export default function IntroduceMe() {
  return (
    <div className="mb-auto mt-[10%] flex h-[80vh] flex-col p-4">
      <p>
        Hello! I'm&nbsp;
        <span className="text-dark-blue dark:text-cadet-blue">
          Laza Nantenaina
        </span>
      </p>

      <br />

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras blandit
        porttitor urna sed ornare. Quisque efficitur eros tortor, eu dictum
        ligula faucibus non. Quisque a pulvinar nisi. Sed tempus risus a mollis
        accumsan. Nunc tincidunt sem a augue pulvinar, a mattis sapien tempor.
        Aenean vel dolor eros. Quisque condimentum nisi non sem congue rhoncus a
        id sapien. Maecenas in posuere enim, at euismod ligula. Fusce bibendum
        quis nisl quis pellentesque. Integer eget erat et odio fringilla
        lacinia.&nbsp;
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

      <br />

      <div>
        <Link href="/#projects" className="flex items-center">
          Projects I've worked on...
          <FiArrowRight className={`relative ml-3 animate-moving-arrow`} />
        </Link>
      </div>
    </div>
  );
}
