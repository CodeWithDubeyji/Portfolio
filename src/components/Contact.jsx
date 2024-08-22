import React, { useState } from 'react'
import Map from './Map';

import { motion } from 'framer-motion';

const Contact = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1 initial={{ opacity: 0, y: -100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1.5, delay: 0 }} className="my-10 text-center text-4xl">Get In Touch</motion.h1>
      <div className='mb-8 flex flex-wrap lg:justify-center items-center'>
        <div className='w-full lg:w-1/2 lg:p-2'>
          <motion.div initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0, type: "spring", stiffness: 100, damping: 10 }} className=' flex flex-col gap-y-4 pt-4 items-center justify-center'>
            <input type="email" placeholder='Your Email' className=' w-9/12 py-4 rounded-lg border-4 outline-none border-black px-4 text-xl' />
            <input type="Contact No." placeholder='Contact No.' className='w-9/12 py-4 rounded-lg border-4 border-black px-4 outline-none text-xl' />
            <input type="textarea" placeholder='Write your query here.' className='w-9/12 py-4 rounded-lg border-4 border-black px-4 outline-none text-xl' />
            <button type="submit" onClick={(e) => handleSubmit(e)} className=' bg-[#ff958a] hover:bg-red-500 text-xl px-2 py-2 border-4 border-black rounded-lg' >Send mail</button>
          </motion.div>
        </div>
        <motion.div initial={{ opacity: 0, x: 200 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0, type: "spring", stiffness: 100, damping: 10 }} className='w-full lg:w-1/2 lg:p-2 lg: my-3'>
          <Map />
        </motion.div>
      </div>
    </div>
  )
}

export default Contact