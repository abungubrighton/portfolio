import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";

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
      <div className="h-screen flex flex-col items-center space-y-8 justify-center text-center overflow-hidden">
          <BackgroundCircles />
          <img className="relative rounded-full h-32 w-32 mx-auto object-cover" src="/images/brighton.jpeg" alt="Brighton's image" />
          <div>
              <h2 className="text-sm uppercase pb-2  text-gray-500 tracking-[15px]">Software  Engineer</h2>
            <h1>
                <span className="text-5xl lg:text-6xl font-semibold px-10">{text}</span>
                <Cursor cursorColor="#F7AB0A" />
            </h1>
              
          </div>
      </div>
  )
}

export default Hero;