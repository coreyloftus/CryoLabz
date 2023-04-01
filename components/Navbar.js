import React from "react"
import Link from "next/link"
import { FaAtom } from "react-icons/fa"
const Navbar = () => {
    return (
        <div className="box-border top-0 w-screen bg-gray-800 text-gray-100 p-2 font-poppins z-20">
            <div className="flex items-center justify-between">
                <Link href="/">
                    <div className="text-left flex items-center">
                        <FaAtom size={40} />
                        <p className="font-bold text-lg hover:animate-pulse">CryoLabz</p>
                    </div>
                </Link>
                {/* Links to other pages */}
                <Link href="/about">
                    <button className="border-b-2 border-transparent hover:border-gray-100 p-2">About</button>
                </Link>
                <Link href="/contact">
                    <button className="border-b-2 border-transparent hover:border-gray-100 p-2">Contact</button>
                </Link>
                <Link href="/testimonials">
                    <button className="border-b-2 border-transparent hover:border-gray-100 p-2">Testimonials</button>
                </Link>
                <Link href="/book">
                    <button className="bg-[#2bbff0] hover:bg-[#2bbff0]/80 rounded-lg p-2">Book a Session</button>
                </Link>
            </div>
        </div>
    )
}

export default Navbar
