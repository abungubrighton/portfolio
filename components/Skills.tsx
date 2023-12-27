import { motion } from "framer-motion";
import Skill from "./Skill";

type Props = {}

function Skills({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{duration:1.5}}
      className="sm:relative flex flex-col
      text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen
      justify-center xl:space-y-0 mx-auto items-center
      ">
      <h3 className="sm:absolute sm:top-24 uppercase tracking-[20px]  text-gray-500  text-2xl">Skills</h3>
      <h3 className="sm:absolute sm:top-36 uppercase tracking-[3px] text-gray-500 text-sm">Hover over a skill for current proficiency</h3>
      <div className="grid grid-cols-2 gap-1 md:grid-cols-6 md:gap-5 sm:grid-cols-4 sm:gap-2 ">
        <Skill directionLeft={true} skillName="Django" skillUrl="/tech/django-2.png" skillPercentage={95} />
        <Skill directionLeft={true} skillName="ReactJS" skillUrl="/tech/react.png" skillPercentage={90} />
        <Skill directionLeft={true} skillName="NextJS" skillUrl="/tech/next.png" skillPercentage={88} />
        <Skill directionLeft={true} skillName="Typescript" skillUrl="/tech/typescript.png" skillPercentage={80} />
        <Skill directionLeft={true} skillName="Tailwind css" skillUrl="/tech/tailwind.png" skillPercentage={90} />
        <Skill directionLeft={true} skillName="PostgreSql" skillUrl="/tech/postgres.png" skillPercentage={90} />
        <Skill skillName="Flutter" skillUrl="/tech/flutter.png" skillPercentage={90} />
        <Skill skillName="React Native" skillUrl="/tech/react-native.png" skillPercentage={90} />
        <Skill skillName="Firebase" skillUrl="/tech/firebase.png" skillPercentage={80} />
        <Skill skillName="GCP" skillUrl="/tech/gcp.png" skillPercentage={80} />
        <Skill skillName="AWS" skillUrl="/tech/aws.jpeg" skillPercentage={80} />
        <Skill skillName="Tensorflow" skillUrl="/tech/tensorflow.png" skillPercentage={80} />
        <Skill directionLeft={true} skillName="Pytorch" skillUrl="/tech/pytorch.png" skillPercentage={80} />
        <Skill directionLeft={true} skillName="Redis" skillUrl="/tech/redis.png" skillPercentage={80} />
        <Skill directionLeft={true} skillName="Docker" skillUrl="/tech/docker.jpeg" skillPercentage={80} />
        <Skill directionLeft={true} skillName="Kubernetes" skillUrl="/tech/kubernetes.png" skillPercentage={80} />
        
      </div>
      </motion.div>
  )
}

export default Skills