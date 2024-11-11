import React from 'react'
import { useState, useEffect } from 'react'

const ReadyToStart = () => {
    const [rotate, setRotate] = useState(0)
    useEffect(() => {
        window.addEventListener("mousemove", (e) => {
            // console.log(e.clientX , e.clientY)
            let mouseX = e.clientX//x-asix 
            let mouseY = e.clientY//y-asix

            let deltaX = mouseX - window.innerWidth / 2;//distance from center in x-asix
            let deltaY = mouseY - window.innerHeight / 2;//distance from center in y-asix

            var angle = Math.atan2(deltaX, deltaY) * (180 / Math.PI)
            setRotate(angle - 180)
        })
    }, [])
    return (
        <div data-scroll data-scroll-section data-scroll-speed=".3" className='w-full h-screen py-20 bg-[#CDEA68] text-zinc-800  p-20 relative'>
            <div className="textstructure mt-8 flex flex-col justify-center items-center font-sans">
                {["ready", "to start", "the project ?"].map((item, index) => {
                    return (<div className="masker">
                        <div className="w-fit flex items-center overflow-hidden">

                            <h1 className="uppercase p-2 text-[9.0vw] leading-[6vw] tracking-tighter font-bold h-full">{item}</h1>
                        </div>
                    </div>
                    )
                })}


            </div>
            {/* eye */}
            <div >
            <div   className="absolute   top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]  flex gap-10">
                <div className="w-[15vw] h-[15vw] bg-zinc-100 rounded-full flex justify-center items-center">
                    <div className="w-2/3 h-2/3 rounded-full bg-zinc-950 relative">
                        <div style={{ transform: `translate(-50%,-50%) rotate(${rotate}deg)` }} className="line w-full h-10  absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">

                            <div className="w-5 h-5 rounded-full bg-zinc-100"></div>
                        </div>
                    </div>
                </div>
                <div className="w-[15vw] h-[15vw] bg-zinc-100 rounded-full flex justify-center items-center">
                    <div className="w-2/3 h-2/3 rounded-full bg-zinc-950 relative">
                        <div style={{ transform: `translate(-50%,-50%) rotate(${rotate}deg)` }} className="line w-full h-10  absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] ">


                            <div className="w-5 h-5 rounded-full bg-zinc-100 relative"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full flex justify-center items-center mb-10 flex-col mt-[30vh]">

                <button className='px-10 py-4 bg-zinc-900 rounded-full text-white mt-10 flex justify-center items-center gap-10'>Read More
                    <div className="w-2 h-2 bg-zinc-50 rounded-full"></div>
                </button>
                <p className='mt-8 font-semibold'>OR</p>
                <button className='px-10 py-5 bg-zinc-100 rounded-full text-zinc-900 font-semibold uppercase mt-10 flex justify-center items-center gap-10 '>View all case studies
                    <div className="w-2 h-2 bg-zinc-900 rounded-full"></div>
                </button>
            </div>
            </div>
        </div>
    )
}

export default ReadyToStart
