import React from "react"
import { FaFacebookSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa"

const Footer = () => {
    return (
        <div className="w-full bg-gray-800 text-gray-100 p-2 bottom-0">
            <div className="flex p-4 justify-around">
                <div className="grid grid-cols-3 place-items-center gap-10">
                    <FaLinkedin className="" size={40} />
                    <FaFacebookSquare size={40} />
                    <FaTwitterSquare size={40} />
                </div>
                <div>
                    <p>Contact</p>
                    <p>Book</p>
                    <p>About</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
