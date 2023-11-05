import { SocialIcon } from "react-social-icons"

type Props = {}

function Header({}: Props) {
    return (
      <header className="stick top-0 flex items-start justify-between max-w-7xl mx-auto z-20 p-5 xl:items-center">
        <div className="flex flex-row items-center">
            {/* Social Icons */}
            <SocialIcon url="https://github.com/abungubrighton" fgColor="grey" bgColor="transparent"/>
            <SocialIcon url="https://github.com/abungubrighton" fgColor="grey" bgColor="transparent"/>
            <SocialIcon url="https://github.com/abungubrighton" fgColor="grey" bgColor="transparent"/>
            <SocialIcon url="https://github.com/abungubrighton" fgColor="grey" bgColor="transparent"/>
            
            </div>
            {/* Contact Me Link */}
            <div className="flex flex-row items-center cursor-pointer text-gray-300">
                <SocialIcon className="cursor-pointer" network="email" fgColor="grey" bgColor="transparent" />
                <div className="uppercase hidden text-sm text-gray-400 md:inline-flex">Get In Touch</div>
            </div>
            
      </header>
  )
}

export default Header