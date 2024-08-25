import React from 'react'
import { motion } from "framer-motion"
import pfp from '../constants/PFP.avif'
const Home = () => {
  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-20'>
      <div className=' flex flex-wrap'>
        <div className=' w-full lg:w-1/2'>
          <div className='flex flex-col items-center lg:text-start text-center lg:items-start'>
            <motion.h1 initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, type: "spring", stiffness: 100, damping: 10, ease: 'linear' }} className='pb-12 text-4xl font-thin tracking-tight lg:text-8xl md:text-6xl sm:text-5xl'>Gaurav Dubey</motion.h1>
            <motion.span initial={{ opacity: 0, y: -90 }}
              whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, type: "spring", stiffness: 100, damping: 10, ease: 'linear' }} className=' bg-gradient-to-r from-[#6B8E23] via-[#003366] to-[#FF6F61] bg-clip-text -tracking-tighter text-sm text-transparent lg:text-3xl md:text-xl sm:text-lg'>BTech in Information Technology</motion.span>
            <motion.p initial={{ opacity: 0, y: -80 }}
              whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, type: "spring", stiffness: 100, damping: 10, ease: 'linear' }} className='my-2 max-w-xl font-normal py-6 tracking-tighter text-xs lg:text-base md:text-[0.9rem] sm:text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum odio voluptas, nam nostrum, officiis rem molestiae ducimus assumenda rerum dolorem, cum suscipit dolores facilis tempore. Nesciunt magnam aliquam numquam ipsum.</motion.p>
          </div>
        </div>
        <div className=' w-full lg:w-1/2 lg:-mt-16 lg:pb-16'>
          <div className='flex justify-center lg:justify-end'>
            <motion.div initial={{ opacity: 0, y: -100 }} whileInView={{ opacity: 1, y: 0 }} whileHover={{ scale: 1.2}} whileTap={{scale: 1.1}} transition={{ type: "spring", stiffness: 100, damping: 10, ease: 'easeinout' }} className=' bg-[#85d3c1] w-[170px] h-[170px] lg:h-[425px] lg:w-[425px] md:h-[300px]  md:w-[300px] sm:h-[200px] sm:w-[200px] rounded-full border-4 border-black flex justify-center items-center'>
              <motion.img src={pfp} alt="pfp" className='rounded-full lg:h-[350px] lg:w-[350px] md:h-[200px] md:w-[200px] sm:h-[150px] sm:w-[150px] w-[120px] h-[120px]' />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home