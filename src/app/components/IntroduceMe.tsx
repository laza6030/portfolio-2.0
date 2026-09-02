import { getServerDictionary } from "@/app/lib/locale-server";

export default function IntroduceMe() {
  const { intro } = getServerDictionary();

  return (
    <div className="mt-14 mb-auto flex flex-col p-4">
      <h1 className="animate-opacity">{intro.greeting}</h1>

      <p className="animate-opacity mt-6 text-[15px] leading-relaxed">
        {intro.bio}
      </p>
    </div>
  );
}
