import React from "react"
import Link from "next/link"
import { FaAtom } from "react-icons/fa"
const Navbar = () => {
    return (
        <div className="top-0 w-screen bg-gray-200 rounded-lg my-3 p-2 border">
            <div className="flex items-center justify-between">
                <Link href="/">
                    <div className="text-left">
                        <FaAtom size={20} />
                    </div>
                </Link>
                {/* Links to other pages */}
                <Link href="/About">
                    <button className=" hover:bg-gray-100 rounded-lg p-2">About</button>
                </Link>
                <Link href="/Testimonials">
                    <button className=" hover:bg-gray-100 rounded-lg p-2">Testimonials</button>
                </Link>
                <Link href="/Book">
                    <button className="bg-blue-300 hover:bg-blue-400 rounded-lg p-2">Book a Session</button>
                </Link>
            </div>
        </div>
    )
}

export default Navbar
