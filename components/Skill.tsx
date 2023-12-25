import { motion } from "framer-motion";

type Props = {
  directionLeft?: boolean
  skillUrl: string
  skillName: string
  skillPercentage: number
}

function Skill({directionLeft,skillUrl,skillPercentage,skillName}: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0
        }}
        transition={{ duration: 1 }}
        whileInView={{opacity:1,x:1}}
        src={`${skillUrl}`} alt=""
        className="rounded-full border
         border-gray-500 object-cover w-24 h-24
         xl:w-32 xl:h-32
         filter group-hover:grayscale transition duration-300 ease-in-out
         md:h-28 md:w-28
         "
      />
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out
      group-hover:bg-white h-24 w-24 xl:w-32 xl:h-32 md:h-28 md:w-28 rounded-full z-0
      ">
        <div className="flex flex-col items-center justify-center h-full">
          <p className="text-3xl font-bold text-black opacity-100">{skillPercentage}%</p>
          <p className="text-xl font-bold text-black opacity-100">{skillName}</p>

        </div>
      </div>
    </div>
  )
}

export default Skill