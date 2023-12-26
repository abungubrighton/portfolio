import { motion } from "framer-motion";
import { projects } from "../data";
import Link from "next/link";
type Props = {};

function Projects({}: Props) {
  return (
    <div className="relative h-screen flex flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
      <h3 className="absolute top-24 uppercase tracking-[20px]  text-gray-500  text-2xl">
        Projects
      </h3>
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        {/* Each of the projects being mapped out */}
        {projects.map((project, i) => (
          <motion.div
            initial={{
              y: -300,
              opacity: 0,
            }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p44 h-screen "
          >
            <img
              src={project.projectImageUrl}
              alt=""
              className="w-full h-1/2 object-contain"
            />
            <div className="space-y-5 px-0 md:x-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                <span className="underline mr-1 decoration-[#F7AB0A]/50">
                  Case study {i + 1} of {projects.length}:
                </span>
                {project.projectName}
                <div className="p-0 m-0">
                  <Link
                    className="text-center text-sm underline"
                    href={project.projectLink}
                    target="_blank"
                  >
                    project link
                  </Link>
                </div>
              </h4>
              {/* project summary */}
              <p className="text-lg text-center md:text-left m-0 p-0 ">
                {project.projectSummary}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="w-full absolute bg-[#F7AB0A]/10 left-0 top-[30%] h-[500px] -skew-y-12" />
    </div>
  );
}

export default Projects;
