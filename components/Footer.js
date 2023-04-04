import React from "react"
import Link from "next/link"
import { FaInstagram } from "react-icons/fa"
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai"

const Footer = () => {
    return (
        <div className="w-full bg-gray-800 text-gray-100 p-2 bottom-0">
            <div className="flex p-4 justify-around">
                <div className="grid grid-cols-3 place-items-center gap-3 md:gap-10">
                    <Link href="tel:718-912-4745">
                        <span className="hover:text-gray-400">
                            <AiOutlinePhone size={40} />
                        </span>
                    </Link>
                    <Link href="mailto:contact@cryolabz.net">
                        <span className="hover:text-gray-400">
                            <AiOutlineMail size={40} />
                        </span>
                    </Link>
                    <Link href="https://www.instagram.com/cryolabz/">
                        <span className="hover:text-gray-400">
                            <FaInstagram size={40} />
                        </span>
                    </Link>
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
