import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";
const About = () => {
    return (
        <>
            <div className='w-full py-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl p-20'>
                <h1 className="font-serif text-[4.5vw] text-black leading-[4.5vw] tracking-tight">
                    Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell products, explain complex ideas, and hire great people.
                </h1>
                <div className="border-t-[1px] border-[#a2b361] mt-14 text-black flex justify-between gap-20">
                    <p className="whitespace-nowrap text-[1.7vw]">What you can expect:</p>
                    <div className="flex flex-col  text-[1.5vw] h-[30vh] w-1/3 gap-10">
                        <p className="">We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it’s live or digital, delivered for one or a hundred people.</p>
                        <p className="">We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.</p>
                    </div>
                    <div className="flex flex-col underline gap-2 cursor-pointer">

                        {["S:", "Instagram", "Behance", "Facebook", "Linkedin"].map((item, index) => {

                            return <span className="text-[1.7vw]">{item}</span>
                        })}
                    </div>
                </div>
                <div className="border-t-[1px] border-[#a2b361]  mt-20 pt-10 flex ">
                    <div className="w-1/2 ">
                        <h1 className="text-[4vw] text-black">Our approach:</h1>
                        <button className='px-10 py-6 bg-zinc-900 rounded-full text-white mt-10 flex justify-center items-center gap-10 hover:bg-zinc-600'>Read More
                            <div className="w-2 h-2 bg-zinc-50 rounded-full hover:hidden">
                                <div className="w-10 h-10 hidden rounded-full border-[1px] border-zinc-500 hover:flex items-center justify-center">
                                    <span className="rotate-[45deg]">

                                        <FaArrowUpLong />
                                    </span>
                                </div>
                            </div>
                        </button>
                    </div>
                    <div className="w-1/2 h-[70vh] rounded-3xl ">
                        <img className='rounded-3xl' src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg" alt="" /></div>
                </div>
            </div>

        </>
    )
}

export default About
