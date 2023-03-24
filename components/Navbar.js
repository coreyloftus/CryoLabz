import React from "react"
import Link from "next/link"
import { FaAtom } from "react-icons/fa"
const Navbar = () => {
    return (
        <div className="top-0 w-screen bg-gray-200 rounded-lg my-3 p-4 border">
            <div className="flex items-center justify-between">
                <Link href="/">
                    <div className="text-left">
                        <FaAtom size={20} />
                    </div>
                </Link>
                {/* Links to other pages */}
                <p>Book a Session</p>
                <p>Testimonials</p>
                <p>About</p>
                <p>Contact</p>
            </div>

        </div>
    )
}

export default Navbar
