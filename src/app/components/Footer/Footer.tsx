import SocialMedia from "./SocialMedia";

export default function Footer() {
  return (
    <div className="bg-light-gray transition-bg dark:bg-gunmetal-blue fixed bottom-0 flex w-full max-w-xl flex-col items-center border-t pt-3">
      <p className="text-sm">Reach me out</p>

      <SocialMedia />

      <p className="text-xs">
        &copy; Laza Nantenaina {new Date().getFullYear()}
      </p>
    </div>
  );
}
