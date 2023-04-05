import React from "react"

const index = () => {
    return (
        <div className="h-screen w-full ">
            <div className="p-4 bg-gradient-to-r from-sky-700 via-sky-400 to-sky-700 text-gray-100">
                <div className="p-4 bg-gray-800 rounded-lg my-6">
                    <div className="text-3xl font-bold pb-2">About CryoLabz</div>
                    <p>Cryo Labz is an on-the-go cryotherapy mobile service that services clients at their homes, offices, or desired locations.</p>
                </div>
                <div className="p-4 bg-gray-800 rounded-lg my-6">
                    <div className="text-3xl font-bold pb-2">Where We Work</div>
                    <p>Cryo Labz serves the greater NYC and New Jersey area. We come straight to you, wherever you are.</p>
                </div>
                <div className="p-4 bg-gray-800 rounded-lg my-6">
                    <div className="text-3xl font-bold pb-2">Our Mission</div>
                    <p>
                        At CRYOLABZ LLC., we are equipped to address any skin irritation, pain or bodily discomfort you may experience. Our team will visit you daily to provide tailored treatment and ensure your comfort while promoting faster
                        healing. we are committed to supporting you throughout your recovery. Our mission is to enhance your health and well-being through cryotherapy, a new distinctive yet advantageous treatment that empowers individuals to excel.
                        We believe in rejuvenating your vitality and happiness, and we strive to redefine your overall wellness.
                    </p>
                </div>
                <div className="p-4 bg-gray-800 rounded-lg my-6">
                    <div className="text-3xl font-bold pb-2">What is Direct Isolated Cryotherapy?</div>
                    <p>
                        Direct isolated cryotherapy is a therapeutic technique that involves the application of extreme cold temperatures to a specific area of the body using a cryotherapy device. This targeted approach allows for localized treatment
                        of pain, inflammation, and injury, as well as improving blood flow and reducing muscle soreness. During the treatment, the affected area is exposed to sub-zero temperatures ranging from -100°C to -160°C for a period of several
                        minutes. The cold temperature causes the blood vessels to constrict, which helps reduce inflammation and swelling. Direct isolated cryotherapy has gained popularity among athletes and individuals seeking alternative pain
                        relief methods.
                    </p>
                </div>
            </div>
            <div className="relative bottom-0 left-0 right-0 h-16">
                <div className="h-full w-full">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <linearGradient id="gradient" x1="0%" x2="100%">
                            <stop offset="0%" stop-color="#11689b" />
                            <stop offset="50%" stop-color="#2bbff0" />
                            <stop offset="100%" stop-color="#11689b" />
                        </linearGradient>
                        <path fill="url(#gradient)" fill-opacity="1" d="M0,288L288,192L576,64L864,96L1152,0L1440,256L1440,0L1152,0L864,0L576,0L288,0L0,0Z"></path>
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default index
