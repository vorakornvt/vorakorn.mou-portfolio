import { motion } from "framer-motion";
import ProjectTag from "../../src/assets/Asset13.svg";

const projects = [
  {
    id: 1,
    name: "Project Name 1",
    description: "Project description for project 1.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzoPuARTLpGDSS6EdjrwNY2TEDnpzNGWzuaw&s",
    technologies: ["JSX", "CSS", "CSS.TS", "HTML"],
    mockupLink: "#",
    codeLink: "#",
  },
  {
    id: 1,
    name: "Project Name 1",
    description: "Project description for project 1.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzoPuARTLpGDSS6EdjrwNY2TEDnpzNGWzuaw&s",
    technologies: ["JSX", "CSS", "CSS.TS", "HTML"],
    mockupLink: "#",
    codeLink: "#",
  },
  {
    id: 1,
    name: "Project Name 1",
    description: "Project description for project 1.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzoPuARTLpGDSS6EdjrwNY2TEDnpzNGWzuaw&s",
    technologies: ["JSX", "CSS", "CSS.TS", "HTML"],
    mockupLink: "#",
    codeLink: "#",
  },
  {
    id: 1,
    name: "Project Name 1",
    description: "Project description for project 1.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzoPuARTLpGDSS6EdjrwNY2TEDnpzNGWzuaw&s",
    technologies: ["JSX", "CSS", "CSS.TS", "HTML"],
    mockupLink: "#",
    codeLink: "#",
  },
  {
    id: 1,
    name: "Project Name 1",
    description: "Project description for project 1.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzoPuARTLpGDSS6EdjrwNY2TEDnpzNGWzuaw&s",
    technologies: ["JSX", "CSS", "CSS.TS", "HTML"],
    mockupLink: "#",
    codeLink: "#",
  },
  {
    id: 1,
    name: "Project Name 1",
    description: "Project description for project 1.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzoPuARTLpGDSS6EdjrwNY2TEDnpzNGWzuaw&s",
    technologies: ["JSX", "CSS", "CSS.TS", "HTML"],
    mockupLink: "#",
    codeLink: "#",
  },
];

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
                <p className="text-sm mt-2 text-center">
                  {project.description}
                </p>
                <div className="flex flex-wrap justify-center mt-2 space-x-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="text-fuchsia-200  border-1 px-2 py-1 rounded-full text-xs"
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
                  <motion.a
                    href={project.mockupLink}
                    className="px-3 py-2 text-black bg-fuchsia-200 text-xs rounded-lg"
                    initial={{ opacity: 1 }}
                    whileHover={{ opacity: 0.5 }}
                  >
                    MOCKUP
                  </motion.a>
                  <motion.a
                    href={project.codeLink}
                    className="px-3 py-2 text-black bg-fuchsia-200 text-xs rounded-lg"
                    initial={{ opacity: 1 }}
                    whileHover={{ opacity: 0.5 }}
                  >
                    CODE
                  </motion.a>
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
