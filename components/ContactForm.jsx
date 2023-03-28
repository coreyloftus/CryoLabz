import React, { useState } from "react"
import Link from "next/link"
import { FaLinkedin, FaFacebookSquare, FaTwitterSquare } from "react-icons/fa"
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai"

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
        heardAbout: "",
    })
    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prevState) => ({ ...prevState, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
    }
    return (
        <div>
            <div className="h-full text-gray-50">
                <div className="flex flex-col items-center justify-center h-full">
                    <div className="p-2 w-full h-full">
                        <p className="text-2xl text-center pb-4">Contact us today!</p>
                        <div className="grid lg:grid-cols-2 grid-cols-1 grid-rows-auto gap-y-4 h-full place-content-center p-6">
                            <form onSubmit={handleSubmit} className="text-gray-800">
                                <div className="row-start-3 col-start-1 col-span-2 p-2">
                                    <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" className="border p-2 rounded-md w-full" required />
                                </div>
                                <div className="row-start-4 col-start-1 col-span-2 p-2">
                                    <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" className="border p-2 rounded-md w-full" required />
                                </div>
                                <div className="row-start-5 col-start-1 col-span-2 p-2">
                                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" className="border p-2 rounded-md w-full" required />
                                </div>
                                <div className="row-start-6 col-start-1 col-span-2 p-2 min-h-fit">
                                    <select name="heardAbout" value={formData.heardAbout} onChange={handleChange} className="border p-2 rounded-md w-full" required>
                                        <option value="">How did you hear about Cryolabz?</option>
                                        <option value="search">Search engine</option>
                                        <option value="social">Social media</option>
                                        <option value="friend">From a friend</option>
                                        <option value="other">Other</option>
                                    </select>
                                    {formData.heardAbout === "other" && <input type="text" name="heardAboutOther" value={formData.heardAboutOther} onChange={handleChange} placeholder="Please specify" className="border p-2 rounded-md mt-2 w-full" />}
                                </div>
                                <div className="row-start-7 p-2 flex">
                                    <button className="mx-auto bg-blue-500 hover:bg-orange-500 rounded-lg p-2 mt-1 w-[50%]  max-w-[300px] text-2xl text-gray-50">Send</button>
                                </div>
                            </form>
                            <div>
                                <div className="hidden rounded-md lg:grid lg:grid-cols-2">
                                    <div className="text-xl p-4 flex justify-end">
                                        <FaLinkedin size={30} />
                                    </div>
                                    <ul className="text-md p-4 flex justify-start">
                                        <li>@cryolabz</li>
                                    </ul>
                                    <div className="text-xl p-4 flex justify-end">
                                        <FaTwitterSquare size={30} />
                                    </div>
                                    <ul className="text-md p-4 flex justify-start">
                                        <li>@cryolabz</li>
                                    </ul>
                                    <div className="text-xl p-4 flex justify-end">
                                        <FaFacebookSquare size={30} />
                                    </div>
                                    <ul className="text-md p-4 flex justify-start">
                                        <li>facebook.com/cryolabs</li>
                                    </ul>
                                    <div className="text-xl p-4 flex justify-end">
                                        <AiOutlinePhone size={30} />
                                    </div>
                                    <ul className="text-md p-4 flex justify-start">
                                        <li>+1 (347) 555-5555</li>
                                    </ul>
                                    <div className="text-xl p-4 flex justify-end">
                                        <AiOutlineMail size={30} />
                                    </div>
                                    <ul className="text-md p-4 flex justify-start">
                                        <li>hello@cryolabz.com</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactForm
