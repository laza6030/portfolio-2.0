import SocialMedia from "./SocialMedia";

export default function Footer() {
  return (
    <div className="mt-auto flex flex-col items-center">
      <p>Reach me out</p>

      <SocialMedia />

      <p className="text-xs">
        &copy; Laza Nantenaina {new Date().getFullYear()}
      </p>
    </div>
  );
}
