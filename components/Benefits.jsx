import React from "react"

const Benefits = () => {
    return (
        <div className="h-screen w-full text-gray-50">
            <div className="h-full flex flex-col justify-center p-4">
                <div className="text-center pb-8">
                    <p className="text-3xl font-bold">Benefits</p>
                </div>
                <div className="border rounded-md grid grid-cols-2 place-content-evenly">
                    <h2 className="text-xl text-right p-4 font-bold">Health and Wellness</h2>
                    <ul className="text-md p-4">
                        <li>Decrease inflammation</li>
                        <li>Improve mood swings</li>
                        <li>Boost energy</li>
                        <li>Promote post surgery healing</li>
                        <li>Relieves chronic pain from fibromyalgia, joint inflammation, arthritis</li>
                        <li>Increase blood circulation</li>
                    </ul>
                </div>
                <div className="border rounded-md grid grid-cols-2 place-content-evenly">
                    <h2 className="text-xl text-right p-4 font-bold">Fitness Optimization</h2>
                    <ul className="text-md p-4">
                        <li>Fast Recovery</li>
                        <li>Improved sleep</li>
                        <li>Decrease inflammation</li>
                        <li>Strengthens cartilage</li>
                        <li>Increase strength of muscle and joints</li>
                    </ul>
                </div>
                <div className="border rounded-md grid grid-cols-2 place-content-evenly">
                    <h2 className="text-xl text-right p-4 font-bold">Beauty and Anti-Aging</h2>
                    <ul className="text-md p-4">
                        <li>Burn fat</li>
                        <li>Increase collagen</li>
                        <li>Improve skin condition</li>
                        <li>Reduce appearance of cellulite</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Benefits
