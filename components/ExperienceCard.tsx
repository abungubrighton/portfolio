import {motion} from "framer-motion"

type Props = {}

function ExperienceCard({}: Props) {
  return (
      <article className="flex flex-col rounded-lg 
      items-center space-y-7 flex-shrink-0
      w-[500px] md:w-[600px] xl:[900px] snap-center
      bg-[#292929] p-10 hover:opacity-100 opacity-40
      cursor-pointer overflow-hidden transition-opacity duration-200
      "
      >
          <motion.img
              initial={{y:-100,opacity:0}}
              transition={{ duration: 1.2 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{once:true}}
              src="/logos/acw.png" alt="Africa Code Week"
              className="w-32 h-32 rounded-full xl:w-[200px]
               xl:h-[200px] object-cover object-center
               "
          />
          <div className="p-0 md:px-10">
              <h4 className="text-4xl font-light">Africe Code Week</h4>
              <p className="font-bold font-2xl mt-1">Skills Trainer</p>
              <div className="flex space-x-2 my-2">
                  <img
                    className="w-10 h-10 rounded-full"
                      src="/tech/tailwind.png" alt=""
                  />
                  <img
                    className="w-10 h-10 rounded-full"
                      src="/tech/tailwind.png" alt=""
                  />
                  <img
                    className="w-10 h-10 rounded-full"
                      src="/tech/tailwind.png" alt=""
                  />
                  <img
                    className="w-10 h-10 rounded-full"
                      src="/tech/tailwind.png" alt=""
                  />
                
              </div>
              <p className="uppercase py-5 text-gray-300">
                  Trained Teachers and Student
                  under the Young Science Society of Kenya
                  on programming skills
              </p>
              <ul className="list-disc space-y-4 ml-5  text-lg">
                <li>Summary Points Summary Points Summary Points Summary Points</li>
                <li>Summary Points Summary Points Summary Points Summary Points</li>
                <li>Summary Points Summary Points Summary Points Summary Points</li>
                <li>Summary Points Summary Points Summary Points Summary Points</li>
                <li>Summary Points Summary Points Summary Points Summary Points</li>
              </ul>
          </div>
      </article>
  )
}

export default ExperienceCard