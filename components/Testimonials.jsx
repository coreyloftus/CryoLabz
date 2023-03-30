import React, { useState, useEffect } from "react"
import { AiFillStar, AiOutlineStar, AiOutlineLeft, AiOutlineRight } from "react-icons/ai"

const Testimonials = () => {
    const reviews = [
        {
            name: "Corey Loftus",
            review: "Diego is fantastic. He was friendly, professional, and knowledgeable. After the treatment, my shoulder is feeling brand new! Thank you!",
            stars: 5,
        },
        {
            name: "Vasco da Gama",
            review: "I was skeptical at first, but Diego's mobile cryo therapy service really works wonders! I highly recommend him to anyone looking to recover quickly after intense physical activity.",
            stars: 4,
        },
        {
            name: "Fridtjof Nansen",
            review: "I've tried other cryo therapy services in the past, but Diego's is by far the best. He's knowledgeable, professional, and his treatments are always effective. Highly recommended!",
            stars: 5,
        },
        {
            name: "Amelia Earhart",
            review: "I'm always on the go, so I appreciate how convenient and flexible Diego's mobile cryo therapy service is. Plus, the results are amazing!",
            stars: 4,
        },
        {
            name: "Robert Peary",
            review: "Diego's cryo therapy service is a game changer for anyone looking to improve their recovery time. I've noticed a huge difference in my performance since starting treatments with him.",
            stars: 5,
        },
        {
            name: "Jacques Cousteau",
            review: "I was hesitant to try cryo therapy at first, but Diego's knowledge and professionalism put me at ease. The results were amazing and I'm now a believer in the power of cryo therapy!",
            stars: 5,
        },
        {
            name: "Roald Amundsen",
            review: "Diego's mobile cryo therapy service is the perfect solution for anyone looking for quick and effective recovery after intense physical activity. Highly recommended!",
            stars: 4,
        },
        {
            name: "Gertrude Bell",
            review: "Diego is amazing! His cryo therapy treatments always leave me feeling rejuvenated and ready to take on the world. Highly recommended!",
            stars: 5,
        },
        {
            name: "Edmund Hillary",
            review: "I've tried other cryo therapy services before, but none have been as effective as Diego's. His knowledge and expertise really make a difference. Highly recommended!",
            stars: 5,
        },
        {
            name: "Christopher Columbus",
            review: "I was hesitant to try cryo therapy, but Diego's mobile service made it convenient and accessible. The results were amazing and I'm now a believer!",
            stars: 4,
        },
        {
            name: "Roald Dahl",
            review: "Diego's mobile cryo therapy service is the perfect solution for anyone looking for quick and effective recovery after intense physical activity. Highly recommended!",
            stars: 5,
        },
        {
            name: "Neil Armstrong",
            review: "I was blown away by the results of Diego's cryo therapy treatment. I've never felt better or more energized. Highly recommended!",
            stars: 5,
        },
        {
            name: "Sacagawea",
            review: "Diego's mobile cryo therapy service is the perfect way to recover after a long day of hiking and exploring. Highly recommended!",
            stars: 4,
        },
    ]
    const [page, setPage] = useState(1)
    const [reviewsPerPage, setReviewsPerPage] = useState(4)
    const maxPage = Math.ceil(reviews.length / reviewsPerPage)

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth < 768) {
                setReviewsPerPage(1)
            } else if (window.innerWidth < 1024) {
                setReviewsPerPage(2)
            } else {
                setReviewsPerPage(4)
            }
        }
        handleResize()
        window.addEventListener("resize", handleResize)
        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])

    const handlePrevPage = () => {
        setPage(page > 1 ? page - 1 : maxPage)
    }
    const handleNextPage = () => {
        setPage(page < maxPage ? page + 1 : 1)
    }

    const updatedReviews = [...reviews, ...reviews]
    return (
        <div>
            <div className="w-full h-full text-gray-50">
                <div className="flex flex-col items-center justify-center h-full">
                    <div className="flex justify-between w-full px-4">
                        <button className="mr-2 transition ease-in-out hover:-translate-x-1 hover:scale-110" onClick={handlePrevPage}>
                            <AiOutlineLeft size={30} />
                        </button>
                        <div className="rounded-lg p-2 w-full overflow-x-auto overflow-y-hidden transition-all duration-500 ease-in">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                                {updatedReviews.slice((page - 1) * reviewsPerPage, page * reviewsPerPage).map((data, index) => (
                                    <div key={index} className="max-w-lg min-h-max p-6 rounded-lg text-2xl">
                                        <div className="relative min-h-min bg-blue-50 text-gray-600 rounded-lg shadow-lg p-6">
                                            <p className="font-normal text-sm p-4">{data.review}</p>
                                        </div>
                                        <p className="mt-2 text-lg text-left font-bold tracking-tight">{data.name}</p>
                                        <div className="flex text-left text-yellow-400">{[...Array(5)].map((_, index) => (data.stars >= index + 1 ? <AiFillStar key={index} /> : <AiOutlineStar key={index} />))}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <button onClick={handleNextPage} className="transition ease-in-out hover:scale-110 hover:-translate-x-[-5px]">
                            <AiOutlineRight size={30} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials
