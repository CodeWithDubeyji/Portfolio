import React from 'react'
import { FaLinkedin } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa"
import { FaDiscord } from "react-icons/fa"

const Navbar = () => {
  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
      <div className=' flex flex-shrink-0 items-center'>
      <h1><span className="text-4xl font-semibold">G</span><span className="text-2xl font-bold">D</span></h1>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-black text-2xl">
        <a target="_blank" href="https://www.linkedin.com/in/gaurav-dubey-345a33271/"><FaLinkedin className="hover:cursor-pointer"/></a>
        <FaXTwitter />
        <a target="_blank" href="https://github.com/CodeWithDubeyji"><FaGithub className="hover:cursor-pointer"/></a>
        <FaDiscord />
      </div>
    </nav>
  )
}

export default Navbar