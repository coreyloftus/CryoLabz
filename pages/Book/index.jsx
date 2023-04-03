import React from "react"
import { InlineWidget } from "react-calendly"

const book = () => {
    return (
        <div className="h-screen">
            <InlineWidget url="https://calendly.com/coreyloftus" className="top-0" />
        </div>
    )
}

export default book
