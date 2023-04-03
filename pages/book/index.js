import React from "react"
import { InlineWidget } from "react-calendly"

const book = () => {
    return (
        <div className="h-[80vh] w-full z-10">
            <InlineWidget url="https://calendly.com/coreyloftus" styles={{ height: "80vh", overflow: "hidden" }} />
        </div>
    )
}

export default book
