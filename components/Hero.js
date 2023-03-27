import React from "react"

const Hero = () => {
    return (
        <div>
            <div className="w-full h-screen bg-blue-200">
                <div className="grid grid-cols-2 items-center place-content-center">
                    <div className="flex items-center justify-center">
                        <h2>left half</h2>
                    </div>
                    <div className="flex items-center justify-center">
                        <p>right half</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
