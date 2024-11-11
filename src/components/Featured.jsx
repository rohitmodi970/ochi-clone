import { motion, useAnimation } from 'framer-motion'
import { span } from 'framer-motion/client'
import React from 'react'

const Featured = () => {
    const cards = [useAnimation(), useAnimation(), useAnimation(), useAnimation()]
    const handleHover = (index) => {

        cards[index].start({y:"0"})
    }
    const handleHoverEnd = (index) => {

        cards[index].start({y:"100%"})
    }

    return (
        <>
            <div className="w-full py-20 ">
                <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-20">
                    <h1 className='text-[4.5vw] tracking-tight'>Featured projects</h1>
                </div>
                <div className="px-20">
                    {/* 1st card */}
                    <div className="cards w-full flex gap-10 mt-10">
                        <div className="flex  flex-col w-1/2">
                            <h1 className='pb-5 flex justify-start items-center gap-2'>
                                <span className='w-2 h-2 rounded-full bg-white z-20'></span>
                                Cardboard Spaceship
                            </h1>
                            <motion.div
                                onHoverStart={() => handleHover(0)}
                                onHoverEnd={() => handleHoverEnd(0)}
                                className="cardcontainer w-full h-[75vh] relative"
                            >
                                <h1 className="absolute left-full flex overflow-hidden z-10 text-[#CDEA68] -translate-x-1/2 -translate-y-1/2 top-1/2 text-[5vw] leading-none font-semibold tracking-tighter">
                                    {"Cardboard Spaceship".split("").map((item, index) => (
                                        <motion.span
                                            key={index}
                                            initial={{ y: "100%" }}
                                            animate={cards[0]}
                                            transition={{ ease: [0.2, 1, 0.36, 1], delay: index * 0.05 }}
                                            className='whitespace-nowrap inline-block'
                                        >
                                            {item}
                                        </motion.span>
                                    ))}
                                </h1>
                                <div className="bg-green-500 w-full rounded-xl h-full overflow-hidden">
                                    <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png" alt="" />
                                </div>
                                <div className="bio flex pt-2 gap-3">
                                    {["branded template", "sales deck", "social media templates"].map((item, index) => (
                                        <span key={index} className='uppercase text-[12px] leading-none whitespace-nowrap border-[1px] rounded-full p-[6px] tracking-tighter cursor-pointer'>{item}</span>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                        <div className="flex  flex-col w-1/2">
                            <h1 className='pb-5 flex justify-start items-center gap-2'>
                                <span className='w-2 h-2 rounded-full bg-white z-20'></span>
                                AH2 & Matt Horn
                            </h1>
                            <motion.div 
                            onHoverStart={() => handleHover(1)}
                            onHoverEnd={() => handleHoverEnd(1)}
                             className="cardcontainer w-full h-[75vh]   relative">
                                <h1 className="absolute overflow-hidden flex right-full text-[#CDEA68]  translate-x-1/2 -translate-y-1/2 top-1/2  z-10 text-[5vw] leading-none font-semibold tracking-tighter">
                                    {"AH2 & Matt Horn".split("").map((item, index) => {
                                        return <motion.span
                                        key={index}
                                        initial={{ y: "100%" }}
                                        animate={cards[1]}
                                        transition={{ ease: [0.2, 1, 0.36, 1], delay: index * 0.05 }}
                                        className='whitespace-nowrap inline-block'
                                    >
                                        {item}
                                    </motion.span>
                                    })}
                                </h1>
                                <div className="bg-green-500 w-full rounded-xl h-full overflow-hidden">
                                    <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-663x551.png" alt="" />
                                </div>
                                <div className="bio flex pt-2 gap-3">
                                    {["pitch deck"].map((item, index) => {
                                        return <span className='uppercase text-[12px] leading-none whitespace-nowrap border-[1px] rounded-full p-[6px] tracking-tighter cursor-pointer'>{item}</span>
                                    })}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                    {/* 2nd card */}
                    <div className="cards w-full flex gap-10 mt-24">
                        <div className="flex  flex-col w-1/2">
                            <h1 className='pb-5 flex justify-start items-center gap-2'>
                                <span className='w-2 h-2 rounded-full bg-white z-20'></span>
                                FYDE
                            </h1>
                            <motion.div
                            onHoverStart={() => handleHover(2)}
                            onHoverEnd={() => handleHoverEnd(2)}
                             className="cardcontainer w-full h-[75vh]   relative">
                                <h1 className="absolute overflow-hidden flex left-full text-[#CDEA68] -translate-x-1/2 -translate-y-1/2 top-1/2  z-10 text-[5vw] leading-none font-semibold tracking-tighter">
                                    {"FYDE".split("").map((item, index) => {
                                        return <motion.span
                                        key={index}
                                        initial={{ y: "100%" }}
                                        animate={cards[2]}
                                        transition={{ ease: [0.2, 1, 0.36, 1], delay: index * 0.05 }}
                                        className='whitespace-nowrap inline-block'
                                    >
                                        {item}
                                    </motion.span>
                                    })}
                                </h1>
                                <div className="bg-green-500 w-full rounded-xl h-full overflow-hidden">
                                    <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" />
                                </div>
                                <div className="bio flex pt-2 gap-3">
                                    {["audit", "copywriting", "Sales deck", "slides design"].map((item, index) => {
                                        return <span className='uppercase text-[12px] leading-none whitespace-nowrap border-[1px] rounded-full p-[6px] tracking-tighter cursor-pointer'>{item}</span>
                                    })}
                                </div>
                            </motion.div>
                        </div>
                        <div className="flex  flex-col w-1/2">
                            <h1 className='pb-5 flex justify-start items-center gap-2'>
                                <span className='w-2 h-2 rounded-full bg-white z-20'></span>
                                VISE
                            </h1>
                            <motion.div
                            onHoverStart={() => handleHover(3)}
                            onHoverEnd={() => handleHoverEnd(3)}

                            className="cardcontainer w-full h-[75vh]   relative">
                                <h1 className="absolute overflow-hidden flex right-full text-[#CDEA68] translate-x-1/2 -translate-y-1/2 top-1/2  z-10 text-[5vw] leading-none font-semibold tracking-tighter">
                                    {"VISE".split("").map((item, index) => {
                                        return <motion.span
                                        key={index}
                                        initial={{ y: "100%" }}
                                        animate={cards[3]}
                                        transition={{ ease: [0.2, 1, 0.36, 1], delay: index * 0.05 }}
                                        className='whitespace-nowrap inline-block'
                                    >
                                        {item}
                                    </motion.span>
                                    })}
                                </h1>
                                <div className="bg-green-500 w-full rounded-xl h-full overflow-hidden">
                                    <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="" />
                                </div>
                                <div className="bio flex pt-2 gap-3">
                                    {["agency", "company presentation"].map((item, index) => {
                                        return <span className='uppercase text-[12px] leading-none whitespace-nowrap border-[1px] rounded-full p-[6px] tracking-tighter cursor-pointer'>{item}</span>
                                    })}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                    {/* 3rd card */}
                </div>
            </div>
            <div className="w-full flex justify-center items-center mb-10 ">
                <button className='px-10 py-6 bg-zinc-100 rounded-full text-zinc-900 font-semibold uppercase mt-10 flex justify-center items-center gap-10 '>View all case studies
                    <div className="w-2 h-2 bg-zinc-900 rounded-full"></div>
                </button>
            </div>
        </>
    )
}

export default Featured
