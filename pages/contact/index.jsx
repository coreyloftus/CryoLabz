import React from "react"
import { FaLinkedin, FaFacebookSquare, FaTwitterSquare } from "react-icons/fa"

const index = () => {
    return (
        <div>
            <div className="h-screen w-full">
                <div className="flex flex-col justify-center p-4">
                    <div className="text-center pb-8">
                        <p className="text-3xl font-bold">Contact Us</p>
                        <p className="">We're happy to chat.</p>
                    </div>
                    <div className="flex justify-center gap-8 py-2">
                        <FaLinkedin size={30} />
                        <FaFacebookSquare size={30} />
                        <FaTwitterSquare size={30} />
                    </div>
                    <div className="rounded-md grid grid-cols-2 place-content-evenly">
                        <h2 className="text-xl text-right p-4 font-bold">Instagram</h2>
                        <ul className="text-md p-4">
                            <li>@cryolabz</li>
                        </ul>
                        <h2 className="text-xl text-right p-4 font-bold">Twitter</h2>
                        <ul className="text-md p-4">
                            <li>@cryolabz</li>
                        </ul>
                        <h2 className="text-xl text-right p-4 font-bold">Facebook</h2>
                        <ul className="text-md p-4">
                            <li>facebook.com/cryolabs</li>
                        </ul>
                        <h2 className="text-xl text-right p-4 font-bold">Phone / Text</h2>
                        <ul className="text-md p-4">
                            <li>+1 (347) 555-5555</li>
                        </ul>
                        <h2 className="text-xl text-right p-4 font-bold">Email</h2>
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
