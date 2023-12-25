import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Head from "next/head";
import About from "@/components/About";
import WorkExperience from "@/components/WorkExperience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contactme from "@/components/Contactme";
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
      <section id="hero" className="snap-center">
        <Hero />
      </section>
      {/* About */}
      <section id="about" className="snap-center">
        <About />
      </section>
      {/* Experience */}
      <section id="experience" className="snap-center">
        <WorkExperience />
      </section>
      {/* Skills */}
      <section id="skills" className="snap-start">
        <Skills />
      </section>
      {/* Projects */}
      <section id="projects" className="snap-start">
        <Projects />
      </section>
      {/* Contact Me */}
      <section id="contact" className="snap-start">
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
