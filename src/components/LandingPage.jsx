import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";


const LandingPage = () => {
    motion
    return (
        <>
            <div data-scroll data-scroll-section data-scroll-speed="-.5" className="w-full h-screen bg-zinc-100 pt-1">
                <div className="textstructure mt-52 px-20">
                    {["We Create", "eye-opening", "presentations"].map((item, index) => {
                        return (<div className="masker">
                            <div className="w-fit flex items-center overflow-hidden">
                                {index===1 &&
                                 (<motion.div initial={{width:0}} animate={{width:"10vw"}} transition={{ease:[0.76, 0, 0.24, 1],duration:1}} className='w-[10vw] rounded-md h-[8vh] mt-[3vw] relative  -top-[1vw] font-[public\fonts\FoundersGrotesk-Semibold.otf]'>
                                    <img className='w-full h-full rounded-xl' src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg" alt="" />
                                </motion.div>)}

                                <h1 className="uppercase p-2 text-[9.0vw] leading-[7vw] tracking-tighter font-medium h-full">{item}</h1>
                            </div>
                        </div>
                        )
                    })}


                </div>
                <div className="border-t-[2px] border-zinc-800 mt-20 flex items-center justify-between py-5 px-20">
                    {["For public and private companies", "From the first pitch to IPO"].map((item, index) => {
                        return <p className="text-lg font-light tracking-tighter leading-none">{item}</p>
                    })}
                    <div className="start flex items-center gap-3">
                        <div className="uppercase px-5 py-2 border-[1px] border-zinc-500 rounded-full font-light text-sm cursor-pointer">start the project</div>
                        <div className="w-10 h-10 rounded-full border-[1px] border-zinc-500 flex items-center justify-center">
                            <span className="rotate-[45deg]">

                                <FaArrowUpLong />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LandingPage
