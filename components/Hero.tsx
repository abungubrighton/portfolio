import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Link from "next/link";

type Props = {}

const Hero = (props: Props) => {
    const [text, count] = useTypewriter({
        words: [
            "Hi,The Name's Brighton Otieno",
            "Web Developer",
            "Mobile Developer",
            "Data Viz Enthusiast",
            "Machine Learning Enthusiast",
        ],
        loop: true,
        delaySpeed:2000,
    })
  return (
      <div className="sm:h-screen  h-[120vh] flex flex-col items-center  md:space-y-8 justify-center text-center overflow-hidden my-20">
          <BackgroundCircles />
          <img className="relative rounded-full h-32 w-32 mx-auto object-cover" src="/images/brighton.jpeg" alt="Brighton's image" />
          <div className="z-20">
              <h2 className="text-sm uppercase pb-2  text-gray-500 tracking-[15px]">Software  Engineer</h2>
            <h1>
                <span className=" text-2xl md:text-5xl lg:text-6xl font-semibold px-10">{text}</span>
                <Cursor cursorColor="#F7AB0A" />
            </h1>
              
              <div className="pt-5">
                  <Link href="#about">
                    <button className="heroButton">About</button>
                  </Link>
                  <Link href="#experience">
                    <button className="heroButton">Experience</button>
                  </Link>
                  <Link href="#skills">
                    <button className="heroButton">Skills</button>
                  </Link>
                  <Link href="#projects">
                    <button className="heroButton">Projects</button>
                  </Link>
            </div>
          </div>
      </div>
  )
}

export default Hero;