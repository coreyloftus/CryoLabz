import React from "react"
import Image from "next/image"
import Link from "next/link"
import logo from "../public/assets/Cryolabz-logo.png"

const Hero = () => {
    return (
        // hero container
        <div className="">
            <div className="h-screen bg-gradient-to-r from-sky-700 via-sky-400 to-sky-700 text-gray-50 font-poppins">
                <div className="flex flex-col justify-center h-full">
                    <div className="w-full flex flex-cols text-center justify-center p-6 sm:p-2">
                        {/* card container */}
                        <div className="bg-blue-50 text-gray-800 rounded-lg p-6 md:p-2">
                            {/* logo image container */}
                            <div className="mx-auto relative">
                                <Image src={logo} width={450} height={450} alt="Cryolabz Logo" />
                            </div>
                            {/* hero text */}
                            <div className="text-xl">
                                <p className="">Your on-the-go mobile cryotherapy service in NYC</p>
                                <p>Check it out -- book a session</p>
                            </div>
                            {/* book a session button */}
                            <Link href="/book">
                                <button className="bg-[#2bbff0] hover:bg-[#2bbff0]/80 rounded-lg p-4 mt-4 w-[50%] text-2xl text-gray-50 min-w-fit">Book a session</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* jagged line blob at bottom */}
            <div className="md:mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 30 1440 320">
                    <defs>
                        <linearGradient id="myGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stop-color="#0369a1" />
                            <stop offset="50%" stop-color="#38bdf8" />
                            <stop offset="100%" stop-color="#0369a1" />
                        </linearGradient>
                    </defs>
                    <path fill="url(#myGradient)" fill-opacity="1" d="M0,32L720,192L1440,32L1440,0L720,0L0,0Z"></path>
                </svg>
            </div>
        </div>
    )
}

export default Hero
