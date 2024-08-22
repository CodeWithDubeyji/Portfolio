import React from 'react'
import { motion } from 'framer-motion'
import about from '../constants/parallax_image.jpg'
const About = () => {
  return (
    <div className='border-b border-neutral-900 pb-16 lg:mb-36'>
      <motion.h1 initial={{opacity: 0, y: -100}} whileInView={{opacity: 1, y: 0}} transition={{duration: 1.5, delay: 0}} className="my-20 text-center text-4xl">About <span className=" text-neutral-500">Me</span></motion.h1>
      <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
                <motion.div initial={{opacity: 0, x: -100}} whileInView={{opacity: 1, x: 0}} transition={{duration: 1, delay: 0}} className="flex items-center justify-center">
                    <img  className=" w-4/5 rounded-full lg:rounded-3xl" src={about} alt="aboutPic" />
                </motion.div>
            </div>
            <div className='w-full lg:w-1/2 my-auto'>
                <div className='flex justify-center lg:justify-end'>
                    <motion.p initial={{opacity: 0, x: 200}} whileInView={{opacity: 1, x: 0}} transition={{duration: 1, delay: 0}} className='my-2 py-6 max-w-xl text-wrap text-xl -tracking-tight'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus facilis officiis fugiat magnam laboriosam quae aperiam earum, quo veniam sit nobis, voluptatem illo autem accusantium consequuntur assumenda est optio fuga Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque praesentium impedit, excepturi consectetur iusto facere commodi placeat sed velit dignissimos error quas eum, natus id, sint minima facilis iste nisi.</motion.p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About