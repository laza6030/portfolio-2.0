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
    <div className="border-dark-blue dark:border-light-gray mt-2 mb-2 flex rounded-md border p-1">
      {socialMedia.map(({ Icon }, index) => (
        <button
          key={`social-media-${index}`}
          className="text-dark-blue hover:text-cadet-blue dark:text-light-gray mx-2 text-xl"
        >
          <Icon />
        </button>
      ))}
    </div>
  );
}
