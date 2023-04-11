import React, { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { GiHamburgerMenu } from "react-icons/gi"
import { RxCross1 } from "react-icons/rx"
import logoOnly from "../public/assets/Cryolabz-logo-only.png"
import textOnly from "../public/assets/Cryolabz-text-only.png"

const Navbar = () => {
    const [mobileMenu, setMobileMenu] = useState(false)
    const pathname = usePathname()
    const toggleMobileMenu = () => {
        setMobileMenu(!mobileMenu)
    }

    return (
        <div className="box-border relative top-0 w-screen bg-gray-800 text-gray-100 p-2 font-poppins z-20">
            <div className="flex items-center justify-between">
                <Link
                    href="/"
                    onClick={() => {
                        setMobileMenu(false)
                    }}>
                    <div className="text-left flex items-center hover:animate-pulse">
                        <Image src={logoOnly} alt="Cryolabz Logo" width="50" />
                        <div className="filter brightness-200">
                            <Image src={textOnly} alt="Cryolabz Text" width="150" />
                        </div>
                    </div>
                </Link>
                {/* Center section -> banner text */}
                <div>
                    <p className="font-bold hidden md:block">Free consultations -- Book now!</p>
                </div>
                {/* Right section -> links to pages */}
                <div className="hidden md:inline">
                    <Link href="/about">
                        <button className={`mx-4 border-b-2 ${pathname === "/about" ? `border-gray-100` : `border-transparent`} hover:border-gray-100 p-2`}>About</button>
                    </Link>
                    <Link href="/contact">
                        <button className={`mx-4 border-b-2 ${pathname === "/contact" ? `border-gray-100` : `border-transparent`} hover:border-gray-100 p-2`}>Contact</button>
                    </Link>
                    <Link href="/book">
                        <button className="bg-[#2bbff0] hover:bg-[#2bbff0]/80 rounded-lg p-2">Book a Session</button>
                    </Link>
                </div>
                {/* Hamburger button */}
                <div className="md:hidden pr-2 cursor-pointer">
                    {!mobileMenu && (
                        <div>
                            <GiHamburgerMenu onClick={toggleMobileMenu} size={40} className="text-[#2bbff0]/80" />
                        </div>
                    )}
                    {mobileMenu && <RxCross1 size={40} onClick={toggleMobileMenu} className="text-[#2bbff0]/80" />}
                </div>
            </div>
            {/* mobile menu */}
            {mobileMenu && (
                <div className="w-full mt-2">
                    <div onClick={toggleMobileMenu} className="border-t-2 border-gray-700">
                        <Link href="/">
                            <button className="w-full text-center hover:bg-gray-700 hover:font-bold p-2">Home</button>
                        </Link>
                    </div>
                    <div onClick={toggleMobileMenu} className="border-t-2 border-b-2 border-gray-700">
                        <Link href="/about">
                            <button className="w-full text-center hover:bg-gray-700 hover:font-bold p-2">About</button>
                        </Link>
                    </div>
                    <div onClick={toggleMobileMenu} className="border-b-2 border-gray-700">
                        <Link href="/contact">
                            <button className="w-full text-center hover:bg-gray-700 hover:font-bold p-2">Contact</button>
                        </Link>
                    </div>
                    <div onClick={toggleMobileMenu} className=" border-gray-700">
                        <Link href="/book">
                            <button className="w-full text-center hover:bg-gray-700 hover:font-bold p-2">Book a Session</button>
                        </Link>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Navbar
