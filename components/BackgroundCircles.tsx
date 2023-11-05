import { motion } from "framer-motion";

type Props = {}

function BackgroundCircles({}: Props) {
  return (
    <div className=" relative flex items-center justify-center">
          <div className="border border-[#333333] h-[200px] w-[200px] rounded-full animate-ping mt-52 absolute"/>
          <div className="border border-[#333333] h-[300px] w-[300px] rounded-full  mt-52 absolute"/>
          <div className="border border-[#333333] h-[500px] w-[500px] rounded-full  mt-52 absolute"/>
          <div className="border border-[#F7AB0A] h-[650px] w-[650px] rounded-full opacity-20 animate-pulse mt-52 absolute"/>
          <div className="border border-[#333333] h-[800px] w-[800px] rounded-full  mt-52 absolute"/>

    </div>
  )
}

export default BackgroundCircles