import Head from "next/head"
import { Inter, Poppins } from "next/font/google"
import Hero from "@/components/Hero"
import Testimonials from "@/components/Testimonials"
import ContactForm from "@/components/ContactForm"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
    return (
        <>
            <Head>
                <title>CryoLabz</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="bg-gradient-to-b from-blue-100 to-blue-900">
                <div>
                    <Hero />
                    <Testimonials />
                    <ContactForm />
                </div>
            </main>
        </>
    )
}
