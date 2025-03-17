import Header from "../components/layout/Header";
import Narrow from "../components/common/Narrow";
import ProjectsPage from "./ProjectsPage";
import AboutPage from "./AboutPage";
import AnimatedBackground from "../components/features/AnimatedBackground";

export default function Home() {
  return (
    <div className="relative h-full w-full bg-black">
      {/* Header (Keep Only One) */}
      <header className="fixed inset-x-0 top-0 z-50 bg-transparent backdrop-blur-md">
        <Header />
      </header>

      <AnimatedBackground />

      {/* Main Content */}
      <div className="relative isolate px-6 pt-24 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-46">
          <div className="hidden sm:mb-1 sm:flex sm:justify-center">
            <p className="mt-8 text-lg font-main font-light text-pretty text-fuchsia-200 sm:text-xl/8">
              HI, I&apos;M
            </p>
          </div>
          <div className="text-center">
            <p className="text-white font-brand tracking-wide sm:text-[60px] max-sm:text-[40px] lg:text-[80px]">
              VORAKORN
            </p>
            <p className="mt-8 text-lg font-main font-light text-pretty text-fuchsia-200 sm:text-xl/8">
              Web Developer & Designer | Merging Code with Art.
            </p>
          </div>
        </div>

        {/* Other Sections */}
        <div className="relative w-full items-center">
          {/* <WorkGrid /> */}

          <ProjectsPage />
          <Narrow />
          <AboutPage />
          <Narrow />
        </div>
      </div>
    </div>
  );
}
