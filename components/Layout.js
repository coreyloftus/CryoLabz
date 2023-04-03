import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"

const Layout = ({ children }) => {
    return (
        <div className="bg-gray-800 text-gray-50 font-poppins">
            <Navbar />
            <main className="w-full">{children}</main>
            <Footer />
        </div>
    )
}

export default Layout
