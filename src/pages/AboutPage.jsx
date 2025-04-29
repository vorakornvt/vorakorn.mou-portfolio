import AboutmeTag from "../../src/assets/Asset14.svg";
import AboutmePic from "../../src/assets/BGob2.png";
import { motion } from "motion/react";
import Timeline from "../components/features/Timeline";

function AboutPage() {
  return (
    <div>
      <div className="bg-black text-white flex flex-col items-center justify-center p-6">
        <img
          alt="Project"
          src={AboutmeTag}
          className="h-4 z-1  mb-5 mt-5 mx-auto"
        />

        {/* First Row */}
        <div className="w-full max-w-5xl flex flex-col md:flex-row gap-6">
          {/* Left Box */}
          <div className="md:w-1/2 flex flex-col justify-center p-4">
            <p className="font-brand z-1 sm:text-[35px] max-sm:text-[35px] lg:text-[55px]">
              VORAKORN TAWEETAWON
            </p>
            <p className="text-justify z-1 mt-4 text-sm md:text-lg font-main">
              I’m a designer with expertise in web development, enabling me to
              craft seamless, interactive digital experiences. My background in
              design brings concepts to life with depth and precision, making
              the fusion of technology and creativity my true specialty.
            </p>
          </div>

          {/* Right Box */}
          <div className="md:w-1/2 z-1 flex justify-center">
            <img
              src={AboutmePic}
              alt="About me"
              className="w-full max-w-md rounded-lg "
            />
          </div>
        </div>

        {/* Second Row */}
        <div className="bg-black  text-white flex flex-col items-center justify-center">
          <div className="flex items-center justify-center gap-x-6">
            <motion.a
              href="#"
              className="font-main !text-fuchsia-200 w-[150px] rounded-[30px] px-3 py-2 text-lg border font-light relative"
              initial={{ opacity: 1 }}
              whileHover={{ opacity: 0.5 }}
            >
              CV
            </motion.a>
          </div>
          <p className="text-center mt-1  text-[10px]  font-main">
            For full details of my experience
          </p>
        </div>
        <Timeline />
      </div>
    </div>
  );
}

export default AboutPage;
