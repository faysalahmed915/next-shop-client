"use client"
import Link from "next/link"
import { useSession } from "next-auth/react"
import Image from "next/image"

export default function Hero() {
    const { data: session, status } = useSession()

    // If still loading session
    if (status === "loading") return null

    return (
        <section className="bg-blue-600 text-white">
            <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col-reverse md:flex-row items-center md:justify-between">

                {/* Text Content */}
                <div className="text-center md:text-left space-y-6 md:max-w-lg">
                    {session ? (
                        <>
                            <h1 className="text-4xl md:text-5xl font-bold">
                                Welcome back, {session.user.name || "User"}!
                            </h1>
                            <p className="text-lg md:text-xl text-gray-100">
                                Manage your products, explore the catalog, and track orders easily.
                            </p>
                            <div className="flex justify-center md:justify-start space-x-4">
                                {/* <Link href="/dashboard" className="px-6 py-3 bg-white text-blue-600 font-semibold rounded hover:bg-gray-100">
                                    Go to Dashboard
                                </Link> */}
                                <Link href="/products" className="px-6 py-3 border border-white font-semibold rounded hover:bg-white hover:text-blue-600 transition">
                                    Browse Products
                                </Link>
                            </div>
                        </>
                    ) : (
                        <>
                            <h1 className="text-4xl md:text-5xl font-bold">
                                Welcome to MyShop
                            </h1>
                            <p className="text-lg md:text-xl text-gray-100">
                                Discover amazing products and manage them easily with our platform.
                            </p>
                            <div className="flex justify-center md:justify-start space-x-4">
                                <Link href="/products" className="px-6 py-3 bg-white text-blue-600 font-semibold rounded hover:bg-gray-100">
                                    Browse Products
                                </Link>
                                <Link href="/login" className="px-6 py-3 border border-white font-semibold rounded hover:bg-white hover:text-blue-600 transition">
                                    Login
                                </Link>
                            </div>
                        </>
                    )}
                </div>

                {/* Image / Illustration */}
                <div className="mb-10 md:mb-0">
                    <Image
                        src="https://i.ibb.co.com/C3RW9MNF/home.jpg" 
                        alt="Hero Illustration"
                        className="w-full max-w-md"
                    />
                </div>

            </div>
        </section>
    )
}