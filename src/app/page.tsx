import NavBar from "@/app/components/NavBar";
import IntroduceMe from "@/app/components/IntroduceMe";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <NavBar />

      <IntroduceMe />
    </main>
  );
}
