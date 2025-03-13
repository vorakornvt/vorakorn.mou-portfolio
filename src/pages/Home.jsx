import Header from "../components/layout/Header";

import WorkGrid from "../components/features/Workgrid";
import Narrow from "../components/common/Narrow";
import ProjectsPage from "./ProjectsPage";
import AboutPage from "./AboutPage";
import Footer from "../components/layout/Footer";

export default function Home() {
  return (
    <div className="absolute inset-0 h-full w-full bg-black">
      <header className="absolute inset-x-0 top-0 z-50">
        <Header />
      </header>

      <div className="relative isolate px-6 pt-7 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-1 sm:flex sm:justify-center">
            <p className="mt-8 text-lg font-main font-light text-pretty text-fuchsia-200 sm:text-xl/8">
              HI, I&apos;M
            </p>
          </div>
          <div className="text-center">
            <p className="text-white font-brand  tracking-wide  sm:text-[60px] max-sm:text-[40px]  lg:text-[80px]">
              VORAKORN
            </p>

            <p className="mt-8 text-lg font-main font-light text-pretty text-fuchsia-200 sm:text-xl/8">
              YOUR FAVOERITE CREATIVE DEVERLOPER
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6"></div>
          </div>
        </div>
        <div className="absolute w-full items-center pt-170 inset-x-0 top-0 z-50">
          <WorkGrid />
          <Narrow />
          <ProjectsPage />
          <Narrow />
          <AboutPage />
          <Narrow />
          <Footer />
        </div>
      </div>
    </div>
  );
}
