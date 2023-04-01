import React from "react"
import Image from "next/image"
import Link from "next/link"
import icebackground from "../public/assets/icebackground.jpg"
import logo from "../public/assets/Cryolabz-logo.png"

const Hero = () => {
    return (
        <div>
            <div className="h-[calc(100vh-58px)] text-gray-50 font-poppins">
                <div className="flex flex-col items-center justify-center h-full">
                    <div className="w-full h-full flex flex-cols text-center justify-center items-center">
                        <div className="bg-gray-800 rounded-lg p-4">
                            <p className="text-3xl p-4">CRYOLABZ</p>
                            <p>Your on-the-go mobile cryotherapy service in NYC</p>
                            <p>Check it out -- book a session</p>
                            <Link href="/book">
                                <button className="bg-[#2bbff0] hover:bg-[#2bbff0]/80  rounded-lg p-4 mt-2 w-[50%] text-2xl text-gray-50 min-w-fit">Book a session</button>
                            </Link>
                        </div>
                        <div className="px-6">
                            <Image src={logo} alt="Cryolabz Logo" width="350" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
