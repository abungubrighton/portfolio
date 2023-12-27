import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import {experiences} from '../data'
type Props = {}

function WorkExperience({}: Props) {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{duration:1.5}}
      className="
      h-screen flex sm:relative overflow-hidden flex-col
      text-left md:flex-row max-w-full w-full px-10
      justify-evenly mx-auto items-center  sm:space-y-40
      "
    >
      <h3 className="
      sm:absolute sm:top-20 uppercase tracking-[20px]
      text-gray-500 text-2xl
      "> Experience</h3>

      {/* Experience Cards */}
      <div className="w-full flex space-x-5 lg:justify-center
      overflow-x-scroll overflow-y-hidden p-10 snap-x snap-mandatory 
      scrollbar scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80
      ">
        {experiences.map(experience => (
          <ExperienceCard key={experience.companyName} experience={experience} />
        
        ))}
        
      </div>
    </motion.div>
  )
}

export default WorkExperience