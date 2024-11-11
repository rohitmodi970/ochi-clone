import React from 'react'

const Cards = () => {
    return (
        <div className='w-full h-screen  bg-zinc-100 flex gap-5 pt-32'>
            <div className="cardcontainer w-1/2 h-[50vh]">
                <div className="card relative w-full rounded-2xl h-full bg-[#004D43] flex items-center justify-center">
                    <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                    <button className='absolute text-[#CDEA68] left-10 bottom-10 px-6 py-1 border-2 border-[#CDEA68] rounded-full'>&copy;204-2025 </button>
                </div>
            </div>

            <div className="cardcontainer w-1/2 h-[50vh] flex gap-5">
                <div className="card relative w-1/2 rounded-xl h-full bg-[#212121] flex items-center justify-center">
                    <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
                    <button className='absolute text-zinc-100 left-10 bottom-10 px-6 py-1 border-2 border-zinc-100 rounded-full uppercase tracking-tighter leading-none  whitespace-nowrap'>reting 5.0 on clutch </button>
                </div>
                <div className="card relative w-1/2 rounded-xl h-full bg-[#212121] flex items-center justify-center">
                    <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
                    <button className='absolute text-zinc-100 left-10 bottom-10 px-6 py-1 border-2 border-zinc-100 rounded-full uppercase tracking-tighter leading-none  whitespace-nowrap'>business bootcamp alumni</button>
                </div>
            </div>

        </div>
    )
}

export default Cards
