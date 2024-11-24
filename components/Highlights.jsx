"use client";
import React from 'react'
const Highlights = () => {
    return (
        <section className="flex flex-col items-center justify-center bg-black">
            <h3 className="uppercase tracking-[20px] text-gray-500 text-2xl my-2">
                HIGHLIGHTS
            </h3>
            <div className="items-center w-full sm:h-4/5 h-full ">
                <video
                    id='appleVideo'
                    autoPlay muted playsInline={true}
                    loop
                    className="sm:w-[70%] w-full  sm:h-[70%] h-full object-cover object-center m-auto"
                >
                    <source src="/videos/apple-clone.mp4" type="video/mp4" />
                </video>
                </div>
        </section>
    )
}

export default Highlights