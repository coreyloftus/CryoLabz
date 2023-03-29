import React from "react"
import { InlineWidget } from "react-calendly"

const book = () => {
    return (
        <div>
            <div className="mb-10">
                <InlineWidget url="https://calendly.com/coreyloftus" className="top-0 w-[350px] m-w-[320px] h-screen" />
            </div>
        </div>
    )
}

export default book
