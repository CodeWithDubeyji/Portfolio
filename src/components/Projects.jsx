import React from 'react'
import {PROJECTS} from '../constants/index.js'
import { motion } from 'framer-motion'
const Projects = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <motion.h1 initial={{opacity: 0, y: -100}} whileInView={{opacity: 1, y: 0}} transition={{duration: 1.5, delay: 0}} className="my-20 text-center text-4xl">Projects</motion.h1>
      <div>{PROJECTS.map((project, index) => (
          <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
            <div className='w-full lg:w-1/4'>
            <motion.img initial={{opacity: 0, x: -100}} whileInView={{opacity: 1, x: 0}} transition={{duration: 1, delay: 0}} src={project.image} 
            width={200} 
            height={200} 
            alt={project.title} 
            className='mb-6 rounded'
            />
            </div>
            <motion.div initial={{opacity: 0, x: 100}} whileInView={{opacity: 1, x: 0}} transition={{duration: 1, delay: 0}}  className='w-full max-w-xl lg:w-3/4'>
              <motion.h6 className='mb-2 font-semibold'>{project.title}</motion.h6>
              <motion.p className='mb-4 '>{project.description}</motion.p>
              {project.technologies.map((item, index) => (
                            <motion.span className="mt-2 rounded px-2 py-1 text-purple-800 text-sm font-medium" key={index}>{item}</motion.span>
                        ))}
            </motion.div>
          </div>
        ))}
        </div>
    </div>
  )
}

export default Projects