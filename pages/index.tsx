import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen z-0 overflow-scroll snap-y snap-mandatory' >
      <Head>
        <title>Brighton's Portfolio</title>
      </Head>
      {/* Header */}
      <Header />
      {/* Hero */}
      <section id="hero" className='snap-center'>
        <Hero />
      </section>
      {/* About */}
      {/* Experience */}
      {/* Skills */}
      {/* Projects */}
      {/* Contact Me */}
    </div>
  )
}
