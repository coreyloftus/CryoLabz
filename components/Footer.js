import React from "react"
import { FaFacebookSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa"

const Footer = () => {
    return (
        <div className="w-full p-4 fixed bottom-0 mt-10">
            <div className="flex p-4 justify-around">
                <div className="grid grid-cols-3 place-items-center gap-10">
                    <FaLinkedin size={30} />
                    <FaFacebookSquare size={30} />
                    <FaTwitterSquare size={30} />
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
