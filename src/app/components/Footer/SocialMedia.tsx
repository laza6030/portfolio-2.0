import { IoMdMail } from "react-icons/io";
import { FaDiscord } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaGithub } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { IconType } from "react-icons";

export default function SocialMedia() {
  const socialMedia: { Icon: IconType }[] = [
    { Icon: FaXTwitter },
    { Icon: IoMdMail },
    { Icon: FaDiscord },
    { Icon: FaLinkedin },
    { Icon: IoLogoWhatsapp },
    { Icon: FaGithub },
  ];

  return (
    <div className="mb-2 mt-2 flex rounded-md border border-dark-blue p-1 dark:border-light-gray">
      {socialMedia.map(({ Icon }, index) => (
        <button
          key={`social-media-${index}`}
          className="mx-2 text-xl text-dark-blue hover:text-cadet-blue dark:text-light-gray"
        >
          <Icon />
        </button>
      ))}
    </div>
  );
}
