import React from "react"

const index = () => {
    return (
        <div className="h-screen w-full">
            <div className="flex flex-col justify-center p-4">
                <div className="text-center pb-8">
                    <p className="text-3xl font-bold">Testimonials</p>
                    <p className="">Why Cryo?</p>
                </div>
                <div className="border rounded-md grid grid-cols-2 place-content-evenly">
                    <h2 className="text-xl text-right p-4 font-bold">Benefits</h2>
                    <ul className="text-md p-4">
                        <li>promotes healing</li>
                        <li>faster recovery</li>
                        <li>reduces scar tissue</li>
                        <li>increased mobility</li>
                    </ul>
                </div>
                <div className="border rounded-md grid grid-cols-2 place-content-evenly">
                    <ul className="text-md text-right p-4">
                        <li>promotes healing</li>
                        <li>faster recovery</li>
                        <li>reduces scar tissue</li>
                        <li>increased mobility</li>
                    </ul>
                    <h2 className="text-xl text-left p-4 font-bold">Benefits</h2>
                </div>
                <div className="border rounded-md grid grid-cols-2 place-content-evenly">
                    <h2 className="text-xl text-right p-4 font-bold">Benefits</h2>
                    <ul className="text-md p-4">
                        <li>promotes healing</li>
                        <li>faster recovery</li>
                        <li>reduces scar tissue</li>
                        <li>increased mobility</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default index
