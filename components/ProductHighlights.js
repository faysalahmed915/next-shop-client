"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import axios from "axios"
import Image from "next/image"

export default function ProductHighlights() {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function fetchProducts() {
            try {
                const res = await axios.get("https://e-products-server.vercel.app/products")
                // Take only the first 8 products
                setProducts(res.data.slice(0, 8))
            } catch (err) {
                console.error(err)
            } finally {
                setLoading(false)
            }
        }
        fetchProducts()
    }, [])

    if (loading) return <p className="text-center py-10">Loading products...</p>

    if (products.length === 0)
        return <p className="text-center py-10">No products found.</p>

    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-10">Product Highlights</h2>

                <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                    {products.map((product) => (
                        <div
                            key={product._id}
                            className="bg-white p-6 rounded-lg border-2 border-b-blue-600 shadow hover:shadow-lg transition"
                        >
                            <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                            <p className="text-gray-600 mb-4">{product.description}</p>
                            <p className="font-bold mb-4">${product.price}</p>

                            {product.image && (
                                <Image
                                    src={`https://e-products-server.vercel.app/uploads/${product.image}`}
                                    alt={product.name}
                                    className="w-full h-40 object-cover rounded mb-4"
                                />
                            )}

                            <Link
                                href={`/products/${product._id}`}
                                className="text-blue-600 font-semibold hover:underline"
                            >
                                View Details
                            </Link>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-10">
                    <Link
                        href="/products"
                        className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700"
                    >
                        See More
                    </Link>
                </div>
            </div>
        </section>
    )
}