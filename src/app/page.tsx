import NavBar from "@/app/components/NavBar";
import IntroduceMe from "@/app/components/IntroduceMe";
import Footer from "@/app/components/Footer/Footer";

export default function Home() {
  return (
    <main className="flex flex-col items-center h-screen ">
      <NavBar />

      <IntroduceMe />

      <Footer />
    </main>
  );
}
