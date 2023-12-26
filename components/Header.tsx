import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {}

function Header({}: Props) {
    return (
      <header className="sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-20 p-5 xl:items-center">
            <motion.div
                className="flex flex-row items-center"
                initial={{
                    x: -500,
                    opacity: 0,
                    scale: 0.5,
                }}

                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1,
                }}
                transition={{
                    duration:1.5,
                }}
            >
            {/* Social Icons */}
            <SocialIcon target="_blank" url="https://github.com/abungubrighton" fgColor="grey" bgColor="transparent"/>
            <SocialIcon target="_blank" url="https://www.linkedin.com/in/abungu-b-697755161/" fgColor="grey" bgColor="transparent"/>
            <SocialIcon target="_blank" url="https://www.facebook.com/brighton.majiwa" fgColor="grey" bgColor="transparent"/>
        
            
            </motion.div>
            {/* Contact Me Link */}
            <motion.div
                className="flex flex-row items-center cursor-pointer text-gray-300"
                initial={{
                    x: 500,
                    opacity: 0,
                    scale:0.5
                }}

                animate={{
                    x: 0,
                    opacity: 1,
                    scale:1
                }}
                transition={{
                    duration:1.5
                }}
            >   
                <SocialIcon className="cursor-pointer" network="email" fgColor="grey" bgColor="transparent" />
                <Link href="#contact">
                    <div className="uppercase hidden text-sm text-gray-400 md:inline-flex">Get In Touch</div>
                </Link>
            </motion.div>
            
      </header>
  )
}

export default Header