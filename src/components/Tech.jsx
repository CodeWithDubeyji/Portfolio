import React from 'react'
import { RiReactjsLine } from "react-icons/ri"
import { SiMongodb } from "react-icons/si"
import { FaNodeJs } from "react-icons/fa"
import { SiExpress } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { motion } from 'framer-motion';

const iconVariants = (duration) => ({
  initial: {
      y:-15
  },
  animate: {
      y:[15, -15],
      transition: {
          duration: duration,
          ease: "linear",
          repeat: Infinity,
          repeatType: "reverse"
      }
  }
})

const Tech = () => {
  return (
    <div className='border-b border-neutral-900 pb-16 lg:mb-36'>
      <motion.h1 initial={{ opacity: 0, y: -100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1.5, delay: 0 }} className="my-20 text-center text-4xl">Technologies</motion.h1>

      <motion.div whileInView={{opacity: 1, x: 0}} initial={{opacity: 0, x: -100}} transition={{duration: 1.5, delay: 0}} className="flex items-center justify-center gap-2">

        <motion.div variants={iconVariants(1)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiReactjsLine className="text-2xl lg:text-7xl md:text-4xl sm:text-3xl text-cyan-300" />
        </motion.div>

        <motion.div variants={iconVariants(1.25)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4 bg-[#ff958a] hidden lg:block">
        </motion.div>

        <motion.div variants={iconVariants(1.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiMongodb className=" text-green-500 text-2xl lg:text-7xl md:text-4xl sm:text-3xl" />
        </motion.div>

        <motion.div variants={iconVariants(1.75)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4 bg-[#ff958a]  hidden lg:block">
        </motion.div>

        <motion.div variants={iconVariants(2)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaNodeJs className=" text-green-700 text-2xl lg:text-7xl md:text-4xl sm:text-3xl" />
        </motion.div>

        <motion.div variants={iconVariants(2.25)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4 bg-[#ff958a]  hidden lg:block">
        </motion.div>

        <motion.div variants={iconVariants(2.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiExpress className=" text-green-700 text-2xl lg:text-7xl md:text-4xl sm:text-3xl " />
        </motion.div>

        <motion.div variants={iconVariants(2.75)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4 bg-[#ff958a]  hidden lg:block">
        </motion.div>

        <motion.div variants={iconVariants(3)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiTailwindCssFill className=" text-[#38bdf8] text-2xl lg:text-7xl md:text-4xl sm:text-3xl" />
        </motion.div>

      </motion.div>
    </div>
  )
}

export default Tech