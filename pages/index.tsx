import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Head from "next/head";
import About from "@/components/About";
import WorkExperience from "@/components/WorkExperience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contactme from "@/components/Contactme";
import Highlights from "@/components/Highlights";
import Link from "next/link";



export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen z-0 overflow-y-scroll overflow-x-hidden snap-y snap-mandatory scrollbar scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
      <Head>
        <title>Brighton's Portfolio</title>
      </Head>
      {/* Header */}
      <Header />
      {/* Hero */}
      <section id="hero" className="mb-20">
        <Hero />
      </section>
      {/* About */}
      <section id="about" className="my-20">
        <About />
      </section>
      {/* Highlights */}
      <section id="highlights" className="my-20">
        <Highlights />
      </section>
      {/* Experience */}
      <section id="experience" className="my-30">
        <WorkExperience />
      </section>
      {/* Skills */}
      <section id="skills" className="my-20">
        <Skills />
      </section>
      {/* Projects */}
      <section id="projects" className="my-20">
        <Projects />
      </section>
      {/* Contact Me */}
      <section id="contact" className="mt-20">
        <Contactme />
      </section>

      <Link href="#hero">
        <footer className="sticky bottom-5  cursor-pointer">
          <div className="flex items-center justify-center ">
            <img className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer" src="/images/top.png" alt="image of arrow pointing up" /></div>
        </footer>
      </Link>
    </div>
  );
}
