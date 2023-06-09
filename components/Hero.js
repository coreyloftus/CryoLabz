import React from "react"
import Image from "next/image"
import Link from "next/link"
import logo from "../public/assets/Cryolabz-logo.png"

const Hero = () => {
    return (
        // hero container
        <div className="min-h-screen pb-10">
            <div className="bg-gradient-to-r from-sky-700 via-sky-400 to-sky-700 text-gray-50 font-poppins relative pb-6">
                <div className="flex flex-col justify-center">
                    <div className="w-full flex flex-cols text-center justify-center p-6 sm:p-2">
                        {/* card container */}
                        <div className="bg-blue-50 text-gray-800 rounded-lg p-6 mt-4">
                            {/* logo image container */}
                            <div className="relative">
                                <Image src={logo} width={450} height="auto" alt="Cryolabz Logo" className="mx-auto" />
                            </div>
                            {/* hero text */}
                            <div className="text-xl pt-2">
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
            {/* bottom style on component */}
            <div className="relative bottom-0 left-0 right-0 h-10">
                <div className="h-full w-full">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <linearGradient id="gradient" x1="0%" x2="100%">
                            <stop offset="0%" stop-color="#11689b" />
                            <stop offset="50%" stop-color="#2bbff0" />
                            <stop offset="100%" stop-color="#11689b" />
                        </linearGradient>
                        <path fill="url(#gradient)" fill-opacity="1" d="M0,288L288,192L576,64L864,96L1152,0L1440,256L1440,0L1152,0L864,0L576,0L288,0L0,0Z"></path>
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default Hero
