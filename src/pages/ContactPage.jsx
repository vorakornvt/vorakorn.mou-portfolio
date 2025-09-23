import ContactTag from "../../src/assets/Asset15.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import GmailButton from "../components/features/GmailButton";

export default function ContactPage() {
  return (
    <div className="bg-black pb-5 z-auto flex flex-col min-h-[500px] items-center justify-center ">
      <img
        alt="Project"
        src={ContactTag}
        className="h-8.5 z-1 mt-5 mb-1 flex justify-center mx-auto "
      />

      <p className="font-main z-1 text-[14px] text-white">
        I&apos;d love to hear from you. Get in touch. I&apos;m friendly.
      </p>
      {/* Social Media Icons */}
      <div className="flex z-1 pb-5 space-x-10">
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FaLinkedin fill="white" size={"35px"} />
        </a>

        <a
          href="https://github.com/vorakornvt"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub fill="white" size={"35px"} />
        </a>

        <GmailButton />
      </div>
    </div>
  );
}
