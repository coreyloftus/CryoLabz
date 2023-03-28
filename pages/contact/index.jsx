import React from "react"
import { FaLinkedin, FaFacebookSquare, FaTwitterSquare } from "react-icons/fa"
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai"

const index = () => {
    return (
        <div className="bg-gradient-to-b from-blue-100 to-blue-900">
            <div className="h-screen w-full">
                <div className="flex flex-col justify-center p-4">
                    <div className="text-center pb-8">
                        <p className="text-3xl font-bold">Contact Us</p>
                        <p className="">We're happy to chat.</p>
                    </div>
                    <div className="rounded-md grid grid-cols-2 place-content-evenly">
                        <div className="text-xl text-right p-4 flex justify-end">
                            <FaLinkedin size={30} />
                        </div>
                        <ul className="text-md p-4">
                            <li>@cryolabz</li>
                        </ul>
                        <div className="text-xl text-right p-4 flex justify-end">
                            <FaTwitterSquare size={30} />
                        </div>
                        <ul className="text-md p-4">
                            <li>@cryolabz</li>
                        </ul>
                        <div className="text-xl text-right p-4 flex justify-end">
                            <FaFacebookSquare size={30} />
                        </div>
                        <ul className="text-md p-4">
                            <li>facebook.com/cryolabs</li>
                        </ul>
                        <div className="text-xl text-right p-4 flex justify-end">
                            <AiOutlinePhone size={30} />
                        </div>
                        <ul className="text-md p-4">
                            <li>+1 (347) 555-5555</li>
                        </ul>
                        <div className="text-xl text-right p-4 flex justify-end">
                            <AiOutlineMail size={30} />
                        </div>
                        <ul className="text-md p-4">
                            <li>hello@cryolabz.com</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default index
