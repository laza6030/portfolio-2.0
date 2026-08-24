"use client";

import { useState } from "react";
import { IconType } from "react-icons";
import { IoMdMail } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaDiscord, FaGithub, FaLinkedin } from "react-icons/fa6";

import { useDictionary } from "@/app/lib/locale-client";
import { author } from "@/app/lib/site";

const iconClassName =
  "text-dark-blue hover:text-active dark:text-light-gray mx-2 text-xl";

export default function SocialMedia() {
  const { footer } = useDictionary();
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const socialMedia: { Icon: IconType; label: string; href: string }[] = [
    { Icon: IoMdMail, label: footer.email, href: `mailto:${author.email}` },
    { Icon: FaLinkedin, label: "LinkedIn", href: author.linkedin },
    { Icon: FaGithub, label: "GitHub", href: author.github },
    { Icon: IoLogoWhatsapp, label: "WhatsApp", href: author.whatsapp },
  ];

  const handleCopyDiscord = async () => {
    try {
      await navigator.clipboard.writeText(author.discord);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch {
      setIsCopied(false);
    }
  };

  return (
    <div className="border-border mt-2 mb-2 flex items-center rounded-md border p-1">
      {socialMedia.map(({ Icon, label, href }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          title={label}
          target="_blank"
          rel="noopener noreferrer"
          className={iconClassName}
        >
          <Icon aria-hidden="true" />
        </a>
      ))}

      <button
        type="button"
        onClick={handleCopyDiscord}
        aria-label={footer.copyDiscord(author.discord)}
        title={author.discord}
        className={iconClassName}
      >
        <FaDiscord aria-hidden="true" />
      </button>

      <span role="status" className="sr-only">
        {isCopied ? footer.copied : ""}
      </span>
    </div>
  );
}
