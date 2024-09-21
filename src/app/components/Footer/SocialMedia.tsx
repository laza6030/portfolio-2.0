import { IoMdMail } from "react-icons/io";
import { FaDiscord } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaGithub } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

export default function SocialMedia() {
  return (
    <div className="border rounded-md border-dark-blue p-1 flex mt-2 mb-2 ">
      <button className="text-dark-blue hover:text-cadet-blue mx-2 text-xl">
        <FaXTwitter />
      </button>

      <button className="text-dark-blue hover:text-cadet-blue mx-2 text-xl">
        <IoMdMail />
      </button>

      <button className="text-dark-blue hover:text-cadet-blue mx-2 text-xl">
        <FaDiscord />
      </button>

      <button className="text-dark-blue hover:text-cadet-blue mx-2 text-xl">
        <FaLinkedin />
      </button>

      <button className="text-dark-blue hover:text-cadet-blue mx-2 text-xl">
        <IoLogoWhatsapp />
      </button>

      <button className="text-dark-blue hover:text-cadet-blue mx-2 text-xl">
        <FaGithub />
      </button>
    </div>
  );
}
