import React, { useState } from "react"
import Link from "next/link"
import { FaLinkedin, FaFacebookSquare, FaTwitterSquare, FaInstagram } from "react-icons/fa"
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
                                        <option value="instagram">Instagram</option>
                                        <option value="twitter">Twitter</option>
                                        <option value="friend">From a friend</option>
                                        <option value="other">Other</option>
                                    </select>
                                    {formData.heardAbout === "other" && <input type="text" name="heardAboutOther" value={formData.heardAboutOther} onChange={handleChange} placeholder="Please specify" className="border p-2 rounded-md mt-2 w-full" />}
                                </div>
                                <div className="row-start-3 col-start-1 col-span-2 p-2">
                                    <textarea type="text" name="message" value={formData.message} onChange={handleChange} placeholder="How can we help?" className="border p-2 rounded-md w-full resize-none" required />
                                </div>
                                <div className="row-start-7 p-2 flex">
                                    <button className="mx-auto bg-blue-500 hover:bg-orange-500 rounded-lg p-2 mt-1 w-[50%]  max-w-[300px] text-2xl text-gray-50">Send</button>
                                </div>
                            </form>
                            <div className="mx-auto">
                                <div className="hidden lg:block">
                                    <Link href="https://www.instagram.com/cryolabz/" className="hover:text-gray-500">
                                        <div className="text-xl p-4 flex items-center">
                                            <FaInstagram size={40} />
                                            <p className="text-md p-4">
                                                <p>@cryolabz</p>
                                            </p>
                                        </div>
                                    </Link>
                                    <Link href="tel:718-912-4745" className="hover:text-gray-500">
                                        <div className="text-xl p-4 flex items-center">
                                            <AiOutlinePhone size={40} />
                                            <p className="text-md p-4 ">
                                                <p>+1 (347) 555-5555</p>
                                            </p>
                                        </div>
                                    </Link>
                                    <Link href="mailto:contact@cryolabz.net" className="hover:text-gray-500">
                                        <div className="text-xl p-4 flex items-center">
                                            <AiOutlineMail size={40} />
                                            <p className="text-md p-4">
                                                <p>hello@cryolabz.com</p>
                                            </p>
                                        </div>
                                    </Link>
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
