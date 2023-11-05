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
        ]
    })
  return (
      <div>
          <BackgroundCircles />
          <h1>
              <span>{text}</span>
              <Cursor cursorColor="#F7AB0A" />
        </h1>
      </div>
  )
}

export default Hero;