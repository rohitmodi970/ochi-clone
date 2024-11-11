import React from 'react'
import gsap from 'gsap'
import { useEffect, useState } from 'react'
const Eyes = () => {
    const [rotate, setRotate] = useState(0)
    useEffect(() => {
        window.addEventListener("mousemove", (e) => {
            // console.log(e.clientX , e.clientY)
            let mouseX = e.clientX//x-asix 
            let mouseY = e.clientY//y-asix

            let deltaX = mouseX - window.innerWidth / 2;//distance from center in x-asix
            let deltaY = mouseY - window.innerHeight / 2;//distance from center in y-asix

            var angle = Math.atan2(deltaX, deltaY) * (180 / Math.PI)
            setRotate(angle - 260)
        })
    }, [])

    return (
        <div className='eyes w-full h-screen overflow-hidden'>
            <div data-scroll data-scroll-section data-scroll-speed="-.7" className="relative w-full h-full bg-cover bg-center bg-[url(https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg)] ">

                <div className="absolute   top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]  flex gap-10">
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
            </div>
        </div>
    )
}

export default Eyes
