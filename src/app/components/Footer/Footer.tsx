import SocialMedia from "./SocialMedia";
import { getServerDictionary } from "@/app/lib/locale-server";

export default function Footer() {
  const { footer } = getServerDictionary();

  return (
    <footer className="bg-light-gray transition-bg dark:bg-gunmetal-blue border-border fixed bottom-0 flex w-full max-w-xl flex-col items-center border-t pt-3">
      <p className="text-sm">{footer.reachMeOut}</p>

      <SocialMedia />

      <p className="text-xs">
        &copy; Laza Nantenaina {new Date().getFullYear()}
      </p>
    </footer>
  );
}
