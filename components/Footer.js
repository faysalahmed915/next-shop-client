"use client"
import Link from "next/link"

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-10">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">

                {/* About */}
                <div>
                    <h3 className="text-xl font-bold mb-4">MyShop</h3>
                    <p className="text-gray-300">
                        Your one-stop shop for amazing products. Quality, reliability, and convenience all in one place.
                    </p>
                </div>

                {/* Links */}
                <div>
                    <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                    <ul className="space-y-2">
                        <li>
                            <Link href="/" className="hover:text-gray-400">Home</Link>
                        </li>
                        <li>
                            <Link href="/products" className="hover:text-gray-400">Products</Link>
                        </li>
                        <li>
                            <Link href="/login" className="hover:text-gray-400">Login</Link>
                        </li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="text-xl font-bold mb-4">Contact Us</h3>
                    <p className="text-gray-300">Email: support@myshop.com</p>
                    <p className="text-gray-300">Phone: +1 234 567 890</p>
                </div>

            </div>

            {/* Bottom Text */}
            <div className="mt-10 text-center text-gray-400 text-sm">
                &copy; {new Date().getFullYear()} MyShop. All rights reserved.
            </div>
        </footer>
    )
}