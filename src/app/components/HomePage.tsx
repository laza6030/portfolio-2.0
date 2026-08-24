import IntroduceMe from "@/app/components/IntroduceMe";
import Projects from "@/app/components/Project";
import { getServerDictionary } from "@/app/lib/locale-server";

export default function HomePage() {
  const { nav } = getServerDictionary();

  return (
    <div className="mt-[60px]">
      <section id="home" aria-label={nav.home} className="scroll-mt-8">
        <IntroduceMe />
      </section>

      {/* scroll-mt clears the fixed navbar, which would otherwise cover the
          heading the anchor scrolls to. */}
      <section
        id="projects"
        aria-label={nav.projects}
        className="mt-10 scroll-mt-8"
      >
        <Projects />
      </section>
    </div>
  );
}
