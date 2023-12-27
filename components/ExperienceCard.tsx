import { motion } from "framer-motion";

type Experience = {
  companyLogoUrl: string;
  companyName: string;
  position: string;
  mainResponsibility: string;
  responsibilities: any[];
  technologies: any[];

};

type Props = {
  experience: Experience; // Assuming 'experience' is an object with 'title' and 'description' fields
};

function ExperienceCard({ experience }: Props) {
  return (
    <article
      className="flex flex-col rounded-lg 
      items-center space-y-7 flex-shrink-0 
      w-[415px]
      sm:w-[500px] md:w-[600px] xl:[900px] snap-center
      bg-[#292929] p-10 hover:opacity-100 opacity-40
      cursor-pointer overflow-hidden transition-opacity duration-200
      "
    >
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        src={experience.companyLogoUrl}
        alt="Africa Code Week"
        className="w-32 h-32 rounded-full xl:w-[200px]
              xl:h-[200px] object-cover object-center"
      />
      <div className="p-0 md:px-10">
        <h4 className="text-4xl font-light"> {experience.companyName}</h4>
        <p className="font-bold font-2xl mt-1"> {experience.position}</p>
        <div className="flex space-x-2 my-2">
          {experience.technologies.map(techLogoUrl => (
            <img
              className="w-10 h-10 rounded-full object-cover"
              src={techLogoUrl}
              alt=""
              key={techLogoUrl}
            />
            
          ))}
        </div>
        <p className="uppercase py-5 text-gray-300">
          {experience.mainResponsibility}
        </p>
        <ul className="list-disc space-y-4 ml-5  text-lg">
          {experience.responsibilities.map((responsibility) => (
            <li key={responsibility}>{responsibility}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
