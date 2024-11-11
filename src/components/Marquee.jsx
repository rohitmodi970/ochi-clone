import React from 'react'
import { motion } from 'framer-motion'

const Marquee = () => {
    return (
        <div data-scroll data-scroll-section data-scroll-speed=".5" className="w-full py-10 bg-[#004D43] rounded-tr-3xl rounded-tl-3xl">
            <div className="text border-y-[0.5px] border-zinc-100 flex whitespace-nowrap  overflow-hidden ">

                <motion.h1 initial={{ x: "0" }} animate={{ x: "-100%" }} transition={{ ease: "linear", repeat: Infinity, duration: 10 }} className='text-[22vw] pr-20 leading-none tracking-tighter font-sans uppercase font-bold pb-3'>We Are Ochi</motion.h1>

                <motion.h1 initial={{ x: "0" }} animate={{ x: "-100%" }} transition={{ ease: "linear", repeat: Infinity, duration: 10 }} className='text-[22vw] pr-20 leading-none tracking-tighter font-sans uppercase font-semibold  pb-3'>We Are Ochi</motion.h1>
                <motion.h1 initial={{ x: "0" }} animate={{ x: "-100%" }} transition={{ ease: "linear", repeat: Infinity, duration: 10 }} className='text-[22vw] pr-20 tracking-tighter leading-none font-sans uppercase font-semibold  pb-3'>We Are Ochi</motion.h1>
                22
            </div>
        </div>
    )
}

export default Marquee
