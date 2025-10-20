import React from 'react'
import { Link } from 'react-router-dom'
import Projects from './Projects'
import Contact from './Contact'
import About from './About'

const Hero = () => {
  return (
    <>
      <section id='home' className='min-h-screen flex flex-col space-y-20 items-center justify-center relative'>
        <div className='max-w-4xl text-center z-10 px-4'>
          <h1 className='text-2xl md:text-6xl font-bold mb-6 leading-right bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent'>
            Hi I'm Johnson Kanyi
          </h1>

          <p className='text-gray-400 text-lg mb-8 mx-auto max-w-lg'>
            CS Student passionate about building scalable full-stack applications and automating DevOps pipelines. Bridging development and operations through cloud-native solutions.
          </p>
        
          <div className='flex justify-center space-x-4'>
            <Link to="/projects" className='bg-blue-500 font-medium px-6 py-3 text-white rounded-lg transition-all relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(5,130,246,0.4)]'>View my projects</Link>
            <Link to="/contact" className='border border-blue-500/50 text-blue-500 font-medium px-6 py-3 rounded-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(5,130,246,0.4)] hover:bg-blue-500/10'>Contact me</Link>
          </div>
        </div>
      </section>

      <section id='about' className='py-20'>
        <About />
      </section>

      <section id='projects' className='py-20'>
        <Projects />
      </section>
    </>
  )
}

export default Hero