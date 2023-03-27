import React from "react"
import { InlineWidget, PopupWidget } from "react-calendly"

const book = () => {
    return (
        <div>
            <div></div>
            <div className="mb-10">
                <InlineWidget url="https://calendly.com/coreyloftus" className="top-0 w-[350px] m-w-[320px] h-screen" />
                {/* <PopupWidget color="#00a2ff" text="Request a Demo" textColor="#ffffff" url="https://calendly.com/coreyloftus" /> */}
            </div>
        </div>
    )
}

export default book
