import React from "react"
import Link from "next/link"
import { FaFacebookSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa"

const Footer = () => {
    return (
        <div className="w-full bg-gray-800 text-gray-100 p-2 bottom-0">
            <div className="flex p-4 justify-around">
                <div className="grid grid-cols-3 place-items-center gap-10">
                    <span className="hover:text-gray-400 ">
                        <FaLinkedin className="" size={40} />
                    </span>
                    <span className="hover:text-gray-400">
                        <FaFacebookSquare size={40} />
                    </span>
                    <span className="hover:text-gray-400">
                        <FaTwitterSquare size={40} />
                    </span>
                </div>
                <div>
                    <Link href="/contact">
                        <p className="p-1 border-l-2 border-transparent hover:border-gray-100">Contact</p>
                    </Link>
                    <Link href="/book">
                        <p className="p-1 border-l-2 border-transparent hover:border-gray-100">Book a session</p>
                    </Link>
                </div>
            </div>
            <h2 className="text-center text-sm mb-2">Copyright CryoLabz 2023</h2>
        </div>
    )
}

export default Footer
