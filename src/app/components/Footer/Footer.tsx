import SocialMedia from "./SocialMedia";

export default function Footer() {
  return (
    <div className="bg-light-gray transition-bg dark:bg-gunmetal-blue fixed bottom-0 flex w-full flex-col items-center border-t pt-3 sm:w-4/5 lg:w-1/2">
      <p className="text-sm">Reach me out</p>

      <SocialMedia />

      <p className="text-xs">
        &copy; Laza Nantenaina {new Date().getFullYear()}
      </p>
    </div>
  );
}
