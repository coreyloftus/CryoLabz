import React from "react"
import Image from "next/image"
import Link from "next/link"
import icebackground from "../public/assets/icebackground.jpg"

const Hero = () => {
    return (
        <div>
            <div className="h-[calc(100vh-58px)] text-gray-50">
                <div className="flex flex-col items-center justify-center h-full">
                    <div className="rounded-lg p-2 w-full h-full">
                        {/* <div className="absolute w-full h-full overflow-hidden cover z-[0]">
                            <Image src={icebackground} width={600} alt="ice background" />
                        </div> */}
                        <div className="grid grid-cols-2 grid-rows-3 gap-4 icebackground h-full place-content-center text-center">
                            <p className="row-start-2 text-2xl">Cryo image here</p>
                            <div className="row-start-2 col-start-2">
                                <p className="text-3xl">Cryo is the future</p>
                                <p>Check it out -- book a session</p>
                                <Link href="/book">
                                    <button className="bg-orange-400 hover:bg-orange-500 rounded-lg p-4 mt-2 w-[50%] text-2xl text-gray-50 min-w-fit">Book a session</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
