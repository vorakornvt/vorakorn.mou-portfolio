import { motion } from "framer-motion";
import { useState } from "react";

const techColors = {
  JSX: "bg-purple-200 text-black text-[10px]",
  CSS: "bg-blue-200 text-black text-[10px]",
  "CSS.TS": "bg-indigo-200 text-black text-[10px]",
  HTML: "bg-orange-200 text-black text-[10px]",
  PHP: "bg-teal-200 text-black text-[10px]",
  MongoDB: "bg-green-200 text-black text-[10px]",
  "Styled Components": "bg-yellow-200 text-black text-[10px]",
  TypeScript: "bg-lime-200 text-black text-[10px]",
  Firebase: "bg-red-200 text-black text-[10px]",
  Bootstrap: "bg-sky-200 text-black text-[10px]",
  MySql: "bg-rose-200 text-black text-[10px]",
  Tailwind: "bg-pink-200 text-black text-[10px]",
  API: "bg-green-100 text-black text-[10px]",
  NextJS: "bg-purple-200 text-black text-[10px] ",
};

function RecentProject({ project }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="flex flex-wrap justify-center gap-4">
      <div
        className="relative min-w-[260px] sm:w-[300px] md:w-[400px] lg:w-[700px]  h-[200px] mx-auto mt-2"
        style={{ perspective: "1000px" }}
        onMouseEnter={() => setIsFlipped(true)}
        onMouseLeave={() => setIsFlipped(false)}
      >
        <div
          className={`relative w-full h-full transition-transform duration-500`}
          style={{
            transformStyle: "preserve-3d",
            transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
          }}
        >
          {/* Front Side */}
          <div
            className="absolute inset-0 flex flex-col justify-center items-center bg-black text-white p-4"
            style={{
              backfaceVisibility: "hidden",
              borderRadius: "10px",
              border: "solid 0.5px white",
            }}
          >
            <p className="text-lg font-main font-semibold">{project.name}</p>
            <p className="text-[12px]/4 w-[250px] text-justify mt-2">
              {project.description}
            </p>
            <div className="flex flex-wrap justify-center mt-2 space-x-2">
              {project.technologies?.map((tech, index) => (
                <span
                  key={index}
                  className={`px-2 py-1 rounded-full text-xs border border-white ${
                    techColors[tech] || "bg-purple-200 text-black text-[10px]"
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Back Side */}
          <div
            className="absolute inset-0 flex flex-col justify-end border border-fuchsia-200 items-center bg-black text-white rounded-lg p-4"
            style={{
              transform: "rotateY(180deg)",
              backfaceVisibility: "hidden",
            }}
          >
            <div className="absolute inset-0 bg-black/50 rounded-lg">
              <img
                src={project.image}
                alt="Project Preview"
                className="h-full w-full object-cover rounded-md"
              />
            </div>
            <div className="relative z-10 flex space-x-2 mb-4">
              {project.mockupLink && (
                <motion.a
                  href={project.mockupLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 text-black bg-fuchsia-200 text-xs rounded-lg"
                  initial={{ opacity: 1 }}
                  whileHover={{ opacity: 0.5 }}
                >
                  Live Demo
                </motion.a>
              )}
              {project.codeLink && (
                <motion.a
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 text-black bg-fuchsia-200 text-xs rounded-lg"
                  initial={{ opacity: 1 }}
                  whileHover={{ opacity: 0.5 }}
                >
                  GITHUB
                </motion.a>
              )}
              {project.NPM && (
                <motion.a
                  href={project.NPM}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 text-black bg-orange-200 text-xs rounded-lg"
                  initial={{ opacity: 1 }}
                  whileHover={{ opacity: 0.5 }}
                >
                  NPM
                </motion.a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecentProject;
