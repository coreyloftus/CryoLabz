import React from "react"
import Link from "next/link"
import { FaInstagram } from "react-icons/fa"
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai"

const index = () => {
    return (
        <div>
            <div className="h-[74vh] w-screen">
                <div className="bg-gradient-to-r from-sky-700 via-sky-400 to-sky-700 text-gray-50 font-poppins relative">
                    <div className="flex flex-col justify-center p-4 max-w-screen-md rounded-lg m-auto">
                        <div className="relative min-h-min bg-blue-50 text-gray-800 rounded-lg shadow-lg p-6">
                            <div className="text-center pb-8">
                                <p className="text-3xl font-bold">Contact Us</p>
                                <p className="">We're happy to chat.</p>
                            </div>
                            <div className="grid grid-cols-2 gap-4 justify-items-center">
                                <Link href="https://www.instagram.com/cryolabz/" className="row-start-1 col-span-2 p-4 text-lg flex hover:text-gray-500">
                                    <FaInstagram size={30} className="justify-self-start" />
                                    <p className="text-md pl-8">@cryolabz</p>
                                </Link>
                                <Link href="tel:718-912-4745" className="row-start-2 col-span-2 p-4 text-lg flex hover:text-gray-500 ">
                                    <AiOutlinePhone size={30} />
                                    <p className="text-md pl-8">+1 (718) 912-4745</p>
                                </Link>
                                <Link href="mailto:contact@cryolabz.net" className="row-start-3 col-span-2 p-4 text-lg flex hover:text-gray-500">
                                    <AiOutlineMail size={30} />
                                    <p className="text-md pl-8">contact@cryolabz.net</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative bottom-0 left-0 right-0 h-16">
                <div className="h-full w-full">
                    {/* <div className="relative bottom-0 left-0 right-0 h-16">
                        <div className="h-full w-full flex justify-center relative z-30">
                            <svg width="300" height="100" viewBox="0 0 300 100">
                                <polygon points="50,2 90,25 90,75 50,98 10,75 10,25" stroke="white" strokeWidth="2" fillOpacity="0" />
                                <polygon points="150,2 190,25 190,75 150,98 110,75 110,25" fill="none" stroke="white" strokeWidth="2" />
                                <polygon points="250,2 290,25 290,75 250,98 210,75 210,25" fill="none" stroke="white" strokeWidth="2" />
                            </svg>
                        </div>
                        <div className="absolute z-10 bottom-0 left-0 right-0 h-16 bg-gradient-to-r from-sky-700 via-sky-400 to-sky-700"></div>
                    </div> */}
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
        </div>
    )
}

export default index
