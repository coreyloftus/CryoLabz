import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"

const Layout = ({ children }) => {
    return (
        <div className="bg-[#f3f3f3]">
            <Navbar />
            <main className="w-full">{children}</main>
            <Footer />
        </div>
    )
}

export default Layout
