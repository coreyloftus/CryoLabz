import React from "react"
import Link from "next/link"
import { FaInstagram } from "react-icons/fa"
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai"

const index = () => {
    return (
        <div>
            <div className="h-screen">
                <div className="flex flex-col justify-center p-4 max-w-screen-md rounded-lg">
                    <div className="relative min-h-min bg-blue-50 text-gray-700 rounded-lg shadow-lg p-6">
                        <div className="text-center pb-8">
                            <p className="text-3xl font-bold">Contact Us</p>
                            <p className="">We're happy to chat.</p>
                        </div>
                        <div className="border grid grid-cols-2 gap-4 justify-items-center">
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
        </div>
    )
}

export default index
