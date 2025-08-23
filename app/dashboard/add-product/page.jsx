"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";

export default function AddProductPage() {
    const { data: session, status } = useSession();
    const router = useRouter();

    const [formData, setFormData] = useState({
        name: "",
        price: "",
        description: "",
    });
    const [loading, setLoading] = useState(false);

    // Redirect unauthenticated users
    useEffect(() => {
        if (status === "unauthenticated") router.push("/login");
    }, [status, router]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            await axios.post("https://next-shop-server-alpha.vercel.app/products", formData);

            toast.success("✅ Product added successfully!");
            setFormData({ name: "", price: "", description: "" });

            // Redirect after 1 second to allow toast to be visible
            setTimeout(() => {
                router.push("/products");
            }, 1000);
        } catch (error) {
            console.error(error);
            toast.error("❌ Failed to add product.");
        } finally {
            setLoading(false);
        }
    };

    if (status === "loading") return <p>Loading...</p>;

    return (
        <div className="max-w-md mx-auto my-10 p-6 bg-white shadow rounded">
            <Toaster position="top-right" />
            <h1 className="text-2xl font-bold mb-4">Add New Product</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    name="name"
                    placeholder="Product Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border p-2 rounded"
                    required
                />
                <input
                    type="number"
                    name="price"
                    placeholder="Price"
                    value={formData.price}
                    onChange={handleChange}
                    className="w-full border p-2 rounded"
                    required
                />
                <textarea
                    name="description"
                    placeholder="Description"
                    value={formData.description}
                    onChange={handleChange}
                    className="w-full border p-2 rounded"
                    required
                />

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
                >
                    {loading ? "Adding..." : "Add Product"}
                </button>
            </form>
        </div>
    );
}