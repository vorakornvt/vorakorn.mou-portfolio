import { motion } from "framer-motion";
import ProjectTag from "../../src/assets/Asset13.svg";

const projects = [
  {
    id: 1,
    name: "Basic-Frontend",
    description:
      "a basic front-end React project, a work-in-progress with minimal content.",
    image: "../../src/assets/phpimage.png",
    technologies: ["JSX", "Bootstrap"],
    mockupLink: "#",
    codeLink: "https://github.com/vorakornvt/Basic-Frontend",
  },
  {
    id: 2,
    name: "GardenofEden-Website",
    description:
      "Modern Tech Stack –  built using React, Tailwind UI, Firebase (Firestore), and Motion for animations.",
    image: "../../src/assets/Untitled-5.png",
    technologies: ["JSX", "CSS.TS", "HTML", "Firebase"],
    mockupLink: "#",
    codeLink: "https://github.com/vorakornvt/GardenofEden-Website",
  },
  {
    id: 3,
    name: "Database-commercial-website",
    description:
      "The frontend is built with React.js and styled using Bootstrap, The backend, handling authentication, database management, and API requests.",
    image: "../../src/assets/Untitled-4.png",
    technologies: ["JSX", "Bootstrap", "MongoDB"],
    mockupLink: "#",
    codeLink: "https://github.com/vorakornvt/Database-commercial-website",
  },
  {
    id: 4,
    name: "PHP-based blog website",
    description:
      "PHP-based blog application. The project includes various PHP scripts , which can manage blog functionalities like post creation, editing, and storage.",
    image: "../../src/assets/Untitled-3.png",
    technologies: ["PHP", "Bootstrap", "MySql"],

    codeLink: "https://github.com/vorakornvt/PHP-Blog-website",
  },
  {
    id: 5,
    name: "UI Component",
    description:
      "NPM package for Reuseable Button & Alert & Alert dialog components.",
    image: "../../src/assets/Untitled-2.png",
    technologies: ["JSX", "CSS", "Styled Components"],
    mockupLink: "https://sync-documentation.onrender.com/",
    codeLink: "https://github.com/4DEVS-Holmesglen/4DEVS-SYNC-MAIN",
    NPM: "https://www.npmjs.com/package/@holmesdev/sync",
  },
  {
    id: 6,
    name: "Commercial website",
    description:
      "Modern coffee shop. This project showcases a crafted UI with responsive design, ensuring browsing experience across all devices.",
    image: "../../src/assets/Untitled-1.png",
    technologies: ["HTML", "CSS"],
    mockupLink: "https://thecaffeinatedowl.onrender.com",
    codeLink: "https://github.com/vorakornvt/TheCaffeinatedOwl",
  },
];

const techColors = {
  JSX: "bg-purple-200 text-black",
  CSS: "bg-blue-200 text-black",
  "CSS.TS": "bg-indigo-200 text-black",
  HTML: "bg-orange-200 text-black",
  PHP: "bg-teal-200 text-black",
  MongoDB: "bg-green-200 text-black",
  "Styled Components": "bg-yellow-200 text-black",
  TypeScript: "bg-lime-200 text-black",
  Firebase: "bg-red-200 text-black",
  Bootstrap: "bg-sky-200 text-black",
  MySql: "bg-rose-200 text-black",
};

function ProjectsPage() {
  return (
    <div className="bg-black flex flex-col items-center justify-center ">
      <img
        alt="Project"
        src={ProjectTag}
        className="h-4 mb-5 mt-5 flex justify-center mx-auto"
      />

      <div className="grid gap-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 h-[600px] sm:w-[450px] md:w-[800px] lg:w-[1050px] overflow-y-auto scrollbar-thin scrollbar-thumb-fuchsia-300 pt-2   scrollbar-track-black">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="relative min-w-[260px] sm:w-[260px] md:w-[300px] lg:w-[300px] h-[250px] mx-auto mt-2"
            style={{ perspective: "1000px" }} // Ensure correct 3D perspective
          >
            {/* Card Inner */}
            <motion.div
              className="relative w-full h-full sm:col-auto transition-transform duration-500 transform-style-3d group"
              whileHover={{ rotateY: 180 }} // Flip effect on hover
              style={{
                transformStyle: "preserve-3d",
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
                <p className="text-lg font-main font-semibold">
                  {project.name}
                </p>
                <p className="text-[12px]/4 w-[250px] text-justify mt-2 ">
                  {project.description}
                </p>
                <div className="flex flex-wrap justify-center mt-2 space-x-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className={`px-2 py-1 rounded-full text-xs border border-white ${
                        techColors[tech] || "bg-gray-500 text-white"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Back Side */}
              <div
                className="absolute inset-0 flex flex-col justify-end border border-fuchsia-200 items-center bg-black text-white rounded-lg p-4 "
                style={{
                  backgroundImage: `url(${project.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  transform: "rotateY(180deg)",
                  backfaceVisibility: "hidden",
                }}
              >
                <div className="absolute inset-0 bg-black/50 rounded-lg"></div>{" "}
                {/* Overlay for readability */}
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
                  {project.NPM && (
                    <motion.a
                      href={project.NPM}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-2 text-black bg-fuchsia-200 text-xs rounded-lg"
                      initial={{ opacity: 1 }}
                      whileHover={{ opacity: 0.5 }}
                    >
                      NPM
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default ProjectsPage;
