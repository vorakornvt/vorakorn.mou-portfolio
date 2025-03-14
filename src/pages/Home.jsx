import Header from "../components/layout/Header";
import WorkGrid from "../components/features/Workgrid";
import Narrow from "../components/common/Narrow";
import ProjectsPage from "./ProjectsPage";
import AboutPage from "./AboutPage";

export default function Home() {
  return (
    <div className="relative h-full w-full bg-black">
      {/* Header (Keep Only One) */}
      <header className="fixed inset-x-0 top-0 z-50 bg-transparent backdrop-blur-md">
        <Header />
      </header>

      {/* Decorative Background */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 z-0 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        />
      </div>

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
              YOUR FAVORITE CREATIVE DEVELOPER
            </p>
          </div>
        </div>

        {/* Other Sections */}
        <div className="relative w-full items-center">
          <WorkGrid />
          <Narrow />
          <ProjectsPage />
          <Narrow />
          <AboutPage />
          <Narrow />
        </div>
      </div>
    </div>
  );
}
