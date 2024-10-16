import SocialMedia from "./SocialMedia";

export default function Footer() {
  return (
    <div className="fixed bottom-0 flex w-1/2 flex-col items-center border-t-[1px] bg-light-gray pt-3 transition-bg dark:bg-gunmetal-blue">
      <p className="text-sm">Reach me out</p>

      <SocialMedia />

      <p className="text-xs">
        &copy; Laza Nantenaina {new Date().getFullYear()}
      </p>
    </div>
  );
}
