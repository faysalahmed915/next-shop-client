"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
// import axios from "axios"

export default function ProductsPage() {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    // useEffect(() => {
    //     async function fetchProducts() {
    //         try {
    //             const res = await axios.get("http://localhost:5000/products")
    //             setProducts(res.data)
    //         } catch (err) {
    //             console.error(err)
    //         } finally {
    //             setLoading(false)
    //         }
    //     }
    //     fetchProducts()
    // }, [])

    if (loading) return <p className="text-center py-10">Loading products...</p>

    if (products.length === 0)
        return <p className="text-center py-10">No products found.</p>

    return (
        <div className="min-h-screen bg-gray-50">
            <h1 className="text-3xl font-bold text-center py-8">Products</h1>

            <div className="max-w-7xl mx-auto px-6 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                {products.map((product) => (
                    <div
                        key={product._id}
                        className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
                    >
                        <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
                        <p className="text-gray-600 mb-4">{product.description}</p>
                        <p className="font-bold mb-4">${product.price}</p>

                        {/* {product.image && (
                            <img
                                src={`http://localhost:5000/uploads/${product.image}`}
                                alt={product.name}
                                className="w-full h-40 object-cover rounded mb-4"
                            />
                        )} */}

                        <Link
                            href={`/products/${product._id}`}
                            className="text-blue-600 font-semibold hover:underline"
                        >
                            View Details
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}