import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"

const Layout = ({ children }) => {
    return (
        <div className="bg-gradient-to-b from-blue-100 to-blue-900">
            <Navbar />
            <main className="w-full">{children}</main>
            <Footer />
        </div>
    )
}

export default Layout
