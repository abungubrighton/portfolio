import { motion } from "framer-motion";
type Props = {};

const About = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col items-center relative h-screen text-center
           md:text-left md:flex-row max-w-7xl px-10 justify-evenly
           mx-auto space-y-40
           "
    >
      <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 1,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{ once: true }}
        src="/images/brighton-2.jpg"
        alt="brighton image"
        className="mb-30 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover
              md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]
              "
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
          background
        </h4>
        <p className="text-base">
          Hey there, I’m Abungu Brighton Otieno, a Certified Full Stack Mobile &
          Web Developer and budding Machine Learning Engineer. You can usually
          find me diving deep into code or exploring the intricacies of AI, all
          while sipping on a good cup of coffee.
        </p>
        <p className="text-base">
          I’m all about the fusion of creativity and functionality, crafting
          seamless applications using an arsenal of technologies such as Django,
          ReactJS,NextJS,Typescript, Postgresql,Kubernetes,GCP and AWS. My knack
          for both cloud, Front-End and Back-End development allows me to weave
          together data-driven, visually captivating web and mobile applications
          that stand out.
        </p>
        <p className="text-base">
          Currently, I’m on an exciting journey honing my AI skills through an
          ongoing AWS-Udacity Machine Learning scholarship, leveraging concepts
          from distributed computing, real-time data processing, and more to
          solve complex dataset puzzles.
        </p>
        <p className="text-base">
          Apart from my coding escapades, I wear my volunteer hat as the Lead
          Skills Trainer at RCED AFRICA, where I’ve been empowering teachers and
          students in Kisumu and Nairobi counties with computational skills and
          nurturing the next generation of tech enthusiasts.
        </p>
      </div>
    </motion.div>
  );
};

export default About;
