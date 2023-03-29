import React from "react"
import { AiFillStar, AiOutlineStar } from "react-icons/ai"

const Testimonials = () => {
    const reviews = [
        {
            name: "Corey Loftus",
            review: "Diego is fantastic. He was friendly, professional, and knowledgeable. After the treatment, my shoulder is feeling brand new! Thank you!",
            stars: 5,
        },
        {
            name: "customer 2",
            review: "Diego is fantastic. He was friendly, professional, and knowledgeable. After the treatment, my shoulder is feeling brand new! Thank you!",
            stars: 5,
        },
        {
            name: "customer 3",
            review: "Diego is fantastic. He was friendly, professional, and knowledgeable. After the treatment, my shoulder is feeling brand new! Thank you!",
            stars: 5,
        },
        {
            name: "customer 4",
            review: "Diego is fantastic. He was friendly, professional, and knowledgeable. After the treatment, my shoulder is feeling brand new! Thank you!",
            stars: 5,
        },
        {
            name: "customer 4",
            review: "Diego is fantastic. He was friendly, professional, and knowledgeable. After the treatment, my shoulder is feeling brand new! Thank you!",
            stars: 5,
        },
        {
            name: "customer 4",
            review: "Diego is fantastic. He was friendly, professional, and knowledgeable. After the treatment, my shoulder is feeling brand new! Thank you!",
            stars: 5,
        },
        {
            name: "customer 4",
            review: "Diego is fantastic. He was friendly, professional, and knowledgeable. After the treatment, my shoulder is feeling brand new! Thank you!",
            stars: 5,
        },
        {
            name: "customer 4",
            review: "Diego is fantastic. He was friendly, professional, and knowledgeable. After the treatment, my shoulder is feeling brand new! Thank you!",
            stars: 5,
        },
    ]
    return (
        <div>
            <div className="w-full h-full text-gray-50">
                <div className="flex flex-col items-center justify-center h-full">
                    <div className="rounded-lg p-2 w-full">
                        <div className=" grid lg:grid-cols-4 md:grid-cols-1 grid-rows-auto gap-6 justify-items-center text-center p-2">
                            {reviews.map((data) => {
                                return (
                                    <div className="block lg:w-64 lg:h-96 max-w-lg min-h-max p-6 rounded-lg text-2xl">
                                        <div className="relative min-h-min bg-blue-50 text-gray-600 rounded-lg shadow-lg p-6">
                                            <p className="font-normal text-sm p-4">{data.review}</p>
                                        </div>
                                        <p className="mt-2 text-lg text-left font-bold tracking-tight">{data.name}</p>
                                        <div className="flex text-left text-yellow-400">{[...Array(5)].map((_, index) => (data.stars >= index + 1 ? <AiFillStar key={index} /> : <AiOutlineStar key={index} />))}</div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials
