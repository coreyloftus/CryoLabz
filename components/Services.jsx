import React from "react"

const Services = () => {
    return (
        <div className="h-screen font-poppins">
            <div className="flex flex-col items-center justify-center h-full">
                <div className="bg-blue-50 text-gray-800 p-6 flex-grow">
                    <div className=""></div>
                    <h2 className="text-3xl font-bold pb-2 mb-4 text-center border-b text-[#11689b]">Services</h2>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="">
                            <div className="pb-6">
                                <h3 className="text-xl font-bold text-[#2d99cd]">Cryo Slim:</h3>
                                <p className="text-md">
                                    Direct isolated cryotherapy is a therapeutic technique that involves the application of extreme cold temperatures to a specific area of the body using a cryotherapy device. This targeted approach allows for
                                    localized treatment of pain, inflammation, and injury, as well as improving blood flow and reducing muscle soreness. During the treatment, the affected area is exposed to sub-zero temperatures ranging from -100°C
                                    to -160°C for a period of several minutes. The cold temperature causes the blood vessels to constrict, which helps reduce inflammation and swelling. Direct isolated cryotherapy has gained popularity among athletes
                                    and individuals seeking alternative pain relief methods.
                                </p>
                            </div>
                            <div className="pb-6">
                                <h3 className="text-xl font-bold text-[#2d99cd]">Targeted Cryotherapy:</h3>
                                <p className="text-md">
                                    We're able to target the specific areas to be treated. This is sensational for athletes, our proud service members, first responders, teachers, and many of those who sit for an extended period of time at their
                                    workplace, oftentimes causing "piriformis syndrome.
                                </p>
                            </div>
                            <div className="pb-6">
                                <h3 className="text-xl font-bold text-[#2d99cd]">Cryo Facial Services:</h3>
                                <p className="text-md">
                                    Cryo-Facials produce an anti-aging effect and can help users maintain a youthful appearance, by targeting wrinkles, fine lines, blemishes, and scars around the eyes, nose, mouth, and neck. Repeated treatment has
                                    been linked to firmer skin and a visible improvement in skin quality, leaving it perfected and smooth to the touch.
                                </p>
                            </div>
                            <div className="">
                                <h3 className="text-xl font-bold text-[#2d99cd]">Cryo Skin Condition Treatments:</h3>
                                <p className="text-md">
                                    Many people suffer from chronic skin conditions, such as psoriasis, eczema, and acne, because the Kaasen Pro is so versatile and able to pinpoint a specific area, we're able to treat the symptoms and signs of these
                                    autoimmune conditions. Redness, dryness, itchiness, and pain can all be significantly reduced without any side effects.
                                </p>
                            </div>
                        </div>
                        <div className="bg-black h-full">
                            <h2>image box</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services
