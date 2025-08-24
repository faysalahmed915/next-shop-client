"use client"

import { useParams, useRouter } from "next/navigation"
import Link from "next/link"
import { useEffect, useState } from "react"
import axios from "axios"

export default function ProductDetailsPage() {
    const params = useParams()
    const { id } = params
    const router = useRouter()
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function fetchProduct() {
            try {
                const res = await axios.get(`https://next-shop-server-alpha.vercel.app/products`)
                const found = res.data.find((p) => p._id === id)
                setProduct(found || null)
            } catch (err) {
                console.error(err)
                setProduct(null)
            } finally {
                setLoading(false)
            }
        }

        fetchProduct()
    }, [id])

    if (loading) {
        return <p className="text-center py-10">Loading product...</p>
    }

    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <h1 className="text-2xl font-bold">Product not found</h1>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center py-16 px-6">
            <h1 className="text-3xl font-bold mb-6">{product.name}</h1>

            {product.image && (
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-96 h-80 object-cover rounded mb-6"
                />
            )}

            <p className="text-gray-700 mb-4">{product.description}</p>
            <p className="text-xl font-semibold mb-6">${product.price}</p>

            <Link
                href="/products"
                className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
                Back to Products
            </Link>
        </div>
    )
}