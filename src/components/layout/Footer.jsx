import { FaGithub } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-black text-white flex flex-col items-center pt-5 justify-center p-6">
      {/* Social Media Icons */}
      <div className="flex z-1 pb-3 pt-2 space-x-6">
        <a
          href="https://linkedin.com/in/yourhandle"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin fill="white" size={"20px"} />
        </a>

        <a
          href="https://github.com/yourhandle"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub fill="white" size={"20px"} />
        </a>

        <a
          href="https://github.com/yourhandle"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGoogle fill="white" size={"20px"} />
        </a>
      </div>

      <p className="font-main text-[11px] z-1 text-white">
        © Copyright {new Date().getFullYear()} — vorakorn taweetawon — Design &
        Frontend{" "}
      </p>
    </div>
  );
}

export default Footer;
