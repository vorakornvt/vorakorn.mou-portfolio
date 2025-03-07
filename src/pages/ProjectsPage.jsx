import ProjectTag from "../../src/assets/Asset13.svg";
import { motion } from "motion/react";

function ProjectsPage() {
  return (
    <div className="bg-black">
      <div
        className="flex pb-1 justify-center "
        style={{
          borderRadius: "10px",
          overflow: "hidden",
          border: "solid 0.5px white",
          height: "600px",
        }}
      >
        <div className="m-2 ">
          <div className="m-5">
            <img
              alt="Project"
              src={ProjectTag}
              className="h-3 flex justify-center mx-auto"
            />
          </div>
          <div className="group mx-2 mt-3 max-h-60  grid max-w-screen-lg grid-cols-1 space-x-8 overflow-hidden rounded-lg  text-white shadow transition hover:shadow-lg sm:mx-auto sm:grid-cols-5">
            <a
              href="#"
              className="col-span-2 text-left text-white hover:text-gray-100"
            >
              <div className="group relative h-full w-full overflow-hidden">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzoPuARTLpGDSS6EdjrwNY2TEDnpzNGWzuaw&s"
                  alt="Unity course image"
                  className=" mx-auto mt-4 ms-2   bg-cover p-2  border rounded-md object-cover text-gray-700 "
                />
              </div>
            </a>
            <div className="col-span-3 flex flex-col text-wrap space-y-0 pr-8 text-left">
              <p className="mt-3  overflow-hidden text-lg font-main">
                How to make open world with C# in Unity
              </p>
              <p className="overflow-hidden text-wrap font-main text-md">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna .
              </p>
              <p href="#" className="text-sm font-main text-fuchsia-100">
                technologies
              </p>

              <div className="flex flex-col text-gray-700 sm:flex-row">
                <div className="flex h-fit space-x-2 text-sm font-medium">
                  <div className="rounded-full bg-green-100 px-2 py-0.5 text-green-700">
                    JSX
                  </div>
                  <div className="rounded-full bg-blue-100 px-2 py-0.5 text-blue-700">
                    CSS
                  </div>
                  <div className="rounded-full bg-blue-100 px-2 py-0.5 text-blue-700">
                    CSS.TS
                  </div>
                  <div className="rounded-full bg-orange-100 px-2 py-0.5 text-orange-700">
                    HTML
                  </div>
                </div>
              </div>
              <div className="pt-3 flex justify-center">
                {" "}
                <motion.a
                  href="#"
                  className="font-main !text-fuchsia-200 me-5 w-[150px]  text-center rounded-[30px] px-3 py-2 text-md border font-light"
                  initial={{ opacity: 1 }}
                  whileHover={{ opacity: 0.5 }}
                >
                  MOCKUP
                </motion.a>
                <motion.a
                  href="#"
                  className="font-main !text-fuchsia-200 w-[150px]  text-center rounded-[30px] px-3 py-2 text-md border font-light"
                  initial={{ opacity: 1 }}
                  whileHover={{ opacity: 0.5 }}
                >
                  CODE
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectsPage;
