import { motion } from "framer-motion";

type Props = {}

function BackgroundCircles({}: Props) {
  return (
      <motion.div
          className=" relative flex items-center justify-center"
          initial={{
              opacity: 0,
          }}

          animate={{
              scale: [1, 2, 2, 3, 1],
              opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
              borderRadius:["20%","20%","50%","80%","20%"]
          }}
          transition={{
              duration:2.5
          }}
      >
          <div className="border border-[#333333] h-[200px] w-[200px] rounded-full animate-ping mt-52 absolute"/>
          <div className="border border-[#333333] h-[300px] w-[300px] rounded-full  mt-52 absolute"/>
          <div className="border border-[#333333] h-[500px] w-[500px] rounded-full  mt-52 absolute"/>
          <div className="border border-[#F7AB0A] h-[650px] w-[650px] rounded-full opacity-20 animate-pulse mt-52 absolute"/>
          <div className="border border-[#333333] h-[800px] w-[800px] rounded-full  mt-52 absolute"/>

    </motion.div>
  )
}

export default BackgroundCircles