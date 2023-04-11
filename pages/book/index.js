import React from "react"
import { InlineWidget } from "react-calendly"

const book = () => {
    return (
        <div className="h-[80vh] w-full z-10">
            <div className="p-2">
            <InlineWidget url="https://calendly.com/cryolabz" styles={{ height: "80vh", overflow: "hidden" }} />
            </div>
        </div>
    )
}

export default book
